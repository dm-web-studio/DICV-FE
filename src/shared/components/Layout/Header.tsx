import { observer } from 'mobx-react-lite';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  HeaderContainer,
  AnnouncementBar,
  AnnouncementText,
  ApplyButton,
} from './Header.styles';
import { Navbar } from './Navbar';

export const Header = observer(function Header() {
  return (
    <HeaderContainer>
      <AnnouncementBar>
        <AnnouncementText variant="body2">
          <strong>Admissions Open for 2025-26!</strong> Apply online now and secure your child's future.
        </AnnouncementText>
        <ApplyButton 
          variant="contained" 
          color="secondary" 
          endIcon={<ArrowForwardIcon />}
        >
          APPLY ONLINE
        </ApplyButton>
      </AnnouncementBar>

      <Navbar />
    </HeaderContainer>
  );
});
