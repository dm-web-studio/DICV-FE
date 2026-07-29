import { styled, keyframes } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Link as RouterLink } from 'react-router-dom';

const marqueeScroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

export const BarContainer = styled(Box)(({ theme }) => ({
  background: `linear-gradient(90deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(1, 4),
  display: 'flex',
  alignItems: 'center',
  minHeight: 40,
  position: 'relative',
  boxShadow: theme.shadows[3],
  zIndex: 2,
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1, 2),
  },
}));



// We need an outer wrapper with overflow hidden for the marquee
export const MarqueeWrapper = styled(Box)({
  flexGrow: 1,
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  whiteSpace: 'nowrap',
});

// The track that actually scrolls
export const MarqueeTrack = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  animation: `${marqueeScroll} 35s linear infinite`, // slow and readable
  '&:hover, &:focus-within': {
    animationPlayState: 'paused',
  },
});

export const NoticeLink = styled(RouterLink)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  textDecoration: 'none',
  fontSize: 14,
  fontWeight: 600,
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginRight: theme.spacing(8), // Comfortable gap between repeating items
  opacity: 0.9,
  transition: 'color 0.2s ease, opacity 0.2s ease, text-shadow 0.2s ease',
  '&:hover': {
    opacity: 1,
    color: theme.palette.secondary.main,
    textDecoration: 'underline',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: 12,
    marginRight: theme.spacing(4),
  }
}));

export const CloseButtonContainer = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  flexShrink: 0,
}));
