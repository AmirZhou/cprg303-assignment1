import { WelcomeScreen } from '@/components/features/onboarding/WelcomeScreen';
import { useRouter } from 'expo-router';

// this is the home screen
export default function Welcome() {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/data-sharing');
  };

  return <WelcomeScreen onContinue={handleContinue} />;

  // Joseph Mathew - Edited this index file for CPRG303 Assignment 1

}
