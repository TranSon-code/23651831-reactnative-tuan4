import React from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView, StatusBar, Platform } from 'react-native';
import Header from '../../components/Header';
import CategoryChips from '../../components/CategoryChips';
import BookGrid from '../../components/BookGrid';
import FloatingCart from '../../components/FloatingCart';

export default function HomeFullScr({ onNavigateDetail }: { onNavigateDetail: () => void }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={Platform.OS === 'android' ? '#1A237E' : undefined} />
      <Header />
      <View style={styles.container}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          <CategoryChips />
          <View style={{ height: 12 }} />
          <BookGrid />
        </ScrollView>
        <FloatingCart count={4} onPress={onNavigateDetail} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#1A237E' },
  container: { flex: 1, backgroundColor: '#F0F2F5', position: 'relative' },
  scrollView: { flex: 1 },
  scrollContent: { padding: 16, paddingBottom: 100 },
});