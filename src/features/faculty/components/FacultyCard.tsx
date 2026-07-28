import PersonOutlineIcon from '@mui/icons-material/PersonOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import type { Faculty } from '../types';
import {
  StyledCard,
  PhotoWrapper,
  StyledAvatar,
  NameTypography,
  DesignationTypography,
  GoldUnderline,
  InfoRow,
  InfoText,
} from './FacultyCard.styles';

interface FacultyCardProps {
  faculty: Faculty;
}

export function FacultyCard({ faculty }: FacultyCardProps) {
  return (
    <StyledCard>
      <PhotoWrapper>
        <StyledAvatar src={faculty.photoUrl} alt={faculty.name}>
          {!faculty.photoUrl && <PersonOutlineIcon fontSize="large" />}
        </StyledAvatar>
      </PhotoWrapper>

      <NameTypography variant="h3">{faculty.name}</NameTypography>
      <DesignationTypography variant="body2">{faculty.designation}</DesignationTypography>
      
      <GoldUnderline />

      <InfoRow>
        <WorkOutlineIcon fontSize="small" />
        <InfoText variant="body2">{faculty.experience}</InfoText>
      </InfoRow>

      <InfoRow>
        <SchoolOutlinedIcon fontSize="small" />
        <InfoText variant="body2">
          {faculty.degrees.join(', ')}
        </InfoText>
      </InfoRow>
    </StyledCard>
  );
}
