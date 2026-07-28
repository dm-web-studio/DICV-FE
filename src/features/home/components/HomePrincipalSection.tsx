import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { useHomeStore } from '../store/HomeStoreContext';
import {
  SectionContainer,
  LeftColumn,
  PrincipalPhotoWrapper,
  PrincipalPhoto,
  PrincipalContent,
  SignatureText,
  RightColumn,
  ImageWrapper,
  StudentsImage,
  QuotationBox,
  QuoteText,
  QuoteAuthor,
  SectionSubtitle,
  SectionTitle,
  PrincipalMessageText,
  ReadMoreButton,
} from './HomePrincipalSection.styles';
import studentImg from '../../../assets/dicv-student.webp';

export const HomePrincipalSection = observer(function HomePrincipalSection() {
  const { domain, staffDesk } = useHomeStore();
  const { staffDesk: principalData, isLoading, error } = staffDesk.domain;

  return (
    <SectionContainer>
      <LeftColumn>
        {isLoading && <CircularProgress size={24} />}
        {error && <Alert severity="error">{error}</Alert>}

        {principalData && !isLoading && !error && (
          <>
            <PrincipalPhotoWrapper>
              <PrincipalPhoto src={principalData.photoUrl} alt={principalData.name} />
            </PrincipalPhotoWrapper>

            <PrincipalContent>
              <Box>
                <SectionSubtitle variant="subtitle2">
                  PRINCIPAL'S MESSAGE
                </SectionSubtitle>
                <SectionTitle variant="h1">
                  Message from<br />the Principal
                </SectionTitle>
              </Box>

              <PrincipalMessageText
                variant="body1"
                color="text.secondary"
              >
                {principalData.homeMessage}
              </PrincipalMessageText>

              <Box sx={{ mt: 'auto' }}>
                <SignatureText>{principalData.name}</SignatureText>
                <Typography variant="subtitle2" color="text.primary" sx={{ fontWeight: 700 }}>
                  {principalData.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Principal
                </Typography>
              </Box>

              <ReadMoreButton
                component={Link}
                to="/principals-desk"
                variant="text"
                endIcon={<ArrowForwardIcon />}
                disableRipple
              >
                Read more
              </ReadMoreButton>
            </PrincipalContent>
          </>
        )}
      </LeftColumn>

      <RightColumn>
        <ImageWrapper>
          <StudentsImage src={studentImg} alt="Students" />
        </ImageWrapper>
        <QuotationBox elevation={4}>
          <FormatQuoteIcon sx={{ color: '#F5A623', fontSize: 40, transform: 'rotate(180deg)' }} />
          <Box>
            <QuoteText variant="body1">
              {domain.quotationText}
            </QuoteText>
            <QuoteAuthor>
              {domain.quotationAuthor}
            </QuoteAuthor>
          </Box>
        </QuotationBox>
      </RightColumn>
    </SectionContainer>
  );
});
