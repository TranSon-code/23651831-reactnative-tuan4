import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

const cartItems = [
  { id: '1', title: 'Lập trình React Native', price: '120.000 đ', qty: 1 },
  { id: '2', title: 'Clean Code cơ bản', price: '250.000 đ', qty: 2 },
  { id: '3', title: 'JavaScript Nâng Cao', price: '145.000 đ', qty: 1 },
];

export default function CartScr() {
  return (
    <View style={styles.container}>
      <View style={styles.header}><Text style={styles.headerTitle}>Giỏ hàng của bạn</Text></View>
      <ScrollView style={styles.listContainer} contentContainerStyle={styles.listContent}>
        {cartItems.map((item) => (
          <View key={item.id} style={styles.cartRow}>
            <Image source={{ uri: 'https://picsum.photos/100/100' }} style={styles.thumb} />
            <View style={styles.infoCol}>
              <Text style={styles.itemTitle} numberOfLines={1}>{item.title}</Text>
              <Text style={styles.itemQty}>SL: {item.qty}</Text>
            </View>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.checkoutBox}>
        <View>
          <Text style={styles.sumLabel}>Tổng thanh toán:</Text>
          <Text style={styles.sumPrice}>765.000 đ</Text>
        </View>
        <TouchableOpacity style={styles.payBtn}><Text style={styles.payText}>Thanh toán</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F2F5' },
  header: { height: 50, backgroundColor: '#1A237E', justifyContent: 'center', alignItems: 'center' },
  headerTitle: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
  listContainer: { flex: 1 },
  listContent: { padding: 12 },
  cartRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', padding: 10, borderRadius: 8, marginBottom: 10 },
  thumb: { width: 50, height: 50, borderRadius: 6, backgroundColor: '#DDD' },
  infoCol: { flex: 1, marginHorizontal: 12 },
  itemTitle: { fontSize: 14, fontWeight: 'bold', color: '#333' },
  itemQty: { fontSize: 12, color: '#666', marginTop: 4 },
  itemPrice: { fontSize: 14, fontWeight: 'bold', color: '#D32F2F' },
  checkoutBox: { backgroundColor: '#FFF', padding: 14, borderTopWidth: 1, borderTopColor: '#DDD', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  sumLabel: { fontSize: 12, color: '#666' },
  sumPrice: { fontSize: 16, fontWeight: 'bold', color: '#1A237E' },
  payBtn: { backgroundColor: '#E53935', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 6 },
  payText: { color: '#FFF', fontWeight: 'bold', fontSize: 14 },
});