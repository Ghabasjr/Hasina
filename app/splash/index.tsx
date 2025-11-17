import { router } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";

export default function Splash() {
    useEffect(() => {
        const timer = setTimeout(() => {
            router.replace("/");
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container} >
            <Image
                source={require("@/assets/images/Hasina.png")}
                style={styles.image}
                resizeMode="cover"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1F1B16",
    },
    image: {
        width: "100%",
        height: "100%",
    },
});