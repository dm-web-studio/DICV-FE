import { observer } from 'mobx-react-lite';
import Stack from '@mui/material/Stack';
import { useAdmissionStore } from '../store/AdmissionStoreContext';
import documentsIllustration from '../../../assets/documents-illustration.png';
import {
  CardContainer,
  ContentArea,
  TitleWrapper,
  DecorativeTitle,
  ImageArea,
  CardImage,
  ListItem,
  StyledCheckIcon,
  ListItemText,
} from './DocumentsRequiredCard.styles';

export const DocumentsRequiredCard = observer(function DocumentsRequiredCard() {
  const { domain } = useAdmissionStore();

  return (
    <CardContainer>
      <ContentArea>
        <TitleWrapper>
          <DecorativeTitle variant="h2">
            Documents Required
          </DecorativeTitle>
        </TitleWrapper>
        <Stack spacing={3}>
          {domain.procedure.documentsRequired.map((doc, idx) => (
            <ListItem key={idx}>
              <StyledCheckIcon color="primary" />
              <ListItemText variant="body2">
                {doc}
              </ListItemText>
            </ListItem>
          ))}
        </Stack>
      </ContentArea>
      <ImageArea>
        <CardImage src={documentsIllustration} alt="Documents Required Illustration" />
      </ImageArea>
    </CardContainer>
  );
});
