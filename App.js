
import { Image, Linking, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles/AppStyles'; // Import styles from your styles folder

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        <Image
          source={{ uri: 'https://res.cloudinary.com/dt73x7u5k/image/upload/v1769067439/profile-1_av4yxf.jpg' }}
          style={styles.heroImage}
        />
        <View style={styles.heroOverlay}>
          <Text style={styles.badge}>My Portfolio</Text>
          <View style={styles.heroInfo}>
            <Text style={styles.name}>Gian Carlo Atienza</Text>
            <Text style={styles.info}>Age: 21</Text>
            <Text style={styles.info}>494, Pag-asa St. Tiaong Quezon, PH</Text>
          </View>
        </View>
      </View>

      {/* ========== ABOUT SECTION ========== */}
      <View style={styles.section}>
        <Text style={styles.title}>About Me</Text>
        <Text style={styles.text}>
          I am a student a Computer Science Student in De La Salle Lipa, ready to learn new things and open for challenges.
        </Text>
      </View>

      {/* ========== SKILLS SECTION ========== */}
      <View style={styles.section}>
        <Text style={styles.title}>Skills</Text>

        {['React Native', 'Expo', 'JavaScript', 'UI/UX Design', 'Phyton', 'C++', 'Vite-React'].map((skill, i) => (
          <View key={i} style={styles.skill}>
            <Text style={styles.skillText}>{skill}</Text>
          </View>
        ))}
      </View>

      {/* ========== PROJECTS SECTION ========== */}
      <View style={styles.section}>
        <Text style={styles.title}>Projects</Text>

        <View style={styles.project}>
          <Image
            source={{ uri: '' }}
            style={styles.projectImage}
          />
          <Text style={styles.projectTitle}>Cine-Ease</Text>
          <Text style={styles.projectText}>Cinema Booking System</Text>
        </View>

        <View style={styles.project}>
          <Image
            source={{ uri: '' }}
            style={styles.projectImage}
          />
          <Text style={styles.projectTitle}>Wel-bi</Text>
          <Text style={styles.projectText}>Tracks Mood and Well-being</Text>
        </View>
      </View>

      {/* ========== CONTACT SECTION ========== */}
      <View style={styles.section}>
        <Text style={styles.title}>Contact</Text>

        <TouchableOpacity
          style={styles.contact}
          onPress={() => Linking.openURL('https://github.com/gncrlatienza-eng')}
        >
        <Text style={styles.contactIcon}>✉️</Text>
        <Text style={styles.contactText}>gncrlatienza@gmail.com</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.contact}
          onPress={() => Linking.openURL('https://github.com/gncrlatienza-eng')}
        >
          <Text style={styles.contactIcon}>💻</Text>
          <Text style={styles.contactText}>GitHub Profile</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}
