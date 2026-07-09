import { observer } from 'mobx-react-lite';
import { HeaderContainer } from './Header.styles';
import { Navbar } from './Navbar';
import { AnnouncementBar } from './AnnouncementBar/AnnouncementBar';

export const Header = observer(function Header() {
  return (
    <HeaderContainer>
      <AnnouncementBar />
      <Navbar />
    </HeaderContainer>
  );
});
