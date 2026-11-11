import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const gridBooks = [
  { id: '1', title: 'Đắc Nhân Tâm', price: '86.000 đ' },
  { id: '2', title: 'Nhà Giả Kim', price: '79.000 đ' },
  { id: '3', title: 'Tuổi Trẻ Đáng Giá', price: '95.000 đ' },
  { id: '4', title: 'Cây Cam Ngọt', price: '108.000 đ' },
];

export default function BookGrid() {
  return (
    <View style={styles.gridContainer}>
      {gridBooks.map((item) => (
        <View key={item.id} style={styles.gridItem}>
          <Image source={{ uri: 'https://picsum.photos/300/400' }} style={styles.gridImage} />
          <View style={styles.infoBox}>
            <Text style={styles.gridTitle} numberOfLines={1}>{item.title}</Text>
            <Text style={styles.gridPrice}>{item.price}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  gridContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingVertical: 4 },
  gridItem: { width: '48%', marginBottom: 16, backgroundColor: '#FFFFFF', borderRadius: 8, overflow: 'hidden', elevation: 2 },
  gridImage: { width: '100%', aspectRatio: 3 / 4, backgroundColor: '#E0E0E0' },
  infoBox: { padding: 8 },
  gridTitle: { fontSize: 14, fontWeight: 'bold', color: '#212121' },
  gridPrice: { fontSize: 13, color: '#D32F2F', fontWeight: 'bold', marginTop: 4 },
});