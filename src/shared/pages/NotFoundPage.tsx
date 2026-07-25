import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import {
  PageContainer,
  ContentCard,
  IconWrapper,
  StyledTitle,
  StyledActionButton
} from './ErrorPages.styles';

export function NotFoundPage() {
  return (
    <PageContainer>
      <ContentCard>
        <IconWrapper>
          <SearchOffIcon />
        </IconWrapper>
        <Box>
          <StyledTitle variant="h1" gutterBottom>
            404 - Page Not Found
          </StyledTitle>
          <Typography variant="body1" color="text.secondary">
            The page you are looking for does not exist or has been moved.
          </Typography>
        </Box>
        <StyledActionButton
          component={RouterLink}
          to="/"
          variant="contained"
          color="primary"
          disableElevation
        >
          Return to Home
        </StyledActionButton>
      </ContentCard>
    </PageContainer>
  );
}
