import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

export const CardContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(6), // 24px padding
  boxShadow: theme.shadows[1],
  flex: 1,
}));

export const TitleWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(6),
}));

export const DecorativeTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  position: 'relative',
  '&::after': {
    content: '""',
    display: 'block',
    width: 30,
    height: 2,
    backgroundColor: theme.palette.secondary.main,
    marginTop: theme.spacing(2),
  }
}));

export const StyledAccordion = styled(Accordion)(({ theme }) => ({
  boxShadow: 'none',
  backgroundColor: 'transparent',
  '&:before': {
    display: 'none',
  },
  borderBottom: `1px solid ${theme.palette.divider}`,
  '&:last-child': {
    borderBottom: 'none',
  },
}));

export const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  padding: 0,
  minHeight: 'auto',
  '&.Mui-expanded': {
    minHeight: 'auto',
  },
  '& .MuiAccordionSummary-content': {
    margin: theme.spacing(3, 0),
    '&.Mui-expanded': {
      margin: theme.spacing(3, 0),
    },
  },
}));

export const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0, 0, 4, 0),
}));
