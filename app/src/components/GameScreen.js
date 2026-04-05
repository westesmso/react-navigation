import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function GameScreen({ title, subtitle, palette, paragraphs, mechanics, imageUri, imagePosition }) {
  const x = imagePosition?.x ?? 0;
  const y = imagePosition?.y ?? 0;
  const scale = imagePosition?.scale ?? 1;

  return (
    <ScrollView style={[styles.screen, { backgroundColor: palette.background }]} contentContainerStyle={styles.content}>
      <Text style={[styles.title, { color: palette.title }]}>{title}</Text>
      <Text style={[styles.subtitle, { color: palette.subtitle }]}>{subtitle}</Text>

      <View style={[styles.imagePlaceholder, { backgroundColor: palette.imageBg, borderColor: palette.border }]}>
        <View style={styles.imageFrame}>
          <Image
            source={{ uri: imageUri }}
            style={[
              styles.image,
              {
                transform: [
                  { translateX: x },
                  { translateY: y },
                  { scale },
                ],
              },
            ]}
            resizeMode="cover"
          />
        </View>
      </View>

      <View style={[styles.descriptionBox, { backgroundColor: palette.card, borderColor: palette.border }]}>
        <Text style={[styles.sectionTitle, { color: palette.title }]}>Descricao</Text>
        {paragraphs.map((paragraph, index) => (
          <Text key={index} style={[styles.paragraph, { color: palette.text }]}> 
            {paragraph}
          </Text>
        ))}
      </View>

      <View style={[styles.mechanicsBox, { backgroundColor: palette.card, borderColor: palette.border }]}>
        <Text style={[styles.sectionTitle, { color: palette.title }]}>Mecanicas diferenciais</Text>
        {mechanics.map((item, index) => (
          <Text key={index} style={[styles.listItem, { color: palette.text }]}>- {item}</Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
    gap: 14,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  imagePlaceholder: {
    minHeight: 250,
    borderWidth: 2,
    borderRadius: 14,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    gap: 10,
  },
  imageFrame: {
    width: '100%',
    height: 400,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
  },
  imageText: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  descriptionBox: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 16,
    gap: 10,
  },
  mechanicsBox: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 16,
    gap: 8,
  },
  sectionTitle: {
    fontSize: 21,
    fontWeight: '800',
    marginBottom: 2,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
  },
  listItem: {
    fontSize: 16,
    lineHeight: 24,
  },
});
