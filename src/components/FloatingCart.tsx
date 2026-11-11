import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FloatingCart({ count = 4, onPress }: { count?: number; onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.fabContainer} onPress={onPress} activeOpacity={0.8}>
      <Ionicons name="cart" size={24} color="#FFFFFF" />
      <Text style={styles.fabText}>Giỏ hàng</Text>
      <View style={styles.countBadge}><Text style={styles.countText}>{count}</Text></View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  fabContainer: {
    position: 'absolute', bottom: 24, right: 20, width: 64, height: 64, borderRadius: 32,
    backgroundColor: '#3F51B5', justifyContent: 'center', alignItems: 'center', elevation: 6, zIndex: 99
  },
  fabText: { color: '#FFFFFF', fontSize: 9, fontWeight: 'bold', marginTop: 2 },
  countBadge: {
    position: 'absolute', top: 2, right: 4, backgroundColor: '#E53935', minWidth: 18, height: 18,
    borderRadius: 9, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 3, borderWidth: 1.5, borderColor: '#FFFFFF'
  },
  countText: { color: '#FFFFFF', fontSize: 9, fontWeight: 'bold' },
});