import { useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Keyboard,
  StatusBar,
  Text,
  View,
} from "react-native";

import { Feather } from "@expo/vector-icons";

import { AmountInfo } from "../../components/AmountInfo";

import Logo from "../../assets/logo.png";

import { homeStyles } from "./styles";
import { Todo } from "../../components/Todo";
import { Input } from "../../components/Input";

interface Todos {
  id: string;
  checked: boolean;
  description: string;
}

export function Home() {
  const [todos, setTodos] = useState<Todos[]>([]);

  let finishedTodos = todos.filter((todo) => todo.checked);

  function handleAddTodo(description: string) {
    if (description === "") {
      Alert.alert(
        "Atenção",
        "Não podemos cadastrar tarefas com descrição vazias."
      );
      return;
    }

    if (description.length > 60) {
      Alert.alert(
        "Atenção",
        "Não podemos cadastrar tarefas com descrição maior de que 60 caracteres"
      );
      return;
    }

    const todo = {
      id: `${new Date().getTime()}`,
      checked: false,
      description,
    };

    setTodos((oldState) => [...oldState, todo]);
    Keyboard.dismiss();
  }

  function handleTaskToDone(id: string) {
    const updateTodoTask = todos.map((item) => {
      if (item.id === id) {
        item.checked = !item.checked;
      }

      return { ...item };
    });

    setTodos(updateTodoTask);
  }

  function handleRemoveTodo(id: string, onLongPressRef: boolean) {
    if (onLongPressRef) {
      setTodos((oldState) => oldState.filter((todo) => todo.id !== id));
      return;
    }

    Alert.alert(
      "Remoção de Tarefa",
      "Você realmente deseja excluir essa tarefa?",
      [
        {
          text: "Não",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Sim, desejo",
          onPress: () => {
            setTodos((oldState) => oldState.filter((todo) => todo.id !== id));
          },
          style: "destructive",
        },
      ]
    );
  }

  return (
    <View style={homeStyles.container}>
      <StatusBar backgroundColor="#0D0D0D" barStyle="light-content" />
      <View style={homeStyles.header}>
        <Image source={Logo} />
      </View>
      <View style={homeStyles.body}>
        <Input onAddTodo={handleAddTodo} />
        <View style={homeStyles.infoWrapper}>
          <AmountInfo label={"Criadas"} amount={todos.length} type="created" />
          <AmountInfo
            label="Concluídas"
            amount={finishedTodos.length}
            type="finished"
          />
        </View>
      </View>
      <FlatList
        data={todos}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 24,
          padding: 16,
          marginBottom: 16,
        }}
        renderItem={({ item }) => (
          <Todo
            key={item.id}
            data={item}
            onTaskDone={handleTaskToDone}
            onRemoveTask={handleRemoveTodo}
          />
        )}
        ListEmptyComponent={() => (
          <View style={homeStyles.todos}>
            <Feather name="clipboard" size={56} color="#808080" />
            <Text style={[homeStyles.infoText, homeStyles.infoTextRegular]}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={[homeStyles.infoText, homeStyles.infoTextBold]}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
    </View>
  );
}
