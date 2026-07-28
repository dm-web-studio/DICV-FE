import TextField, { type TextFieldProps } from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { CounterLabel, CounterContainer } from './CharCountTextArea.styles';
import Tooltip from '@mui/material/Tooltip';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export type CharCountTextAreaProps = TextFieldProps & {
  maxChars?: number;
  allowExceed?: boolean;
  countInfoTooltip?: string;
};

export function CharCountTextArea({ maxChars, allowExceed = false, countInfoTooltip, value, ...props }: CharCountTextAreaProps) {
  const length = typeof value === 'string' ? value.length : 0;
  const isOverLimit = maxChars !== undefined && length > maxChars;

  return (
    <Box sx={{ width: '100%' }}>
      <TextField
        {...props}
        fullWidth
        multiline
        value={value}
        slotProps={{
          ...props.slotProps,
          htmlInput: {
            ...props.slotProps?.htmlInput,
            maxLength: maxChars !== undefined && !allowExceed ? maxChars : undefined,
          },
        }}
        error={props.error || isOverLimit}
      />
      {maxChars !== undefined && (
        <CounterContainer>
          <CounterLabel variant="caption" isOverLimit={isOverLimit}>
            {length}/{maxChars}
          </CounterLabel>
          {countInfoTooltip && (
            <Tooltip title={countInfoTooltip} placement="top" arrow>
              <InfoOutlinedIcon fontSize="small" color="action" />
            </Tooltip>
          )}
        </CounterContainer>
      )}
    </Box>
  );
}
