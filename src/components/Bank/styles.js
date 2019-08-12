import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  box: {
    borderWidth: 2,
    borderRadius: 15,
    borderColor: 'white',
    padding: 10,
    width: 250,
    margin: 10,
    alignSelf: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 3,
  },
  name: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 21,
    fontWeight: 'bold',
  },
  exchangeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  exchangeTitle: {
    fontSize: 16,
    color: "#dedede",
    fontWeight: 'bold',
  },
  exchangePrice: {
    fontSize: 19,
    color: "#dedede",
    fontWeight: '400',
  },
  exchange: {
    flexDirection: 'column',
    color: '#5A6978',
    alignItems: 'center',
  },
  noData: {
    opacity: 0.5,
  }
})
