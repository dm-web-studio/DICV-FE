import { useState } from 'react';
import { useNavigate, useParams, Link as RouterLink } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import { authStore } from '../store/AuthStore';
import {
  FormContainer,
  HeaderBox,
  LogoCircle,
  Title,
  Subtitle,
  StyledButton,
  CenteredLinkWrapper
} from '../components/LoginForm.styles';

const PageContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(2),
}));

export function ResetPasswordPage() {
  const { token } = useParams<{ token: string }>();
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });
  const [status, setStatus] = useState({
    loading: false,
    error: null as string | null,
    success: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;
    
    if (formData.password !== formData.confirmPassword) {
      setStatus((prev) => ({ ...prev, error: 'Passwords do not match' }));
      return;
    }

    if (formData.password.length < 8) {
      setStatus((prev) => ({ ...prev, error: 'Password must be at least 8 characters' }));
      return;
    }

    setStatus({ loading: true, error: null, success: false });

    try {
      await authStore.resetPassword(token, formData.password);
      setStatus((prev) => ({ ...prev, loading: false, success: true }));
      setTimeout(() => {
        navigate('/admin/login', { replace: true });
      }, 3000);
    } catch (err: any) {
      setStatus({
        loading: false,
        success: false,
        error: err.response?.data?.error?.message || 'Failed to reset password. The link might be invalid or expired.',
      });
    }
  };

  return (
    <PageContainer>
      <FormContainer onSubmit={handleSubmit}>
        <HeaderBox>
          <LogoCircle>
            <AdminPanelSettingsOutlinedIcon />
          </LogoCircle>
          <Title>Reset Password</Title>
          <Subtitle>Create a new password for your account</Subtitle>
        </HeaderBox>

        {status.error && <Alert severity="error">{status.error}</Alert>}
        {status.success && <Alert severity="success">Password reset successfully! Redirecting to login...</Alert>}

        {!status.success && (
          <>
            <TextField
              label="New Password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleChange}
              required
              fullWidth
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlinedIcon fontSize="small" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                        size="small"
                      >
                        {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }
              }}
            />

            <TextField
              label="Confirm New Password"
              name="confirmPassword"
              type={showPassword ? 'text' : 'password'}
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              fullWidth
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlinedIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }
              }}
            />

            <StyledButton
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={status.loading || !formData.password || !formData.confirmPassword}
              disableElevation
            >
              {status.loading ? 'Resetting...' : 'Reset Password'}
            </StyledButton>
          </>
        )}

        <CenteredLinkWrapper>
          <Link component={RouterLink} to="/admin/login" variant="body2">
            Back to Login
          </Link>
        </CenteredLinkWrapper>
      </FormContainer>
    </PageContainer>
  );
}
