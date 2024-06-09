import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  LayoutAnimation,
  StyleSheet,
} from 'react-native';

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({title, content}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(!isExpanded);
  };

  const renderIcon = (): JSX.Element => {
    return isExpanded ? (
      <Image
        source={require('../assets/images/minusIcon.png')}
        style={styles.icon}
      />
    ) : (
      <Image
        source={require('../assets/images/plusIcon.png')}
        style={styles.icon}
      />
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={toggleAccordion}
        accessible={true}
        accessibilityLabel={`Toggle ${title}`}>
        <View style={styles.header}>
          {renderIcon()}
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
      {isExpanded && (
        <View style={styles.content}>
          <Text>{content}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  content: {
    padding: 20,
  },
  icon: {
    width: 40,
    height: 40,
  },
});

export default AccordionItem;
