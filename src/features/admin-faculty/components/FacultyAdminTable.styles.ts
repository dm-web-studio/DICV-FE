import { styled } from '@mui/material/styles';

import Avatar from '@mui/material/Avatar';
import { SearchField } from '../../../shared/components/AdminTableLayout';

export const FacultySearchField = styled(SearchField)(() => ({
  minWidth: 300,
}));

export const FacultyAvatar = styled(Avatar)(() => ({
  width: 32,
  height: 32,
}));
