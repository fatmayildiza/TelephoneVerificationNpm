import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const App: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const formatPhoneNumber = (text: string) => {
    // Sadece rakam içeren bir metin oluştur
    const onlyNumbers = text.replace(/[^\d]/g, '');

    // İlk üç rakamı parantez içine al
    const formattedNumber = `(${onlyNumbers.slice(0, 3)})${onlyNumbers.slice(3)}`;

    // State'i güncelle
    setPhoneNumber(formattedNumber);
  };

  const validatePhoneNumber = () => {
    // Belirli cep telefonu alan kodlarını içeren bir regex
    const allowedAreaCodes = /^(532|533|534|535|536|537|538|539|540|541|542|543|544|545|546|547|548|549|550|551|552|553|554|555|556|557|558|559)\d{7}$/;

    // Telefon numarasını temizle
    const onlyNumbers = phoneNumber.replace(/[^\d]/g, '');

    // Belirtilen cep telefonu alan kodlarına sahipse ve 10 haneli ise geçerli kabul et
    if (allowedAreaCodes.test(onlyNumbers) && onlyNumbers.length === 10) {
      alert('Geçerli telefon numarası.');
    } else {
      alert('Geçerli bir cep telefonu numarası değil.');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>Yeni Hesap Oluştur</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ marginRight: 5 }}>+90</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5, flex: 1 }}
          placeholder="Telefon Numarası"
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={(text) => formatPhoneNumber(text)}
        />
      </View>
      <Button title="Validate" onPress={validatePhoneNumber} />
    </View>
  );
};

export default App;
