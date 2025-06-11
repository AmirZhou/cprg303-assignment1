import { Button } from '@/components/ui/Button';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

interface DataSharingScreenProps {
  onShareData: () => void;
  onDontShare: () => void;
}

export function DataSharingScreen({
  onShareData,
  onDontShare,
}: DataSharingScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Help Improve{'\n'}Apple Fitness+</Text>

        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            Improve Fitness+ features by sharing additional data with Apple
            about your workouts, including workout titles and trainers. Data you
            share is not associated with your Apple ID and is never shared with
            any third party.
          </Text>

          <Text style={styles.description}>
            You can stop sharing at any time in Settings on your iPhone or Apple
            Watch. <Text style={styles.link}>Learn more...</Text>
          </Text>

          <Text style={styles.sectionTitle}>Data that could be shared</Text>

          <View style={styles.bulletPoint}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Titles of workouts you do</Text>
          </View>

          <View style={styles.bulletPoint}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Trainers you work out with</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Button title="Share My Data" onPress={onShareData} />
        <Button
          title="Don't Share My Data"
          onPress={onDontShare}
          variant="secondary"
          style={styles.secondaryButton}
        />
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
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 34,
    fontFamily: 'SF-Pro-Display-Semibold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 40,
  },
  descriptionContainer: {
    flex: 1,
  },
  description: {
    fontSize: 17,
    fontFamily: 'SF-Pro-Display-Regular',
    color: '#FFFFFF',
    lineHeight: 24,
    marginBottom: 24,
  },
  link: {
    color: '#A7F432',
  },
  sectionTitle: {
    fontSize: 17,
    fontFamily: 'SF-Pro-Display-Medium',
    color: '#FFFFFF',
    marginBottom: 16,
    marginTop: 8,
  },
  bulletPoint: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  bullet: {
    fontSize: 17,
    color: '#AAAAAA',
    marginRight: 12,
    marginTop: 2,
  },
  bulletText: {
    flex: 1,
    fontSize: 17,
    fontFamily: 'SF-Pro-Display-Regular',
    color: '#AAAAAA',
    lineHeight: 24,
  },
  footer: {
    paddingBottom: 34,
  },
  secondaryButton: {
    marginTop: 12,
  },
});
