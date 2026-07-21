import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import RefreshIcon from '@mui/icons-material/Refresh';
import Tooltip from '@mui/material/Tooltip';

import { ItemRow, ImagePreview, ItemDetails, ItemName, ItemStatus, ActionButton } from './MultiImageUploader.styles';
import type { UploadItem } from './types';

interface UploadItemRowProps {
  item: UploadItem;
  onRemove: (id: string) => void;
  onRetry: (id: string) => void;
}

export function UploadItemRow({ item, onRemove, onRetry }: UploadItemRowProps) {
  return (
    <ItemRow>
      <ImagePreview src={item.previewUrl} alt={item.file.name} />
      <ItemDetails>
        <ItemName>{item.file.name}</ItemName>
        <ItemStatus>
          {item.status === 'pending' && <Typography variant="caption" color="textSecondary">Waiting...</Typography>}
          {item.status === 'uploading' && (
            <>
              <CircularProgress size={12} thickness={5} />
              <Typography variant="caption" color="primary">Uploading...</Typography>
            </>
          )}
          {item.status === 'success' && (
            <>
              <CheckCircleIcon color="success" sx={{ fontSize: 16 }} />
              <Typography variant="caption" color="success.main">Success</Typography>
            </>
          )}
          {item.status === 'failed' && (
            <>
              <ErrorIcon color="error" sx={{ fontSize: 16 }} />
              <Typography variant="caption" color="error">
                {item.errorMessage || 'Failed'}
              </Typography>
            </>
          )}
        </ItemStatus>
      </ItemDetails>

      {item.status === 'failed' && (
        <Tooltip title="Retry">
          <ActionButton onClick={() => onRetry(item.id)} color="primary">
            <RefreshIcon fontSize="small" />
          </ActionButton>
        </Tooltip>
      )}

      <Tooltip title="Remove">
        <ActionButton onClick={() => onRemove(item.id)} color="error">
          <DeleteIcon fontSize="small" />
        </ActionButton>
      </Tooltip>
    </ItemRow>
  );
}
