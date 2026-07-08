import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const PlaceholderContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export function Placeholder({ title }: { title: string }) {
  return (
    <PlaceholderContainer>
      <Typography variant="h1">{title}</Typography>
      <Subtitle variant="body1">
        Placeholder page for {title}
      </Subtitle>
    </PlaceholderContainer>
  );
}
