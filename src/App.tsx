import React from 'react';
import {
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from '../../MyProfileEzio/src/styles/profileStyles';

const ProfileScreen: React.FC = () => {
  const handlePress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{uri: 'https://avatars.githubusercontent.com/u/8147523?v=4'}}
        style={styles.profileImage}
      />
      <Text style={styles.name}>Ezio Tristão</Text>
      <Text style={styles.bio}>
        I am a software engineer passionate about creating innovative solutions
        that generate value for businesses and users. My experience spans the
        development of mobile and web applications, with a focus on the
        practical application of innovation and artificial intelligence to
        optimize processes and enhance user experience. I am driven by the
        challenge of employing best development practices to build high-quality
        products and services. I possess strong communication and organizational
        skills, which enable me to lead teams, collaborate effectively, and
        achieve tangible results in projects of all sizes, both in B2B and B2C
        environments. My adaptability allows me to successfully navigate the
        constant changes in the market and emerging technologies. I am always
        motivated by opportunities to apply my knowledge in AI and software
        development to create solutions that drive growth and innovation.
      </Text>

      <View style={styles.linksContainer}>
        <TouchableOpacity
          accessible={true}
          accessibilityLabel="GitHub Profile"
          style={styles.button}
          onPress={() => handlePress('https://github.com/TristaoEzio')}>
          <Text style={styles.buttonText}>GitHub</Text>
        </TouchableOpacity>
        <TouchableOpacity
          accessible={true}
          accessibilityLabel="LinkedIn Profile"
          style={styles.button}
          onPress={() =>
            handlePress('https://www.linkedin.com/in/your-profile')}>
          <Text style={styles.buttonText}>LinkedIn</Text>
        </TouchableOpacity>
        <TouchableOpacity
          accessible={true}
          accessibilityLabel="WhatsApp Contact"
          style={styles.button}
          onPress={() => handlePress('https://wa.me/your-whatsapp-number')}>
          <Text style={styles.buttonText}>WhatsApp</Text>
        </TouchableOpacity>
        <TouchableOpacity
          accessible={true}
          accessibilityLabel="Twitter Profile"
          style={styles.button}
          onPress={() => handlePress('https://twitter.com/your-profile')}>
          <Text style={styles.buttonText}>X (Twitter)</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.quote}>
        "A imaginação é mais importante que o conhecimento." - Albert Einstein
      </Text>
    </ScrollView>
  );
};

export default ProfileScreen;