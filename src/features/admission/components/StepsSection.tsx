import { observer } from 'mobx-react-lite';
import { useAdmissionStore } from '../store/AdmissionStoreContext';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GroupsIcon from '@mui/icons-material/Groups';
import VerifiedIcon from '@mui/icons-material/Verified';
import {
  SectionContainer,
  SectionTitle,
  CardsContainer,
  ConnectingLine,
  StepCard,
  IconOuter,
  IconInner,
  BottomBadge,
  StepNumber,
  StepTitle,
  StepDescription,
} from './StepsSection.styles';

const STEP_ICONS = [
  <AppRegistrationIcon fontSize="inherit" />,
  <DriveFolderUploadIcon fontSize="inherit" />,
  <AssignmentIcon fontSize="inherit" />,
  <GroupsIcon fontSize="inherit" />,
  <VerifiedIcon fontSize="inherit" />,
];

export const StepsSection = observer(function StepsSection() {
  const { domain } = useAdmissionStore();
  
  return (
    <SectionContainer>
      <SectionTitle variant="h1">
        Steps to Join DICV Public High School
      </SectionTitle>
      <CardsContainer>
        <ConnectingLine />
        {domain.sortedSteps.map((step, index) => {
          const isPrimary = index % 2 === 0;
          const colorType = isPrimary ? 'primary' : 'secondary';
          
          return (
            <StepCard key={step.order}>
              <IconOuter>
                <IconInner colorType={colorType}>
                  {STEP_ICONS[index % STEP_ICONS.length]}
                </IconInner>
              </IconOuter>
              <StepNumber variant="h2" colorType={colorType}>
                {String(step.order).padStart(2, '0')}
              </StepNumber>
              <StepTitle variant="h2">
                {step.title}
              </StepTitle>
              <StepDescription variant="body1">
                {step.description}
              </StepDescription>
              <BottomBadge colorType={colorType}>
                {step.locationLabel}
              </BottomBadge>
            </StepCard>
          );
        })}
      </CardsContainer>
    </SectionContainer>
  );
});
