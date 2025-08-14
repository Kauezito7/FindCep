// import { ImageBackground } from "expo-image";
import { Text, View, StyleSheet, ImageBackground, Image, ScrollView } from "react-native";
import { Input } from '../components/input/input';
import { Botao } from '../components/botao/botao';
import { Card } from '../components/card/card';



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

      <ScrollView style={styles.containerScroll}>
        {/* 2. Campo de consulta */}
        <View style={styles.container}>
          {/* 2.1 Titulo */}
          <Text style={styles.titulo}>Consulte seu Cep</Text>
          {/* 2.2 Input */}
          <Input />
          {/* 2.3 Botao */}
          <Botao tituloBotao='Consultar' />
          {/* 2.4 Card de informacoes */}
          <Card card="Informacoes do CEP" />
        </View>
      </ScrollView>
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
    gap: 40,
    width: "100%",
    minHeight: '100%',
    alignItems: 'center'
  },
  containerScroll: {
    flex: 1.5,
    paddingTop: 50,
    height: '100%',
    paddingBottom: 80

  },
  titulo: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    color: '#000000'
  }
})
