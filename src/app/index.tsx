import { Link, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <Link href="/home" asChild>
    <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Go to The Map</Text>
    </Pressable>
</Link>
</View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
}); 
