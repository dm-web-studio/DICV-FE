import { useState } from 'react';
import { useLocation, useNavigate, Link as RouterLink } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import InputAdornment from '@mui/material/InputAdornment';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import { authStore } from '../store/AuthStore';
import {
  FormContainer,
  HeaderBox,
  LogoCircle,
  Title,
  Subtitle,
  StyledButton,
  ForgotPasswordWrapper
} from './LoginForm.styles';

export function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [status, setStatus] = useState({
    loading: false,
    error: null as string | null,
  });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/admin';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, error: null });

    try {
      await authStore.login({ email: formData.email, password: formData.password });
      navigate(from, { replace: true });
    } catch (err: any) {
      setStatus({
        loading: false,
        error: err.response?.data?.error?.message || 'Login failed. Please check your credentials.',
      });
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <HeaderBox>
        <LogoCircle>
          <AdminPanelSettingsOutlinedIcon />
        </LogoCircle>
        <Title>Admin Portal</Title>
        <Subtitle>Sign in to manage DICV website content</Subtitle>
      </HeaderBox>

      {status.error && <Alert severity="error">{status.error}</Alert>}

      <TextField
        label="Email Address"
        name="email"
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

      <TextField
        label="Password"
        name="password"
        type={showPassword ? 'text' : 'password'}
        value={formData.password}
        onChange={handleChange}
        required
        fullWidth
        autoComplete="current-password"
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

      <ForgotPasswordWrapper>
        <Link component={RouterLink} to="/admin/forgot-password" variant="body2">
          Forgot Password?
        </Link>
      </ForgotPasswordWrapper>

      <StyledButton
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        disabled={status.loading}
        disableElevation
      >
        {status.loading ? 'Signing in...' : 'Sign In'}
      </StyledButton>
    </FormContainer>
  );
}
