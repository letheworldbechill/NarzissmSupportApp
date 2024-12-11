import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Willkommen</Text>
            <Button title="Tagebuch" onPress={() => navigation.navigate('Journal')} />
            <Button title="Artikel" onPress={() => navigation.navigate('Articles')} />
            <Button title="Ressourcen" onPress={() => navigation.navigate('Resources')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});

export default HomeScreen;
