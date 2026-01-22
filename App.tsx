import { Image, Linking, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles/AppStyles';

export default function App() {
  const skills = [
    'React Native',
    'Vite React',
    'Phython',
    'C++',
    'JavaScript',
    'UI/UX Design',
    'TypeScript',
    'Docker',
    'Git & GitHub',
    'Figma',
  ];

  return (
    <ScrollView style={styles.container}>
      {/* ========== HERO SECTION ========== */}
      <View style={styles.hero}>
        <Image
          source={{ uri: 'https://res.cloudinary.com/dt73x7u5k/image/upload/v1769067439/profile-1_av4yxf.jpg' }}
          style={styles.heroImage}
        />
        <View style={styles.heroOverlay}>
          <Text style={styles.badge}>My Portfolio</Text>
          <View style={styles.heroInfo}>
            <Text style={styles.name}>Gian Carlo Atienza</Text>
            <Text style={styles.info}>Age, 21</Text>
            <Text style={styles.info}>494, Pag-asa St. Tiaong Quezon</Text>
          </View>
        </View>
      </View>

      {/* ========== ABOUT SECTION ========== */}
      <View style={styles.section}>
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <Text style={styles.title}>About Me </Text>
          </View>
          <Text style={styles.text}>
            I am a Computer Science Student at De La Salle Lipa, passionate about mobile development.
            Ready to learn new things and open for challenges that push my boundaries.

            Education
          </Text>
        </View>
      </View>

      {/* ========== SKILLS SECTION (2-Column Grid, No Icons) ========== */}
      <View style={styles.section}>
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <Text style={styles.title}>Skills</Text>
          </View>
          <View style={styles.skillsGrid}>
            {skills.map((skill, i) => (
              <View key={i} style={styles.skill}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* ========== PROJECTS SECTION (Horizontal Scroll) ========== */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.title}>Projects</Text>
          <Text style={styles.seeAll}>See All →</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.projectsScroll}
        >
          <View style={styles.project}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/dt73x7u5k/image/upload/v1769103536/Screenshot_2025-10-23_085056_zlicse.png' }}
              style={styles.projectImage}
            />
            <View style={styles.projectContent}>
              <Text style={styles.projectTitle}>Cine-Ease</Text>
              <Text style={styles.projectText}>
                A modern cinema booking system with real-time seat selection and payment integration.
              </Text>
            </View>
          </View>

          <View style={styles.project}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/dt73x7u5k/image/upload/v1769105318/Screenshot_2026-01-23_020813_tg7lu8.png' }}
              style={styles.projectImage}
            />
            <View style={styles.projectContent}>
              <Text style={styles.projectTitle}>Wel-bi</Text>
              <Text style={styles.projectText}>
                Track your daily mood and well-being with insightful analytics and personalized recommendations.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* ========== CONTACT SECTION ========== */}
      <View style={styles.section}>
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <Text style={styles.title}>Get in Touch</Text>
          </View>
          <View style={styles.contactGrid}>
            <TouchableOpacity
              style={styles.contact}
              onPress={() => Linking.openURL('mailto:gncrlatienza@gmail.com')}
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
        </View>
      </View>

      <View style={styles.spacer} />

    </ScrollView>
  );
}