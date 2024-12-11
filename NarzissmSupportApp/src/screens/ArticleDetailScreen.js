import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ArticleDetailScreen = ({ route }) => {
    const { articleId } = route.params;

    // Beispiel: Dummy-Daten für Artikel
    const article = {
        id: '1',
        title: 'Was ist Gaslighting?',
        content: 'Gaslighting ist eine Form der psychologischen Manipulation...',
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{article.title}</Text>
            <Text style={styles.content}>{article.content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
    content: { fontSize: 16, lineHeight: 24 },
});

export default ArticleDetailScreen;
