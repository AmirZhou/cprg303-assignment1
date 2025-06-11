import { Button } from '@/components/ui/Button';
import { FeatureCard } from '@/components/ui/Card';
import type { OnboardingFeature } from '@/types';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const features: OnboardingFeature[] = [
  {
    icon: '⭕',
    title: 'See Your Activity',
    description: 'Keep up with your rings, workouts, awards, and trends.',
  },
  {
    icon: '🏃',
    title: 'Learn About Fitness+',
    description:
      "Explore workouts and meditations for all levels from the world's top trainers.",
  },
  {
    icon: '💰',
    title: 'Share With Others',
    description: 'Cheer on your friends as all of you close your rings.',
  },
];

interface WelcomeScreenProps {
  onContinue: () => void;
}

export function WelcomeScreen({ onContinue }: WelcomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Fitness</Text>

        <View style={styles.featuresContainer}>
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </View>
      </View>

      <View style={styles.footer}>
        <Button title="Continue" onPress={onContinue}></Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
  title: {
    fontSize: 34,
    fontFamily: 'SF-Pro-Display-Semibold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 60,
  },
  featuresContainer: {
    flex: 1,
  },
  footer: {
    paddingBottom: 34,
  },
});
