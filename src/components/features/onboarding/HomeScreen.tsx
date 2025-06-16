import type { WorkoutCollection } from '@/types';
import { BlurView } from 'expo-blur';
import { Image } from 'expo-image';
import React from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const timeToWalkImage = require('../../../../assets/images/brendan-hunt.png');

const timeToWalkData: WorkoutCollection = {
  id: '1',
  title: 'Time to Walk',
  subtitle: 'Brendan Hunt',
  duration: '36min',
  episode: 'Ep86',
  imageUrl: timeToWalkImage,
};

const collectionsData: WorkoutCollection[] = [
  {
    id: '2',
    title: 'Improve Your Balance with Strength and Core',
    subtitle: '',
    isNew: true,
    episodeCount: 14,
  },
];

export function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <BlurView
        style={styles.blurHeader}
        intensity={80}
        tint="dark"
      >
        <Text style={styles.fitnessLogo}>🍎Fitness+</Text>
      </BlurView>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Time to Walk Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Time to Walk</Text>
            <Pressable>
              <Text style={styles.showAll}>Show All</Text>
            </Pressable>
          </View>
          <Text style={styles.sectionSubtitle}>
            Stories, songs, and photos to keep you motivated as you walk with
            inspiring guests
          </Text>

          <Pressable style={styles.timeToWalkCard}>
            <View style={styles.imageContainer}>
              <Image
                source={timeToWalkData.imageUrl}
                style={styles.workoutImage}
                contentFit="cover"
                placeholder={{ blurhash: 'L6PZfSi_.AyE_3t7t7R**0o#DgR4' }}
                transition={200}
              />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{timeToWalkData.title}</Text>
                <Text style={styles.cardSubtitle}>{timeToWalkData.subtitle}</Text>
                <Text style={styles.cardMeta}>
                  {timeToWalkData.duration} • {timeToWalkData.episode}
                </Text>
              </View>
            </View>
          </Pressable>
        </View>

        {/* Collections Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Collections</Text>
            <Pressable>
              <Text style={styles.showAll}>Show All</Text>
            </Pressable>
          </View>
          <Text style={styles.sectionSubtitle}>
            Curated from the library to help you go for a goal
          </Text>

          <Pressable style={styles.collectionCard}>
            <View style={styles.collectionImageContainer}>
              <Text style={styles.collectionEmoji}>🧘‍♀️</Text>
            </View>
            <View style={styles.collectionContent}>
              <Text style={styles.collectionTitle}>
                Improve Your Balance with Strength and Core
              </Text>
              <View style={styles.collectionMeta}>
                <Text style={styles.newBadge}>NEW</Text>
                <Text style={styles.episodeCount}>14 EPISODES</Text>
              </View>
            </View>
          </Pressable>
        </View>
      </ScrollView>

      {/* Bottom Tab Bar */}
      <View style={styles.tabBar}>
        <View style={styles.tabItem}>
          <Text style={styles.tabIcon}>📊</Text>
          <Text style={styles.tabLabel}>Summary</Text>
        </View>
        <View style={[styles.tabItem, styles.activeTab]}>
          <Text style={styles.tabIcon}>🏃</Text>
          <Text style={[styles.tabLabel, styles.activeTabLabel]}>Fitness+</Text>
        </View>
        <View style={styles.tabItem}>
          <Text style={styles.tabIcon}>🔄</Text>
          <Text style={styles.tabLabel}>Sharing</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },

  blurHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    borderBottomWidth: 0.33,
    borderBottomColor: 'rgba(84, 84, 88, 0.6)',
  },

  fitnessLogo: {
    fontSize: 17,
    fontFamily: 'SF-Pro-Display-Medium',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 100, // Space for the fixed header
  },
  section: {
    marginBottom: 40,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 22,
    fontFamily: 'SF-Pro-Display-Semibold',
    color: '#FFFFFF',
  },
  showAll: {
    fontSize: 17,
    fontFamily: 'SF-Pro-Display-Regular',
    color: '#A7F432',
  },
  sectionSubtitle: {
    fontSize: 15,
    fontFamily: 'SF-Pro-Display-Regular',
    color: '#AAAAAA',
    paddingHorizontal: 20,
    marginBottom: 20,
    lineHeight: 20,
  },
  timeToWalkCard: {
    marginHorizontal: 20,
    backgroundColor: '#1C1C1E',
    borderRadius: 12,
    overflow: 'hidden',
  },
  imageContainer: {
    height: 200,
    backgroundColor: '#2C2C2E',
    overflow: 'hidden',
    position: 'relative',
  },
  workoutImage: {
    width: '100%',
    height: '100%',
  },
  cardContent: {
    padding: 12,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  cardTitle: {
    fontSize: 17,
    fontFamily: 'SF-Pro-Display-Semibold',
    color: '#A7F432',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 17,
    fontFamily: 'SF-Pro-Display-Semibold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  cardMeta: {
    fontSize: 12,
    fontFamily: 'SF-Pro-Display-Regular',
    color: '#AAAAAA',
  },
  collectionCard: {
    marginHorizontal: 20,
    backgroundColor: '#FF6B4A',
    borderRadius: 12,
    flexDirection: 'row',
    overflow: 'hidden',
    minHeight: 120,
  },
  collectionImageContainer: {
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  collectionEmoji: {
    fontSize: 40,
  },
  collectionContent: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  collectionTitle: {
    fontSize: 22,
    fontFamily: 'SF-Pro-Display-Semibold',
    color: '#FFFFFF',
    lineHeight: 28,
  },
  collectionMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  newBadge: {
    fontSize: 12,
    fontFamily: 'SF-Pro-Display-Semibold',
    color: '#FFFFFF',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 12,
  },
  episodeCount: {
    fontSize: 12,
    fontFamily: 'SF-Pro-Display-Medium',
    color: '#FFFFFF',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#1C1C1E',
    paddingTop: 8,
    paddingBottom: 34,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
  activeTab: {
    // Active tab styling handled by text color
  },
  tabIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  tabLabel: {
    fontSize: 10,
    fontFamily: 'SF-Pro-Display-Regular',
    color: '#8E8E93',
  },
  activeTabLabel: {
    color: '#A7F432',
  },
});