export default function App() {
  return (
    <>
    <ImageBackground source={require('./assets/background.jpg')}
    style={{
      flex: 1,
    }}>
      <Image source={
        require('./assets/logo-red.png')
      }
      style={{
        width: 100,
        height: 100,
        alignSelf: 'center',
        top: 45
      }}/>

      <Text style={{
        alignSelf: 'center',
        top: 50,

      }}>
        Sell What You Don't Need
      </Text>

    </ImageBackground>

    <View style={{
      backgroundColor: '#fc5c65',
      width: "100%",
      height: 70
    }}/>

    <View style={{
      backgroundColor: '#4ECDC4',
      width: '100%',
      height: 70,
    }}/>
    </>
    
  );
}
