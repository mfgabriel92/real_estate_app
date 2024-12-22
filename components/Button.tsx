import { colors } from "@/constants/colors";
import { PropsWithChildren } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

interface Props extends PropsWithChildren {
  onPress: () => void;
  otherStyles?: Record<string, string> | Record<string, number>;
}

export function Button({ onPress, children, ...otherStyles }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.button, ...Object.values(otherStyles).at(0) }}
    >
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    gap: 8,

    backgroundColor: "white",
    padding: 14,
    borderRadius: 100,
    marginTop: 8,

    shadowColor: colors.black["200"],
    elevation: 2,
    borderWidth: 0.5,
    borderColor: "#DEDEDE",
  },
});
