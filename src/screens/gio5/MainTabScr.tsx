import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HomeFullScr from '../gio4/HomeFullScr';
import CartScr from './CartScr';

export default function MainTabScr({ onNavigateDetail }: { onNavigateDetail: () => void }) {
  const [currentTab, setCurrentTab] = useState<'HOME' | 'CART'>('HOME');

  return (
    <View style={styles.container}>
      <View style={styles.screenArea}>
        {currentTab === 'HOME' ? <HomeFullScr onNavigateDetail={onNavigateDetail} /> : <CartScr />}
      </View>
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem} onPress={() => setCurrentTab('HOME')}>
          <Ionicons name={currentTab === 'HOME' ? 'home' : 'home-outline'} size={22} color={currentTab === 'HOME' ? '#3F51B5' : '#757575'} />
          <Text style={[styles.tabText, currentTab === 'HOME' && styles.activeText]}>Trang chủ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => alert('Danh mục')}>
          <Ionicons name="grid-outline" size={22} color="#757575" />
          <Text style={styles.tabText}>Danh mục</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => setCurrentTab('CART')}>
          <Ionicons name={currentTab === 'CART' ? 'cart' : 'cart-outline'} size={22} color={currentTab === 'CART' ? '#3F51B5' : '#757575'} />
          <Text style={[styles.tabText, currentTab === 'CART' && styles.activeText]}>Giỏ hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => alert('Tài khoản')}>
          <Ionicons name="person-outline" size={22} color="#757575" />
          <Text style={styles.tabText}>Tài khoản</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  screenArea: { flex: 1 },
  tabBar: { height: 56, backgroundColor: '#FFFFFF', flexDirection: 'row', borderTopWidth: 1, borderTopColor: '#E0E0E0', elevation: 8 },
  tabItem: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  tabText: { fontSize: 11, color: '#757575', marginTop: 2 },
  activeText: { color: '#3F51B5', fontWeight: 'bold' },
});