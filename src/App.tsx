import React from 'react';
import {ScrollView} from 'react-native';
import ProfileScreen from './screens/ProfileScreen'; // Certifique-se de que o caminho está correto

const App: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <ProfileScreen />
    </ScrollView>
  );
};

export default App;
