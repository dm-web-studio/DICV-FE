import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import InputAdornment from '@mui/material/InputAdornment';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
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

export function ForgotPasswordPage() {
  const [formData, setFormData] = useState({ email: '' });
  const [status, setStatus] = useState({
    loading: false,
    error: null as string | null,
    success: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ email: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });

    try {
      await authStore.forgotPassword(formData.email);
      setStatus((prev) => ({ ...prev, loading: false, success: true }));
    } catch (err: any) {
      setStatus({
        loading: false,
        success: false,
        error: err.response?.data?.error?.message || 'Failed to send reset email.',
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
          <Title>Forgot Password</Title>
          <Subtitle>Enter your email to receive a reset link</Subtitle>
        </HeaderBox>

        {status.error && <Alert severity="error">{status.error}</Alert>}
        {status.success && <Alert severity="success">If an account exists, a reset link has been sent to that email.</Alert>}

        {!status.success && (
          <>
            <TextField
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
              autoComplete="email"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlinedIcon fontSize="small" />
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
              disabled={status.loading || !formData.email}
              disableElevation
            >
              {status.loading ? 'Sending...' : 'Send Reset Link'}
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
