import { Button } from "@/components/Button";
import { colors } from "@/constants/colors";
import icons from "@/constants/icons";
import images from "@/constants/images";
import {
  ScrollView,
  Image,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
  function handleGoogleLoginPress() {}

  return (
    <SafeAreaView>
      <ScrollView style={{ height: "100%" }}>
        <Image
          source={images.onboarding}
          style={styles.image}
          resizeMode="contain"
        />
        <View>
          <Text style={styles.welcome}>Welcome to Real Estate App</Text>
          <Text style={styles.title}>
            Let's get you closer to {"\n"}
            <Text style={styles.innerTitle}>your ideal home</Text>
          </Text>
          <Button
            onPress={handleGoogleLoginPress}
            otherStyles={{ marginTop: 32 }}
          >
            <Image source={icons.google} style={{ width: 16, height: 16 }} />
            <Text>Continue with Google</Text>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: Dimensions.get("window").height * 0.66,
  },
  welcome: {
    fontFamily: "Rubik-Regular",
    textAlign: "center",
    textTransform: "uppercase",
    color: "gray",
  },
  title: {
    fontFamily: "Rubik-Bold",
    textAlign: "center",
    fontSize: 32,
  },
  innerTitle: {
    fontFamily: "Rubik-Bold",
    textAlign: "center",
    color: colors.primary["300"],
  },
});
