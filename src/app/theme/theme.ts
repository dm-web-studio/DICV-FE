import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: { main: '#0B3D91' },      // example — replace with real brand colors
    secondary: { main: '#F5A623' },
    background: { default: '#F7F8FA', paper: '#FFFFFF' },
    text: { primary: '#1A1A1A', secondary: '#5F6368' },
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
