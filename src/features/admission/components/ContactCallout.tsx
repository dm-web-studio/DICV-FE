import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import {
  CalloutContainer,
  TextSection,
  StyledMessageIcon,
  CalloutTitle,
  CalloutSubtitle,
} from './ContactCallout.styles';

export function ContactCallout() {
  const navigate = useNavigate();

  return (
    <CalloutContainer>
      <TextSection>
        <StyledMessageIcon />
        <Box>
          <CalloutTitle variant="h2">
            Have more questions?
          </CalloutTitle>
          <CalloutSubtitle variant="body2">
            Our admission team is here to help you.
          </CalloutSubtitle>
        </Box>
      </TextSection>
      <Button
        variant="outlined"
        color="secondary"
        endIcon={<ArrowForwardIcon />}
        onClick={() => navigate('/contact')}
      >
        Contact Admission Office
      </Button>
    </CalloutContainer>
  );
}
