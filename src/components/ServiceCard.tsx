import React from 'react';
import {View} from 'react-native';
import AccordionItem from './AccordionItem';
import styles from '../styles/profileStyles'; // Assuming you have a common styles file

const ServiceCard: React.FC = () => {
  return (
    <View style={styles.container}>
      <AccordionItem
        title="Web Design"
        content="Designer web apaixonado com 3 anos de experiência. Sites centrados no usuário, visualmente cativantes. Vamos criar sua obra-prima digital juntos."
      />
      <AccordionItem
        title="UX/UI Design"
        content="Desenvolvimento de interfaces de usuário para sites e aplicativos."
      />
      <AccordionItem
        title="Machine Learning"
        content="Over 10 years of experience in machine learning."
      />
    </View>
  );
};

export default ServiceCard;
