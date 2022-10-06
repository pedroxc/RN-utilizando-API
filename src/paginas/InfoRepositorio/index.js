import React, { useState } from "react";
import { TextInputMask } from "react-native-masked-text";
import { Text, View, TouchableOpacity, TextInput, Alert } from "react-native";
import estilos from "./estilos";
import {
  salvarRepodoUser,
  deletarRepo,
} from "../../services/requisicoes/repositorios";

export default function InfoRepositorio({ route, navigation }) {
  const [nome, setNome] = useState(route.params.item.name);
  const [data, setData] = useState(route.params.item.data);

  async function salvar() {
    const resultado = await salvarRepodoUser(
      route.params.item.postId,
      nome,
      data,
      route.params.item.id
    );
    if (resultado === "sucesso") {
      Alert.alert("Repositorio atualizado!");
      navigation.goBack();
    } else {
      Alert.alert("Erro ao atualizar repositorio");
    }
  }
  async function deletar() {
    const resultado = await deletarRepo(route.params.item.id);
    if (resultado === "sucesso") {
      Alert.alert("Repositorio Deletado!");
      navigation.goBack();
    } else {
      Alert.alert("Erro ao deletar repositorio");
    }
  }

  return (
    <View style={estilos.container}>
      <TextInput
        placeholder="Nome do repositório"
        autoCapitalize="none"
        style={estilos.entrada}
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        placeholder="Data de Criação"
        autoCapitalize="none"
        style={estilos.entrada}
        value={data}
        onChangeText={setData}
      />
      <TouchableOpacity onPress={salvar} style={estilos.botao}>
        <Text style={estilos.textoBotao}>Salvar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={deletar}
        style={[estilos.botao, { backgroundColor: "#DD2B2B", marginTop: 10 }]}
      >
        <Text style={estilos.textoBotao}>Deletar</Text>
      </TouchableOpacity>
    </View>
  );
}
