import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from '../styles/profileStyles';

interface SocialButtonProps {
  title: string;
  onPress: () => void;
}

const SocialButton: React.FC<SocialButtonProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SocialButton;
