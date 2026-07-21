import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';

import { ItemRow, ImagePreview, ItemDetails, ItemName, ItemStatus, ActionButton } from './MultiImageUploader.styles';

interface ExistingItemRowProps {
  image: { url: string; publicId: string };
  onRemove: (publicId: string) => void;
}

export function ExistingItemRow({ image, onRemove }: ExistingItemRowProps) {
  return (
    <ItemRow>
      <ImagePreview src={image.url} alt="existing" />
      <ItemDetails>
        <ItemName>Existing Image</ItemName>
        <ItemStatus>
          <CheckCircleIcon color="success" sx={{ fontSize: 16 }} />
          <Typography variant="caption" color="textSecondary">
            Uploaded
          </Typography>
        </ItemStatus>
      </ItemDetails>
      <Tooltip title="Remove">
        <ActionButton onClick={() => onRemove(image.publicId)} color="error">
          <DeleteIcon fontSize="small" />
        </ActionButton>
      </Tooltip>
    </ItemRow>
  );
}
