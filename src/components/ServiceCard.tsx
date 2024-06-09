import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from '../styles/profileStyles';

const ServiceCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://www.fillar.com.br/wp-content/uploads/2021/04/site-design-web.png',
        }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Web Design</Text>
        <Text style={styles.description}>
          Designer web apaixonado com 3 anos de experiência. Sites centrados no
          usuário, visualmente cativantes. Vamos criar sua obra-prima digital
          juntos.
        </Text>
      </View>
    </View>
  );
};

export default ServiceCard;
