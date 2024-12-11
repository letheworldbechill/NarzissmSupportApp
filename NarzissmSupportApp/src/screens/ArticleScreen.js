import React from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';

const articles = [
    { id: '1', title: 'Was ist Gaslighting?' },
    { id: '2', title: 'Warum isolieren Narzissten ihre Opfer?' },
];

const ArticlesScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={articles}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ArticleDetail', { articleId: item.id })}
                        style={styles.article}
                    >
                        <Text style={styles.title}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    article: { padding: 10, borderBottomWidth: 1, borderColor: '#ccc' },
    title: { fontSize: 18, fontWeight: 'bold' },
});

export default ArticlesScreen;
