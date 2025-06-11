import type { OnboardingFeature } from '@/types';
import { StyleSheet, Text, View } from 'react-native';

interface FeatureCardProps {
  feature: OnboardingFeature;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{feature.icon}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{feature.title}</Text>
        <Text style={styles.description}>{feature.title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 32,
    paddingHorizontal: 20,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  icon: {
    fontSize: 24,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 17,
    fontFamily: 'SF-Pro-Display-Medium',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  description: {
    fontSize: 15,
    fontFamily: 'SF-Pro-Display-Regular',
    color: '#AAAAAA',
    lineHeight: 20,
  },
});
