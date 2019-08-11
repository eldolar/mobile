import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  headerContainer: {
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#b392c7',
    paddingBottom: 20,
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 5},
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: 'row'
  },
  // GoBack Header
  backArrow: {
    position: 'absolute',
    left: 25,
  },
  // Main Header
  dates: {
    paddingLeft: 15,
    position: 'absolute',
    flexDirection: 'column'
  },
  dateDescription: {
    textDecorationLine: 'underline',
    color: '#dedede'
    // color: '#e6e6e6'
  },
  dateUpdated: {
    fontWeight: '400',
    color: 'white',
    fontSize: 13,
  },
  aboutButton: {
    position: 'absolute',
    right: 25,
  },
  textAbout: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
    // textDecorationLine: 'underline'
  }
})