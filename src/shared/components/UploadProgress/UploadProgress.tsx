import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import {
  UploadProgressContainer,
  UploadProgressRow,
  UploadProgressBarWrapper,
  UploadProgressTextWrapper
} from './UploadProgress.styles';

export interface UploadProgressProps {
  progress: number;
  label?: string;
}

export const UploadProgress: React.FC<UploadProgressProps> = ({ progress, label = 'Uploading...' }) => {
  return (
    <UploadProgressContainer>
      <UploadProgressRow>
        <UploadProgressBarWrapper>
          <LinearProgress variant="determinate" value={progress} />
        </UploadProgressBarWrapper>
        <UploadProgressTextWrapper>
          <Typography variant="body2" color="text.secondary">{`${Math.round(progress)}%`}</Typography>
        </UploadProgressTextWrapper>
      </UploadProgressRow>
      <Typography variant="caption" color="text.secondary">{label}</Typography>
    </UploadProgressContainer>
  );
};
