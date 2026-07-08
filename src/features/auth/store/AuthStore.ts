import { observable, action, computed, runInAction } from 'mobx';
import { authService } from '../services/authService';
import type { LoginCredentials, User } from '../types';

export class AuthStore {
  @observable accessor accessToken: string | null = null;
  @observable accessor user: User | null = null;
  @observable accessor isInitialized: boolean = false;
  
  private refreshPromise: Promise<string> | null = null;
  private initPromise: Promise<void> | null = null;

  @computed
  get isAuthenticated(): boolean {
    return this.accessToken !== null;
  }

  @action
  init(force = false): Promise<void> {
    if (this.isInitialized && !force) {
      return Promise.resolve();
    }
    
    if (this.initPromise) {
      return this.initPromise;
    }

    this.initPromise = (async () => {
      try {
        this.refreshPromise = this.refreshPromise || authService.refresh();
        const token = await this.refreshPromise;
        const user = await authService.getMe(token);
        
        runInAction(() => {
          this.accessToken = token;
          this.user = user;
        });
      } catch {
        runInAction(() => {
          this.accessToken = null;
          this.user = null;
        });
      } finally {
        runInAction(() => {
          this.isInitialized = true;
          this.initPromise = null;
          this.refreshPromise = null;
        });
      }
    })();

    return this.initPromise;
  }

  @action
  async login(credentials: LoginCredentials): Promise<void> {
    const { token, user } = await authService.login(credentials);
    runInAction(() => {
      this.accessToken = token;
      this.user = user;
    });
  }

  @action
  logout(): void {
    this.accessToken = null;
    this.user = null;
    this.refreshPromise = null;
    this.initPromise = null;
    // Fire and forget logout to clear server-side cookie/session
    authService.logout().catch(() => {});
  }

  @action
  async handleUnauthorized(): Promise<void> {
    if (this.refreshPromise) {
      await this.refreshPromise;
      return;
    }

    try {
      this.refreshPromise = authService.refresh();
      const newToken = await this.refreshPromise;
      runInAction(() => {
        this.accessToken = newToken;
        this.refreshPromise = null;
      });
    } catch (err) {
      runInAction(() => {
        this.refreshPromise = null;
      });
      this.logout();
      throw err;
    }
  }
}

export const authStore = new AuthStore();
