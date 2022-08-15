import { Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { todoStyles } from "./styles";

interface Todo {
  id: string;
  checked: boolean;
  description: string;
}

interface TodoProps {
  data: Todo;
  onTaskDone: (id: string) => void;
  onRemoveTask: (id: string, onLongPressRef: boolean) => void;
}

function Todo({ data, onTaskDone, onRemoveTask }: TodoProps) {
  return (
    <View style={todoStyles.container}>
      <View style={todoStyles.buttonWrapper}>
        <TouchableOpacity
          onPress={() => onTaskDone(data.id)}
          style={[
            todoStyles.leftButton,
            data.checked && todoStyles.leftButtonActived,
          ]}
        >
          {data.checked && <Feather name="check" size={18} color="#FFF" />}
        </TouchableOpacity>
      </View>
      <View style={todoStyles.textWrapper}>
        <Text
          style={[
            todoStyles.description,
            data.checked && todoStyles.descriptionActived,
          ]}
        >
          {data.description}
        </Text>
      </View>
      <View style={todoStyles.buttonWrapper}>
        <TouchableOpacity
          onLongPress={() => onRemoveTask(data.id, true)}
          onPress={() => onRemoveTask(data.id, false)}
          style={todoStyles.rightButton}
        >
          <Feather name="trash-2" size={24} color="#808080" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export { Todo };
