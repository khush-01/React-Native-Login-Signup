import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  active: {
    color: 'blue',
    fontSize: 27,
    paddingLeft: 20,
  },
  nonActive: {
    color: 'gray',
    fontSize: 27,
    paddingLeft: 20,
  },
  inputField: {
    borderColor: 'gray',
    borderRadius: 20,
    borderWidth: 1,
    color: 'black',
    height: 50,
    marginTop: 20,
    paddingLeft: 20,
    width: 300,
  },
  forgetPass: {
    color: 'blue',
    fontWeight: 'bold',
    marginTop: 18,
    textAlign: 'right',
    width: 250,
    },
  btnStyles: {
    borderRadius: 20,
    marginTop: 30,
    width: 200,
  },
  tnc: {
    fontSize: 15,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'justify',
  }
})

export default styles;