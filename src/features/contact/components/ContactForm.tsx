import { observer } from 'mobx-react-lite';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { useContactStore } from '../store/ContactStoreContext';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { FormCard, FormTitle } from './ContactForm.styles';

export const ContactForm = observer(function ContactForm() {
  const { ui, domain } = useContactStore();

  return (
    <FormCard>
      <FormTitle variant="h2" color="primary" gutterBottom>
        SEND US A MESSAGE
      </FormTitle>

      <Stack spacing={4}>
        <TextField
          label="Full Name"
          value={ui.fullName}
          onChange={(e) => ui.setField('fullName', e.target.value)}
          error={!!ui.fieldErrors.fullName}
          helperText={ui.fieldErrors.fullName}
          fullWidth
        />

        <TextField
          label="Email Address"
          type="email"
          value={ui.email}
          onChange={(e) => ui.setField('email', e.target.value)}
          error={!!ui.fieldErrors.email}
          helperText={ui.fieldErrors.email}
          fullWidth
        />

        <TextField
          label="Phone Number"
          value={ui.phone}
          onChange={(e) => ui.setField('phone', e.target.value)}
          fullWidth
        />

        <TextField
          select
          label="Subject"
          value={ui.subject}
          onChange={(e) => ui.setField('subject', e.target.value)}
          error={!!ui.fieldErrors.subject}
          helperText={ui.fieldErrors.subject}
          fullWidth
        >
          {domain.subjects.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Message"
          multiline
          rows={4}
          value={ui.message}
          onChange={(e) => ui.setField('message', e.target.value)}
          error={!!ui.fieldErrors.message}
          helperText={ui.fieldErrors.message}
          fullWidth
        />

        <Box>
          <Button
            variant="contained"
            color="primary"
            disabled={domain.isSubmitting}
            onClick={() => void domain.submit()}
            endIcon={domain.isSubmitting ? <CircularProgress size={16} color="inherit" /> : <ArrowForwardIcon />}
          >
            {domain.isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
          </Button>
        </Box>
      </Stack>
    </FormCard>
  );
});
