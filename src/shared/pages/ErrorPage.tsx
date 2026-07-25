import { useRouteError, isRouteErrorResponse, Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import {
  PageContainer,
  ContentCard,
  IconWrapper,
  StyledTitle,
  StyledActionButton
} from './ErrorPages.styles';

export function ErrorPage() {
  const error = useRouteError();
  
  let errorMessage = 'An unexpected error occurred.';
  let errorTitle = 'Oops! Something went wrong.';

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      errorTitle = '404 - Page Not Found';
      errorMessage = "The page you're looking for doesn't exist or has been moved.";
    } else {
      errorTitle = `${error.status} - Error`;
      errorMessage = error.statusText || errorMessage;
    }
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <PageContainer>
      <ContentCard>
        <IconWrapper isError>
          <ErrorOutlineOutlinedIcon />
        </IconWrapper>
        <Box>
          <StyledTitle variant="h1" gutterBottom>
            {errorTitle}
          </StyledTitle>
          <Typography variant="body1" color="text.secondary">
            {errorMessage}
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
