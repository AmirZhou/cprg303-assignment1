import { DataSharingScreen } from '@/components/features/onboarding/DataSharingScreen';
import { useRouter } from 'expo-router';

export default function DataSharing() {
  const router = useRouter();

  const handleShareData = () => {
    router.dismissAll();
    router.push('/home');
  };

  const handleDontShare = () => {
    router.dismissAll();
    router.push('/home');
  };

  return (
    <DataSharingScreen
      onShareData={handleShareData}
      onDontShare={handleDontShare}
    />
  );

  // Joseph Mathew - Edited this data-sharing file for CPRG303 Assignment 1

}
