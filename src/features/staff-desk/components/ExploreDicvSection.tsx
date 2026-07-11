import MenuBookIcon from '@mui/icons-material/MenuBook';
import GroupsIcon from '@mui/icons-material/Groups';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

import academicLifeImg from '../../../assets/academic-life.avif';
import campusLifeImg from '../../../assets/campus-life.jpg';

import {
  SectionContainer,
  SectionTitle,
  CardsWrapper,
  Card,
  CardContentArea,
  CardIconWrapper,
  CardIconWrapperSecondary,
  CardTitle,
  CardDescription,
  CardButton,
  CardImageWrapper,
  CardImage,
  CardHeaderWrapper,
} from './ExploreDicvSection.styles';

export const ExploreDicvSection = () => {
  const navigate = useNavigate();

  return (
    <SectionContainer>
      <SectionTitle variant="h1">EXPLORE DICV</SectionTitle>
      
      <CardsWrapper>
        {/* Academic Excellence Card */}
        <Card>
          <CardContentArea>
            <CardHeaderWrapper>
              <CardIconWrapper>
                <MenuBookIcon />
              </CardIconWrapper>
              <CardTitle variant="h2">Academic Excellence</CardTitle>
            </CardHeaderWrapper>
            <CardDescription variant="body2">
              Empowering minds through a comprehensive and future-ready curriculum designed to inspire curiosity and critical thinking.
            </CardDescription>
            <CardButton 
              endIcon={<ArrowForwardIcon />} 
              onClick={() => navigate('/academics')}
            >
              EXPLORE ACADEMICS
            </CardButton>
          </CardContentArea>
          <CardImageWrapper>
            <CardImage src={academicLifeImg} alt="Academic Excellence" />
          </CardImageWrapper>
        </Card>

        {/* Campus Life Card */}
        <Card>
          <CardContentArea>
            <CardHeaderWrapper>
              <CardIconWrapperSecondary>
                <GroupsIcon />
              </CardIconWrapperSecondary>
              <CardTitle variant="h2">Campus Life</CardTitle>
            </CardHeaderWrapper>
            <CardDescription variant="body2">
              A vibrant community that nurtures talent, leadership, and friendships through diverse activities, clubs, and events.
            </CardDescription>
            <CardButton 
              endIcon={<ArrowForwardIcon />}
              onClick={() => navigate('/campus-life')}
            >
              EXPLORE CAMPUS LIFE
            </CardButton>
          </CardContentArea>
          <CardImageWrapper>
            <CardImage src={campusLifeImg} alt="Campus Life" />
          </CardImageWrapper>
        </Card>
      </CardsWrapper>
    </SectionContainer>
  );
};
