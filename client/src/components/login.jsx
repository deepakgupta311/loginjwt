import Checkbox from '@mui/material/Checkbox';
import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

const providers = [{ id: 'credentials', name: 'Email and Password' }];

export default function SlotPropsSignIn() {
  const theme = useTheme();
  const navigate = useNavigate();

  // Sign in function which could be further extended for actual API calls
  const handleSignIn = (provider, formData) => {
    const email = formData.get('email');
    const password = formData.get('password');
    const termsAndConditions = formData.get('tandc') ? 'Agreed' : 'Not Agreed';
    
    // Here you can add real authentication logic or redirect the user
    alert(
      `Signing in with "${provider.name}" and credentials: Email: ${email}, Password: ${password}, T&C: ${termsAndConditions}`
    );
  };

  return (
    <AppProvider theme={theme}>
      <SignInPage
        signIn={handleSignIn}
        slotProps={{
          emailField: { variant: 'standard', autoFocus: false },
          passwordField: { variant: 'standard' },
          submitButton: { variant: 'outlined' },
          rememberMe: {
            control: (
              <Checkbox
                name="tandc"
                value="true"
                color="primary"
                sx={{ padding: 0.5, '& .MuiSvgIcon-root': { fontSize: 20 } }}
              />
            ),
            color: 'textSecondary',
            label: 'I agree with the T&C',
          },
        }}
        providers={providers}
      />

      <Box textAlign="center" mt={2} sx={{ marginTop: '-145px' }}>
        <Typography variant="body2">
          New customer?{' '}
          <Link
            href="#"
            underline="hover"
            onClick={() => navigate('/register')}
          >
            Register
          </Link>
        </Typography>
      </Box>
    </AppProvider>
  );
}
