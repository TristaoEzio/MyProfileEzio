import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 75,
    marginBottom: 20,
    marginTop: 100,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  linksContainer: {
    width: '100%',
    marginBottom: 20,
  },
  link: {
    fontSize: 18,
    color: '#1E90FF',
    textAlign: 'center',
    marginVertical: 5,
  },
  quote: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
});

export default styles;
