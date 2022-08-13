import { Text, View } from "react-native";
import { amountInfoStyles } from "./styles";

interface AmountInfoProps {
  label: string;
  amount: number;
  type: "created" | "finished";
}

function AmountInfo({ label, amount, type }: AmountInfoProps) {
  return (
    <View style={amountInfoStyles.container}>
      <Text
        style={[
          amountInfoStyles.label,
          type === "created"
            ? amountInfoStyles.labelCreated
            : amountInfoStyles.labelFinished,
        ]}
      >
        {label}
      </Text>
      <View style={amountInfoStyles.cardWrapper}>
        <Text style={amountInfoStyles.cardValue}>{amount}</Text>
      </View>
    </View>
  );
}

export { AmountInfo };
