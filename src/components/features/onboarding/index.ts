export interface OnboardingFeature {
  icon: string;
  title: string;
  description: string;
}

export interface WorkoutCollection {
  id: string;
  title: string;
  subtitle: string;
  duration?: string;
  imageUrl?: string;
  isNew?: boolean;
  episodeCoount?: number;
}
