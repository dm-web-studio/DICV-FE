import { observer } from 'mobx-react-lite';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useAdmissionStore } from '../store/AdmissionStoreContext';
import {
  CardContainer,
  TitleWrapper,
  DecorativeTitle,
  StyledAccordion,
  StyledAccordionSummary,
  StyledAccordionDetails,
} from './FaqCard.styles';

export const FaqCard = observer(function FaqCard() {
  const { domain } = useAdmissionStore();

  return (
    <CardContainer>
      <TitleWrapper>
        <DecorativeTitle variant="h2">
          Frequently Asked Questions
        </DecorativeTitle>
      </TitleWrapper>
      <Box>
        {domain.procedure.faqs.map((faq, idx) => (
          <StyledAccordion key={idx} disableGutters>
            <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h3">{faq.question}</Typography>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <Typography variant="body2" color="text.secondary">
                {faq.answer}
              </Typography>
            </StyledAccordionDetails>
          </StyledAccordion>
        ))}
      </Box>
    </CardContainer>
  );
});
