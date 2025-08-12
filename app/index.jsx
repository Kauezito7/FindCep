// import { ImageBackground } from "expo-image";
import { Text, View, StyleSheet, ImageBackground, Image } from "react-native";
import { Input } from '../components/input/input';

export default function Index() {
  return (
    <>
    {/* 1. Logo + imagem de fundo */}
    <ImageBackground 
    source={require('../assets/images/ImgFundo.png')} 
    style={styles.imgFundo}>

    <Image
    source={require('../assets/images/LogoFindCEP.png')} 
    style={styles.loho}>
    </Image>

    </ImageBackground>

    {/* 2. Campo de consulta */}
    <View style={styles.container}>
    {/* 2.1 Titulo */}
    <Text style={styles.titulo}>Consulte seu Cep</Text>

    <Input/>
    </View>
    {/* 2.2 Input */}
    {/* 2.3 Botao */}
    {/* 2.4 Card de informacoes */}
    </>
  );
}
//Estilo dos meus componentes: 
const styles = StyleSheet.create({
  imgFundo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  Logo: {

    width: 100,
    height: 120
  },
  container: {
    flex: 1.5,
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 50,
    gap: 40
  },
  titulo: {
    fontSize: 25
  }
})
