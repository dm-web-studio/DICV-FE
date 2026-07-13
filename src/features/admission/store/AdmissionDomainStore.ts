import { observable, computed } from 'mobx';
import { admissionProcedureConfig } from '../config/admissionProcedureConfig';
import type { AdmissionProcedure, AdmissionStep } from '../types';

export class AdmissionDomainStore {
  @observable accessor procedure: AdmissionProcedure = admissionProcedureConfig;

  @computed
  get sortedSteps(): AdmissionStep[] {
    return [...this.procedure.steps].sort((a, b) => a.order - b.order);
  }
}
