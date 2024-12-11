import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { db } from '../services/firebaseConfig';

const JournalScreen = () => {
    const [entry, setEntry] = useState('');
    const [entries, setEntries] = useState([]);

    const saveEntry = async () => {
        if (entry.trim()) {
            await db.collection('journal_entries').add({ content: entry, date: new Date() });
            setEntry('');
            fetchEntries();
        }
    };

    const fetchEntries = async () => {
        const snapshot = await db.collection('journal_entries').orderBy('date', 'desc').get();
        setEntries(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    const deleteEntry = async (id) => {
        await db.collection('journal_entries').doc(id).delete();
        fetchEntries();
    };

    useEffect(() => {
        fetchEntries();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tagebuch</Text>
            <TextInput
                style={styles.input}
                placeholder="Schreib etwas..."
                value={entry}
                onChangeText={setEntry}
            />
            <Button title="Speichern" onPress={saveEntry} />
            <FlatList
                data={entries}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.entry}>
                        <Text>{item.content}</Text>
                        <TouchableOpacity onPress={() => deleteEntry(item.id)}>
                            <Text style={styles.delete}>Löschen</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
    input: { borderWidth: 1, marginBottom: 10, padding: 8 },
    entry: { padding: 10, marginVertical: 5, backgroundColor: '#f8f8f8' },
    delete: { color: 'red', marginTop: 5 },
});

export default JournalScreen;
