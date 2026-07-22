import { styled } from '@mui/material/styles';
import CampaignIcon from '@mui/icons-material/Campaign';

export * from '../../../shared/components/AdminTableLayout';

export const TitleIcon = styled(CampaignIcon)(({ theme }) => ({
  fontSize: 32,
  color: theme.palette.warning.main,
}));

