import React from 'react';
import {Linking, ScrollView, Text} from 'react-native';
import ProfileImage from './components/ProfileImage';
import styles from './styles/profileStyles';
import BioText from './components/BioText';
import SocialButton from './components/SocialButton';

const App: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ProfileImage imageUrl="https://avatars.githubusercontent.com/u/8147523?v=4" />
      <Text style={styles.name}>Ezio Tristão</Text>
      <BioText
        text="I am a software engineer passionate about creating innovative solutions
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
        motivated by opportunities to apply my knowledge in AI and software"
      />
      <SocialButton
        title="GitHub"
        onPress={() => Linking.openURL('https://github.com/TristaoEzio')}
      />

      <SocialButton
        title="LinkedIn"
        onPress={() =>
          Linking.openURL('https://www.linkedin.com/in/eziotristao/')
        }
      />
      <Text style={styles.quote}>
        "Imagination is more important than knowledge. For knowledge is limited
        to all we now know and understand, while imagination embraces the entire
        world, and all there ever will be to know and understand."" - Albert
        Einstein
      </Text>
    </ScrollView>
  );
};

export default App;
