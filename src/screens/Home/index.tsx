import { useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import { AmountInfo } from "../../components/AmountInfo";

import Logo from "../../assets/logo.png";

import { homeStyles } from "./styles";
import { Todo } from "../../components/Todo";

interface Todos {
  id: string;
  checked: boolean;
  description: string;
}

const MAX_DESCRIPTION_LENGTH = 60;

export function Home() {
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState<Todos[]>([]);

  let finishedTodos = todos.filter((todo) => todo.checked);
  let currentTodoDescriptionLength = description.length;

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
    setDescription("");
  }

  function handleTaskToDone(id: string) {
    const updateTodoTask = todos.map((item) => {
      if (item.id === id) {
        item.checked = !item.checked;
      }

      return { ...item };
    });

    setDescription("");
    setTodos(updateTodoTask);
  }

  function handleRemoveTodo(id: string, onLongPressRef: boolean) {
    setDescription("");

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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={homeStyles.container}>
        <View style={homeStyles.header}>
          <Image source={Logo} />
        </View>
        <View style={homeStyles.body}>
          <View style={homeStyles.inputWrapper}>
            <TextInput
              style={homeStyles.input}
              placeholder="Adicione uma nova tarefa"
              placeholderTextColor="#808080"
              value={description}
              onChangeText={setDescription}
              selectTextOnFocus={description.length === 60}
            />
            <TouchableOpacity
              style={homeStyles.addButton}
              activeOpacity={0.7}
              onPress={() => handleAddTodo(description)}
            >
              <Feather name="plus-circle" size={18} color="#FFF" />
            </TouchableOpacity>
          </View>
          <View style={homeStyles.descriptionLengthWrapper}>
            <Text style={homeStyles.descriptionLength}>
              {description.length <= 60
                ? `${
                    MAX_DESCRIPTION_LENGTH - currentTodoDescriptionLength
                  } caracteres restantes`
                : `${
                    (MAX_DESCRIPTION_LENGTH - currentTodoDescriptionLength) * -1
                  } caratere(s) a mais`}
            </Text>
          </View>
          <View style={homeStyles.infoWrapper}>
            <AmountInfo
              label={"Criadas"}
              amount={todos.length}
              type="created"
            />
            <AmountInfo
              label="Concluídas"
              amount={finishedTodos.length}
              type="finished"
            />
          </View>
          {todos.length > 0 ? (
            <FlatList
              data={todos}
              keyExtractor={(item) => String(item.id)}
              contentContainerStyle={{ marginTop: 32, paddingBottom: 24 }}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <Todo
                  key={item.id}
                  data={item}
                  onTaskDone={handleTaskToDone}
                  onRemoveTask={handleRemoveTodo}
                />
              )}
            />
          ) : (
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
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
