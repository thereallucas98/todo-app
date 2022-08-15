import { useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Keyboard,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import CountryFlag from "react-native-country-flag";

import { useTranslation } from "react-i18next";

import "../../i18n";

import { Feather } from "@expo/vector-icons";

import { AmountInfo } from "../../components/AmountInfo";

import Logo from "../../assets/logo.png";

import { Todo } from "../../components/Todo";
import { Input } from "../../components/Input";

import { homeStyles } from "./styles";

interface Todos {
  id: string;
  checked: boolean;
  description: string;
}

export function Home() {
  const { t, i18n } = useTranslation();

  function changeLanguage(lang: string) {
    i18n
      .changeLanguage(lang)
      .then(() => {
        setCurrentLanguage(lang);
      })
      .catch((err) => console.log(err));
  }

  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [todos, setTodos] = useState<Todos[]>([]);

  let finishedTodos = todos.filter((todo) => todo.checked);

  function handleAddTodo(description: string) {
    if (description === "") {
      Alert.alert(`${t("alerts.atention")}`, `${t("alerts.emptyTodos")}`);
      return;
    }

    if (description.length > 60) {
      Alert.alert(
        `${t("alerts.atention")}`,
        `${t("alerts.limitedTaskByCharacters")}`
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
      `${t("alerts.taskRemove")}`,
      `${t("alerts.removeDescription")}`,
      [
        {
          text: `${t("buttons.no")}`,
          onPress: () => {},
          style: "cancel",
        },
        {
          text: `${t("buttons.iDo")}`,
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
        <View style={homeStyles.flags}>
          <TouchableOpacity
            style={[
              homeStyles.flagButton,
              currentLanguage === "pt" && homeStyles.flagButtonActive,
            ]}
            onPress={() => changeLanguage("pt")}
          >
            <CountryFlag isoCode="br" size={25} />
          </TouchableOpacity>
          <TouchableOpacity
            style={currentLanguage === "en" && homeStyles.flagButtonActive}
            onPress={() => changeLanguage("en")}
          >
            <CountryFlag isoCode="us" size={25} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={homeStyles.body}>
        <Input onAddTodo={handleAddTodo} />
        <View style={homeStyles.infoWrapper}>
          <AmountInfo
            label={t("createdTasks")}
            amount={todos.length}
            type="created"
          />
          <AmountInfo
            label={t("finishedTasks")}
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
              {t("info.hasNoTasks")}
            </Text>
            <Text style={[homeStyles.infoText, homeStyles.infoTextBold]}>
              {t("info.createTasks")}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
