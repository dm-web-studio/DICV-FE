import { styled } from '@mui/material/styles';
import SchoolIcon from '@mui/icons-material/School';
import Avatar from '@mui/material/Avatar';
import { SearchField } from '../../../shared/components/AdminTableLayout';

export const StyledSchoolIcon = styled(SchoolIcon)(({ theme }) => ({
  fontSize: 32,
  color: theme.palette.primary.main,
}));

export const FacultySearchField = styled(SearchField)(() => ({
  minWidth: 300,
}));

export const FacultyAvatar = styled(Avatar)(() => ({
  width: 32,
  height: 32,
}));
