import React, { useState } from "react";
import { criarRepo } from "../../services/requisicoes/repositorios";
import { TextInputMask } from "react-native-masked-text";
import { Text, View, TouchableOpacity, TextInput, Alert } from "react-native";
import estilos from "./estilos";

export default function CriarRepositorio({ route, navigation }) {
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");

  async function criar() {
    const resultado = await criarRepo(route.params.id, nome, data);

    if (resultado === "sucesso") {
      Alert.alert("Repositorio Criado!");
      navigation.goBack();
    } else {
      Alert.alert("Erro ao criar repositorio");
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
      <TouchableOpacity style={estilos.botao} onPress={criar}>
        <Text style={estilos.textoBotao}>Criar</Text>
      </TouchableOpacity>
    </View>
  );
}
