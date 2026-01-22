import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A cool mobile app',
      tech: 'React Native, Expo'
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'Another awesome project',
      tech: 'React Native, Firebase'
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>Your Name</Text>
        <Text style={styles.title}>Mobile Developer</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.text}>
          Passionate mobile developer with experience in React Native and Expo...
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projects</Text>
        {projects.map(project => (
          <View key={project.id} style={styles.projectCard}>
            <Text style={styles.projectTitle}>{project.title}</Text>
            <Text style={styles.projectDesc}>{project.description}</Text>
            <Text style={styles.projectTech}>{project.tech}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact</Text>
        <TouchableOpacity onPress={() => Linking.openURL('mailto:your@email.com')}>
          <Text style={styles.link}>your@email.com</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#2196F3',
    padding: 40,
    paddingTop: 60,
    alignItems: 'center',
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    color: 'white',
    opacity: 0.9,
  },
  section: {
    padding: 20,
    backgroundColor: 'white',
    marginVertical: 8,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  text: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  projectCard: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  projectDesc: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  projectTech: {
    fontSize: 12,
    color: '#2196F3',
    fontStyle: 'italic',
  },
  link: {
    fontSize: 16,
    color: '#2196F3',
    textDecorationLine: 'underline',
  },
});