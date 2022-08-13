import { useState } from "react";
import {
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { inputStyles } from "./styles";

const MAX_DESCRIPTION_LENGTH = 60;

interface InputProps {
  onAddTodo: (description: string) => void;
}

function Input({ onAddTodo }: InputProps) {
  const [description, setDescription] = useState("");

  let currentTodoDescriptionLength = description.length;

  function handleAddTodo(description: string) {
    setDescription("");
    Keyboard.dismiss();
    onAddTodo(description);
  }

  return (
    <>
      <View style={inputStyles.inputWrapper}>
        <TextInput
          style={inputStyles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          value={description}
          onChangeText={setDescription}
          selectTextOnFocus={description.length === 60}
        />
        <TouchableOpacity
          style={inputStyles.addButton}
          activeOpacity={0.7}
          onPress={() => handleAddTodo(description)}
        >
          <Feather name="plus-circle" size={18} color="#FFF" />
        </TouchableOpacity>
      </View>
      <View style={inputStyles.descriptionLengthWrapper}>
        <Text style={inputStyles.descriptionLength}>
          {description.length <= 60
            ? `${
                MAX_DESCRIPTION_LENGTH - currentTodoDescriptionLength
              } caracteres restantes`
            : `${
                (MAX_DESCRIPTION_LENGTH - currentTodoDescriptionLength) * -1
              } caratere(s) a mais`}
        </Text>
      </View>
    </>
  );
}

export { Input };
