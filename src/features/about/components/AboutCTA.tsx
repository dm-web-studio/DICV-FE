import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  SectionWrapper,
  CTACard,
  TextSection,
  StyledIcon,
  CTATitle,
  CTASubtitle,
} from './AboutCTA.styles';

export const AboutCTA = () => {
  return (
    <SectionWrapper>
      <CTACard>
        <TextSection>
          <StyledIcon />
          <Box>
            <CTATitle variant="h3">
              Ready to see the campus for yourself?
            </CTATitle>
            <CTASubtitle variant="body2">
              Book a visit or start your child's admission for the upcoming academic year.
            </CTASubtitle>
          </Box>
        </TextSection>
        <Button 
          variant="outlined" 
          color="secondary" 
          endIcon={<ArrowForwardIcon />}
        >
          Start admission
        </Button>
      </CTACard>
    </SectionWrapper>
  );
};
