import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Linking } from 'react-native';

const resources = [
    { id: '1', name: 'Hilfetelefon Gewalt gegen Frauen', phone: '08000 116 016' },
    { id: '2', name: 'Telefonseelsorge', phone: '0800 111 0 111' },
];

const ResourcesScreen = () => {
    const handlePhonePress = (phone) => Linking.openURL(`tel:${phone}`);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ressourcen</Text>
            <FlatList
                data={resources}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handlePhonePress(item.phone)}>
                        <Text style={styles.item}>{item.name}: {item.phone}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold' },
    item: { fontSize: 18, marginVertical: 10 },
});

export default ResourcesScreen;
