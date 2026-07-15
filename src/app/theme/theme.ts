import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    heroTitle: React.CSSProperties;
    footerTitle: React.CSSProperties;
    pageTitle: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    heroTitle?: React.CSSProperties;
    footerTitle?: React.CSSProperties;
    pageTitle?: React.CSSProperties;
  }
  interface Theme {
    badgeColors: {
      blue: { bg: string; text: string };
      green: { bg: string; text: string };
      purple: { bg: string; text: string };
      orange: { bg: string; text: string };
      grey: { bg: string; text: string };
    };
  }
  interface ThemeOptions {
    badgeColors?: {
      blue: { bg: string; text: string };
      green: { bg: string; text: string };
      purple: { bg: string; text: string };
      orange: { bg: string; text: string };
      grey: { bg: string; text: string };
    };
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    heroTitle: true;
    footerTitle: true;
    pageTitle: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: { main: '#0B3D91', dark: '#0B1A40', light: '#E7ECF4' },
    secondary: { main: '#F5A623', light: '#FFF8E7' },
    warning: { main: '#FFB800' },
    background: { default: '#F7F8FA', paper: '#FFFFFF' },
    text: { primary: '#1A1A1A', secondary: '#5F6368' },
    grey: {
      50: '#F5F6F8',
      100: '#F7F9FC',
    },
  },
  badgeColors: {
    blue: { bg: '#E3F2FD', text: '#1976D2' },
    green: { bg: '#E8F5E9', text: '#2E7D32' },
    purple: { bg: '#F3E5F5', text: '#7B1FA2' },
    orange: { bg: '#FFF3E0', text: '#E65100' },
    grey: { bg: '#F5F5F5', text: '#616161' },
  },
  spacing: 4, // base unit 4px, not MUI's default 8px — compact by default,
              // so theme.spacing(1) = 4px, theme.spacing(2) = 8px, etc.
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    // ONLY 12/14/16 anywhere — every variant maps to one of these three
    h1: { fontSize: 16, fontWeight: 700 },
    h2: { fontSize: 16, fontWeight: 600 },
    h3: { fontSize: 14, fontWeight: 600 },
    body1: { fontSize: 14 },
    body2: { fontSize: 12 },
    caption: { fontSize: 12 },
    button: { fontSize: 14, textTransform: 'none' },
    heroTitle: { fontSize: 40, fontWeight: 700, lineHeight: 1.15 },
    footerTitle: { fontSize: 20, lineHeight: 1.2 },
    pageTitle: { fontSize: 32, fontWeight: 700, lineHeight: 1.2 },
  },
  components: {
    // global defaults so agents don't need to repeat size props everywhere
    MuiButton: { defaultProps: { size: 'small' } },
    MuiTextField: { defaultProps: { size: 'small', margin: 'dense' } },
    MuiSelect: { defaultProps: { size: 'small' } },
    MuiTable: { defaultProps: { size: 'small' } },
    MuiIconButton: { defaultProps: { size: 'small' } },
  },
});
