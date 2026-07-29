import { observer } from 'mobx-react-lite';
import Alert from '@mui/material/Alert';
import Skeleton from '@mui/material/Skeleton';
import PersonOffOutlinedIcon from '@mui/icons-material/PersonOffOutlined';
import { useFacultyStore } from '../store/FacultyStoreContext';
import { FacultyCard } from './FacultyCard';
import { EmptyState } from '../../../shared/components/EmptyState';
import { GridContainer, FlexContainer, FlexItem } from './FacultyGrid.styles';

export const FacultyGrid = observer(function FacultyGrid() {
  const { domain } = useFacultyStore();

  if (domain.error) {
    return (
      <GridContainer>
        <Alert severity="error">{domain.error}</Alert>
      </GridContainer>
    );
  }

  if (domain.isLoading) {
    return (
      <GridContainer>
        <FlexContainer>
          {Array.from(new Array(6)).map((_, index) => (
            <FlexItem key={index}>
              <Skeleton variant="rectangular" height={360} sx={{ borderRadius: 2, width: '100%' }} />
            </FlexItem>
          ))}
        </FlexContainer>
      </GridContainer>
    );
  }

  if (domain.facultyList.length === 0) {
    return (
      <GridContainer>
        <EmptyState
          icon={<PersonOffOutlinedIcon />}
          title="No Faculty Members Found"
          description="Faculty profiles will be updated shortly"
        />
      </GridContainer>
    );
  }

  return (
    <GridContainer>
      <FlexContainer>
        {domain.facultyList.map((faculty) => (
          <FlexItem key={faculty._id}>
            <FacultyCard faculty={faculty} />
          </FlexItem>
        ))}
      </FlexContainer>
    </GridContainer>
  );
});
