import { styled } from '@mui/material/styles';

export const HeaderContainer = styled('header')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  position: 'sticky',
  top: 0,
  zIndex: theme.zIndex.appBar,
  transition: 'all 0.3s ease',
}));
