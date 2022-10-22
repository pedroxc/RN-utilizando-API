import React, { useState } from "react";
import { buscaUsuario } from "../../services/requisicoes/usuarios";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";
import { TopLayout, BotLayout, Layer } from "./styles";
import estilos from "./estilos";
import topLayout from "../../assets/images/layoutTop.png";
import botLayout from "../../assets/images/layoutBot.png";
import layout from "../../assets/images/layout.png";

export default function Principal({ navigation }) {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [usuario, setUsuario] = useState({});

  async function busca() {
    const resultado = await buscaUsuario(nomeUsuario);
    if (resultado) {
      setUsuario(resultado);
    } else {
      Alert.alert("Usuario não econtrado");
      setUsuario({});
    }
  }
  return (
    <ScrollView>
      <View style={estilos.container}>
        <TopLayout src={topLayout} />
        <BotLayout src={botLayout} />
        <Layer src={layout} />
        <View style={{ marginTop: 40, alignItems: "center" }}>
          {usuario?.login && (
            <>
              <View style={estilos.fundo} />
              <View style={estilos.imagemArea}>
                <Image
                  source={{
                    uri: usuario.avatar_url,
                  }}
                  style={estilos.imagem}
                />
              </View>
              <Text style={estilos.textoNome}>{usuario.name}</Text>
              <Text style={estilos.textoEmail}>{usuario.email}</Text>
              <View style={estilos.seguidoresArea}>
                <View style={estilos.seguidores}>
                  <Text style={estilos.seguidoresNumero}>
                    {usuario.followers}
                  </Text>
                  <Text style={estilos.seguidoresTexto}>Seguidores</Text>
                </View>
                <View style={estilos.seguidores}>
                  <Text style={estilos.seguidoresNumero}>
                    {usuario.following}
                  </Text>
                  <Text style={estilos.seguidoresTexto}>Seguindo</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Repositorios", { id: usuario.login })
                }
              >
                <Text style={estilos.repositorios}>Ver os repositórios</Text>
              </TouchableOpacity>
            </>
          )}

          <TextInput
            placeholder="Busque por um usuário"
            autoCapitalize=""
            style={estilos.entrada}
            value={nomeUsuario}
            onChangeText={setNomeUsuario}
          />

          <TouchableOpacity style={estilos.botao} onPress={busca}>
            <Text style={estilos.textoBotao}>Buscar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
