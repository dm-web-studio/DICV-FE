import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { StatCardWrapper, IconContainer } from './DashboardAdminPage.styles';

const StatTextContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  zIndex: 1,
});

const StatValue = styled(Typography)(({ theme }) => ({
  fontSize: 24,
  fontWeight: 700,
  marginBottom: theme.spacing(0.5),
}));

interface StatCardProps {
  label: string;
  value: number;
  icon: React.ReactNode;
  bgColor: string;
  color: string;
}

export const StatCard: React.FC<StatCardProps> = ({ label, value, icon, bgColor, color }) => {
  return (
    <StatCardWrapper>
      <IconContainer bgColor={bgColor} color={color} className="stat-icon">
        {icon}
      </IconContainer>
      <StatTextContainer>
        <StatValue variant="h2">
          {value.toLocaleString()}
        </StatValue>
        <Typography variant="body2" color="text.secondary">
          {label}
        </Typography>
      </StatTextContainer>
    </StatCardWrapper>
  );
};
