import TextField, { type TextFieldProps } from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { CounterLabel } from './CharCountTextArea.styles';

export type CharCountTextAreaProps = TextFieldProps & {
  maxChars?: number;
  allowExceed?: boolean;
};

export function CharCountTextArea({ maxChars, allowExceed = false, value, ...props }: CharCountTextAreaProps) {
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
        <CounterLabel variant="caption" isOverLimit={isOverLimit}>
          {length}/{maxChars}
        </CounterLabel>
      )}
    </Box>
  );
}
