import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';

export default function BookDetailScr({ onBack }: { onBack: () => void }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.navBar}>
        <TouchableOpacity onPress={onBack}><Text style={styles.backText}>← Quay lại</Text></TouchableOpacity>
        <Text style={styles.navTitle}>Chi tiết sách</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: 'https://picsum.photos/300/400' }} style={styles.coverImage} />
        </View>
        <ScrollView style={styles.scrollDesc} contentContainerStyle={styles.descContent}>
          <Text style={styles.bookTitle}>Lập trình React Native chuyên sâu</Text>
          <Text style={styles.author}>Tác giả: Trần Nam Sơn</Text>
          <Text style={styles.price}>185.000 đ</Text>
          <Text style={styles.sectionHeader}>Mô tả sản phẩm</Text>
          <Text style={styles.descriptionText}>
            Cung cấp kiến thức nền tảng vững chắc về Flexbox, xây dựng giao diện ứng dụng di động đa nền tảng, xử lý bố cục phức tạp...
          </Text>
        </ScrollView>
        <View style={styles.bottomBar}>
          <View>
            <Text style={styles.totalLabel}>Tạm tính</Text>
            <Text style={styles.totalPrice}>185.000 đ</Text>
          </View>
          <TouchableOpacity style={styles.addToCartBtn}><Text style={styles.addToCartText}>Thêm vào giỏ</Text></TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#1A237E' },
  navBar: { height: 44, backgroundColor: '#1A237E', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, gap: 16 },
  backText: { color: '#FFD54F', fontWeight: 'bold' },
  navTitle: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  imageContainer: { alignItems: 'center', paddingVertical: 12, backgroundColor: '#FFF' },
  coverImage: { width: 130, aspectRatio: 3/4, borderRadius: 8 },
  scrollDesc: { flex: 1, backgroundColor: '#FFF', borderTopWidth: 1, borderTopColor: '#EEE' },
  descContent: { padding: 16 },
  bookTitle: { fontSize: 18, fontWeight: 'bold', color: '#222' },
  author: { fontSize: 14, color: '#666', marginTop: 4 },
  price: { fontSize: 16, fontWeight: 'bold', color: '#D32F2F', marginTop: 8 },
  sectionHeader: { fontSize: 15, fontWeight: 'bold', color: '#1A237E', marginTop: 16, marginBottom: 8 },
  descriptionText: { fontSize: 14, color: '#444', lineHeight: 22 },
  bottomBar: { height: 64, backgroundColor: '#FFF', borderTopWidth: 1, borderTopColor: '#DDD', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16 },
  totalLabel: { fontSize: 12, color: '#666' },
  totalPrice: { fontSize: 16, fontWeight: 'bold', color: '#1A237E' },
  addToCartBtn: { backgroundColor: '#3F51B5', paddingHorizontal: 24, paddingVertical: 10, borderRadius: 6 },
  addToCartText: { color: '#FFF', fontWeight: 'bold', fontSize: 14 },
});