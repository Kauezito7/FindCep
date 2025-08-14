// import { ImageBackground } from "expo-image";
import { Text, View, StyleSheet, ImageBackground, Image, ScrollView } from "react-native";
import { Input } from '../components/input/input';
import { Botao } from '../components/botao/botao';
import { Card } from '../components/card/card';
import { useState } from "react";
import axios from 'axios';



export default function Index() {

  const [cep, setCep] = useState("");
  const [jsonCep, setJsonCep] = useState({});
  const [exibirCard, setExibirCard] = useState();

  async function consultarCep() {
    try {
      if (cep !== "" && cep.length === 8) {
        const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        setJsonCep(resposta.data);
        setExibirCard(true); // agora o card aparece
      } else {
        alert("Erro ao consultar o cep!");
      }
    } catch (error) {
      console.log(error);
    }
  }

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
          <Input
            valorCep={cep}
            onChangeValorCep={e => setCep(e)}
          />

          {/* 2.3 Botao */}
          <Botao
            tituloBotao='Consultar'
            onPress={consultarCep}
          />

          {/* 2.4 Card de informacoes */}

          {/* Só acessa .cep se jsonCep existir */}
          {jsonCep?.cep && (  
            <Card
              cep={jsonCep.cep}
              logradouro={jsonCep.logradouro}
              bairro={jsonCep.bairro}
              uf={jsonCep.uf}
              estado={jsonCep.estado}
              regiao={jsonCep.regiao}
            />
          )}
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
    width: 50,
    height: 70
  },
  container: {
    gap: 40,
    width: "100%",
    minHeight: '80%',
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
