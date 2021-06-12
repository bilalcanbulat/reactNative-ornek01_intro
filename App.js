import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
//* ======REACT NATIVE TEMEL KOMPONENTLERİ ==========
//?- View componenti genel olarak div elemanına benzetilebilir
//?  ve bir container oluşturur. Ama içerisine yazı yazılamaz.
//?- Ekrana yazı bastirmak icin Text componenti kullanilir.
//?- Text'ler stil miraslarını sadece Text componentlerinden
//?  alabilir.
//* =================================================
export default function App() {
  return (
    <View style={stiller.kutu}>
      <Text style={stiller.baslik}>Merhaba Mobile Devs</Text>
      <Text style={stiller.ikinciBaslik}>React Native Dersimize Hos Geldiniz..</Text>
      <StatusBar style="auto" />
    </View>
  );
}
//?- Stillendirmeler CSS'de olduğu gibi inline olarak verilebilir. */
//?  veya bir styleheet oluşturulabilir.
//?- Stylesheet export edilip sonra istenilen sayfaya import edilebilir.
//?- Property'lerde adlandırma olarak camelCase kullanılır.
//?- RN'de komponentleri ekrana hizalamak icin genelde flexbox
//?  yapisi kullanilir. Ekran, flex oranlarina gore paylastirilir.
const stiller = StyleSheet.create({
  kutu: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
  },
  baslik: {
    color: "red",
    fontSize: 30,
  },
  ikinciBaslik: {
    color: "blue",
    fontSize: 20,
  },
});