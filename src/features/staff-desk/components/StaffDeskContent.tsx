import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Alert from '@mui/material/Alert';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import { useStaffDeskStore } from '../store/StaffDeskStoreContext';
import {
  Container,
  TextColumn,
  Eyebrow,
  Title,
  MessageParagraph,
  SignatureArea,
  SignatureImage,
  NameText,
  RoleText,
  ImageColumn,
  PortraitImage,
  PortraitImageMobile,
  HeaderRow,
  TitleWrapper,
  GreetingText,
} from './StaffDeskContent.styles';

interface StaffDeskContentProps {
  type: 'principal' | 'president' | 'vice-principal';
}

const StaffDeskSkeleton = () => (
  <Container>
    <TextColumn>
      <Skeleton variant="text" width={150} height={24} sx={{ mb: 2 }} />
      <Skeleton variant="text" width="80%" height={40} sx={{ mb: 4 }} />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
        <Skeleton variant="rectangular" width="100%" height={20} />
        <Skeleton variant="rectangular" width="100%" height={20} />
        <Skeleton variant="rectangular" width="95%" height={20} />
        <Skeleton variant="rectangular" width="98%" height={20} />
        <Skeleton variant="rectangular" width="90%" height={20} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Skeleton variant="rectangular" width="100%" height={20} />
        <Skeleton variant="rectangular" width="100%" height={20} />
        <Skeleton variant="rectangular" width="92%" height={20} />
      </Box>
      <SignatureArea>
        <Skeleton variant="rectangular" width={120} height={60} sx={{ mb: 2 }} />
        <Skeleton variant="text" width={150} height={24} />
        <Skeleton variant="text" width={100} height={20} />
      </SignatureArea>
    </TextColumn>
    <ImageColumn>
      <Skeleton variant="rounded" width="100%" height={600} sx={{ maxWidth: 500 }} />
    </ImageColumn>
  </Container>
);

export const StaffDeskContent = observer(function StaffDeskContent({ type }: StaffDeskContentProps) {
  const { domain } = useStaffDeskStore();

  useEffect(() => {
    void domain.fetchByType(type);
  }, [domain, type]);

  if (domain.isLoading) {
    return <StaffDeskSkeleton />;
  }

  if (domain.error) {
    return (
      <Alert severity="error" sx={{ mb: 4 }}>
        {domain.error}
      </Alert>
    );
  }

  const { staffDesk } = domain;

  if (!staffDesk) {
    return (
      <Alert severity="info" sx={{ mb: 4 }}>
        Content not available yet.
      </Alert>
    );
  }

  const paragraphs = staffDesk.message.split('\n').filter((p) => p.trim() !== '');

  return (
    <Container>
      <TextColumn>
        <HeaderRow>
          <TitleWrapper>
            <Eyebrow variant="h3">{staffDesk.type}&apos;S DESK</Eyebrow>
            <Title variant="heroTitle">
              MESSAGE FROM<br />THE {staffDesk.type.toUpperCase()}
            </Title>
          </TitleWrapper>
          <PortraitImageMobile src={staffDesk.photoUrl} alt={staffDesk.name} />
        </HeaderRow>

        <Box>
          <GreetingText>
            Dear Students, Parents, and Well-wishers,
          </GreetingText>
          {paragraphs.map((text, idx) => (
            <MessageParagraph variant="body1" key={idx}>
              {text}
            </MessageParagraph>
          ))}
        </Box>

        <SignatureArea>
          {staffDesk.signatureUrl && (
            <SignatureImage src={staffDesk.signatureUrl} alt={`${staffDesk.name} Signature`} />
          )}
          <NameText variant="h2">{staffDesk.name}</NameText>
          <RoleText variant="body1">
            {staffDesk.type.charAt(0).toUpperCase() + staffDesk.type.slice(1)}
          </RoleText>
        </SignatureArea>
      </TextColumn>

      <ImageColumn>
        <PortraitImage src={staffDesk.photoUrl} alt={staffDesk.name} />
      </ImageColumn>
    </Container>
  );
});
