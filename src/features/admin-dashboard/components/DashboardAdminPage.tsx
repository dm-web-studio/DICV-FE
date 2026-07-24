import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useTheme } from '@mui/material/styles';
import { CircularProgress, Box, Typography } from '@mui/material';
import { DashboardContainer, StatsGrid, ListsGrid, ColumnContainer } from './DashboardAdminPage.styles';
import { useDashboardAdminStore, DashboardAdminStoreProvider } from '../store/DashboardAdminStoreContext';
import { styled } from '@mui/material/styles';
import { StatCard } from './StatCard';
import { RecentNoticesWidget } from './RecentNoticesWidget';
import { RecentContactsWidget } from './RecentContactsWidget';
import { QuickLinksWidget } from './QuickLinksWidget';

// Icons
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import PhotoLibraryOutlinedIcon from '@mui/icons-material/PhotoLibraryOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const CenterBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: theme.spacing(4),
}));

const ErrorBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
}));

const DashboardAdminPageContent = observer(function DashboardAdminPageContent() {
  const { domain } = useDashboardAdminStore();
  const theme = useTheme();

  useEffect(() => {
    void domain.fetchStats();
  }, [domain]);

  if (domain.isLoading && !domain.stats) {
    return (
      <CenterBox>
        <CircularProgress />
      </CenterBox>
    );
  }

  if (domain.error) {
    return (
      <ErrorBox>
        <Typography color="error">{domain.error}</Typography>
      </ErrorBox>
    );
  }

  if (!domain.stats) return null;

  return (
    <DashboardContainer>
      <StatsGrid>
        <StatCard 
          label="Total Faculty" 
          value={domain.stats.totalFaculty} 
          icon={<PeopleAltOutlinedIcon />}
          bgColor={theme.badgeColors.blue.bg}
          color={theme.badgeColors.blue.text}
        />
        <StatCard 
          label="Total Notices" 
          value={domain.stats.totalNotices} 
          icon={<CampaignOutlinedIcon />}
          bgColor={theme.badgeColors.green.bg}
          color={theme.badgeColors.green.text}
        />
        <StatCard 
          label="Total Albums" 
          value={domain.stats.totalAlbums} 
          icon={<PhotoLibraryOutlinedIcon />}
          bgColor={theme.badgeColors.purple.bg}
          color={theme.badgeColors.purple.text}
        />
        <StatCard 
          label="Total Contacts" 
          value={domain.stats.totalContacts} 
          icon={<EmailOutlinedIcon />}
          bgColor={theme.badgeColors.orange.bg}
          color={theme.badgeColors.orange.text}
        />
      </StatsGrid>

      <ListsGrid>
        <RecentNoticesWidget notices={domain.stats.recentNotices} />
        <ColumnContainer>
          <QuickLinksWidget />
          <RecentContactsWidget contacts={domain.stats.recentContacts} />
        </ColumnContainer>
      </ListsGrid>
    </DashboardContainer>
  );
});

export const DashboardAdminPage = () => (
  <DashboardAdminStoreProvider>
    <DashboardAdminPageContent />
  </DashboardAdminStoreProvider>
);
