import { styles } from "@/constants/styles";
import { Link } from "expo-router";
import { View } from "react-native";

export default function Index() {
  return (
    <View style={styles.center}>
      <Link style={{ textAlign: "center" }} href="/sign-in">
        Sign In
      </Link>
      <Link style={{ textAlign: "center" }} href="/explore">
        Explore
      </Link>
      <Link style={{ textAlign: "center" }} href="/profile">
        Profile
      </Link>
      <Link style={{ textAlign: "center" }} href="/properties/1">
        Property 1
      </Link>
    </View>
  );
}
