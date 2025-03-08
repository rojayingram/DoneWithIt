export default function App() {
  return (
    <>
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 40,
      backgroundColor: '000'
    }}>
    <View style={{
      width: 50,
      height: 50,
      backgroundColor: '#fc5c65',
      marginLeft:20,
      
    }}/>

    <View style={{
      width: 50,
      height: 50,
      backgroundColor: '#4ECDC4',
      marginRight: 20,
    }}/>
    </View>
    <View>
      <Image source={require('./assets/chair.jpg')}
      style={{
        width: 570,
        height: 570,
        resizeMode: 'contain',
        alignSelf:'center',
        marginTop: 100
      }}/>
    </View>
    </>
  );
}