import React, { useEffect, useState } from "react";
import { Text, View, FlatList, ScrollView } from "react-native";
import estilos from "./estilos";
import { pegarRepodoUser } from "../../services/requisicoes/repositorios";
import { useIsFocused } from "@react-navigation/native";
import { BotLayout, Layer, TopLayout, BackButton } from "./styles";
import topLayout from "../../assets/images/layoutTop.png";
import botLayout from "../../assets/images/layoutBot.png";
import layout from "../../assets/images/layout.png";

export default function Repositorios({ route, navigation }) {
  const [repo, setRepo] = useState([]);
  const estaNatela = useIsFocused();

  useEffect(async () => {
    const resultado = await pegarRepodoUser(route.params.id);
    setRepo(resultado);
  }, [estaNatela]);

  return (
    <View style={estilos.container}>
      <TopLayout src={topLayout} />
      <BotLayout src={botLayout} />
      <Layer src={layout} />

      <View style={{ marginTop: 60, alignItems: "center" }}>
        <BackButton onClick={() => navigation.navigate("Principal")}>
          Voltar
        </BackButton>
        <Text style={estilos.repositoriosTexto}>
          {repo.length} repositórios criados
        </Text>

        <FlatList
          data={repo}
          style={{ width: "100%" }}
          keyExtractor={(repo) => repo.id}
          renderItem={({ item }) => (
            <View style={estilos.repositorio}>
              <Text style={estilos.repositorioNome}>{item.name}</Text>
              <Text style={estilos.repositorioData}>
                Atualizado em {item.updated_at}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
