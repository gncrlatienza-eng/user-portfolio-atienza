import { useState } from 'react';
import { Image, Linking, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles/AppStyles';

export default function App() {
  const [isDark, setIsDark] = useState(false);

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
    <ScrollView style={[styles.container, !isDark && styles.containerLight]}>
      {/* HERO SECTION */}
      <View style={styles.hero}>
        <Image
          source={{ uri: 'https://res.cloudinary.com/dt73x7u5k/image/upload/v1769067439/profile-1_av4yxf.jpg' }}
          style={styles.heroImage}
        />
        <View style={styles.heroOverlay}>
          <View style={styles.badgeRow}>
            <Text style={styles.badge}>My Portfolio</Text>
            <TouchableOpacity
              style={[styles.toggleSwitch, isDark && styles.toggleSwitchDark]}
              onPress={() => setIsDark(!isDark)}
            >
              <View style={[styles.toggleThumb, isDark && styles.toggleThumbDark]}>
                <Text style={styles.toggleIcon}>{isDark ? '🌙' : '☀️'}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.heroInfo}>
            <Text style={styles.name}>Gian Carlo Atienza</Text>
            <Text style={styles.info}>Age, 21</Text>
            <Text style={styles.info}>Bio: Trust Your Gut Feeling</Text>
          </View>
        </View>
      </View>

      {/* ABOUT SECTION */}
      <View style={styles.section}>
        <View style={[styles.sectionCard, !isDark && styles.sectionCardLight]}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.title, !isDark && styles.titleLight]}>About Me </Text>
          </View>
          <Text style={[styles.text, !isDark && styles.textLight]}>
            I am a 3rd-year Computer Science Student at De La Salle Lipa with a
            passion for mobile development. Currently focusing on React Native,
            I aspire to bridge the gap between clean code and intuitive user
            experiences. I am an aspiring UI/UX Designer eager to tackle
            challenges that allow me to merge technical logic with creative
            design. Ready to learn new things and open for challenges that push
            my boundaries.
          </Text>
        </View>
      </View>

      {/* SKILLS SECTION */}
      <View style={styles.section}>
        <View style={[styles.sectionCard, !isDark && styles.sectionCardLight]}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.title, !isDark && styles.titleLight]}>Skills</Text>
          </View>
          <View style={styles.skillsGrid}>
            {skills.map((skill, i) => (
              <View key={i} style={[styles.skill, !isDark && styles.skillLight]}>
                <Text style={[styles.skillText, !isDark && styles.skillTextLight]}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* PROJECTS SECTION */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={[styles.title, !isDark && styles.titleLight]}>Projects</Text>
          <Text style={[styles.seeAll, !isDark && styles.seeAllLight]}>See All →</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.projectsScroll}
        >
          <View style={[styles.project, !isDark && styles.projectLight]}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/dt73x7u5k/image/upload/v1769103536/Screenshot_2025-10-23_085056_zlicse.png' }}
              style={styles.projectImage}
            />
            <View style={styles.projectContent}>
              <Text style={[styles.projectTitle, !isDark && styles.projectTitleLight]}>Cine-Ease</Text>
              <Text style={[styles.projectText, !isDark && styles.projectTextLight]}>
                A modern cinema booking system with real-time seat selection and payment integration.
              </Text>
            </View>
          </View>

          <View style={[styles.project, !isDark && styles.projectLight]}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/dt73x7u5k/image/upload/v1769153272/Screenshot_2026-01-23_152741_ae0bxz.png' }}
              style={styles.projectImage}
            />
            <View style={styles.projectContent}>
              <Text style={[styles.projectTitle, !isDark && styles.projectTitleLight]}>The Sentinel</Text>
              <Text style={[styles.projectText, !isDark && styles.projectTextLight]}>
                UI/UX: A system that helps farmer to search and identify for particular pest and disease affecting their crops.
              </Text>
            </View>
          </View>

          <View style={[styles.project, !isDark && styles.projectLight]}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/dt73x7u5k/image/upload/v1769153619/LetsBudget_shz1by.png' }}
              style={styles.projectImage}
            />
            <View style={styles.projectContent}>
              <Text style={[styles.projectTitle, !isDark && styles.projectTitleLight]}>Let's Budget</Text>
              <Text style={[styles.projectText, !isDark && styles.projectTextLight]}>
                UI/UX: An intuitive budgeting app to help users manage their finances effectively.
              </Text>
            </View>
          </View>

          <View style={[styles.project, !isDark && styles.projectLight]}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/dt73x7u5k/image/upload/v1769153911/Screenshot_2026-01-23_153740_coxe8f.png' }}
              style={styles.projectImage}
            />
            <View style={styles.projectContent}>
              <Text style={[styles.projectTitle, !isDark && styles.projectTitleLight]}>Smart Vault</Text>
              <Text style={[styles.projectText, !isDark && styles.projectTextLight]}>
                UI/UX: A secure IOT-based vault system with remote access and monitoring features.
              </Text>
            </View>
          </View>

          <View style={[styles.project, !isDark && styles.projectLight]}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/dt73x7u5k/image/upload/v1769154152/Screenshot_2026-01-23_154213_hdiiqs.png' }}
              style={styles.projectImage}
            />
            <View style={styles.projectContent}>
              <Text style={[styles.projectTitle, !isDark && styles.projectTitleLight]}>Go Fast</Text>
              <Text style={[styles.projectText, !isDark && styles.projectTextLight]}>
                UI/UX: A navigation based system designed to identify the fastest route to a destination.
              </Text>
            </View>
          </View>

          <View style={[styles.project, !isDark && styles.projectLight]}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/dt73x7u5k/image/upload/v1769105318/Screenshot_2026-01-23_020813_tg7lu8.png' }}
              style={styles.projectImage}
            />
            <View style={styles.projectContent}>
              <Text style={[styles.projectTitle, !isDark && styles.projectTitleLight]}>Wel-bi</Text>
              <Text style={[styles.projectText, !isDark && styles.projectTextLight]}>
                Track your daily mood and well-being with insightful analytics and personalized recommendations.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* CONTACT SECTION */}
      <View style={styles.section}>
        <View style={[styles.sectionCard, !isDark && styles.sectionCardLight]}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.title, !isDark && styles.titleLight]}>Get in Touch</Text>
          </View>
          <View style={styles.contactGrid}>
            <TouchableOpacity
              style={[styles.contact, !isDark && styles.contactLight]}
              onPress={() => Linking.openURL('mailto:gncrlatienza@gmail.com')}
            >
              <Text style={styles.contactIcon}>✉️</Text>
              <Text style={[styles.contactText, !isDark && styles.contactTextLight]}>gncrlatienza@gmail.com</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.contact, !isDark && styles.contactLight]}
              onPress={() => Linking.openURL('https://github.com/gncrlatienza-eng')}
            >
              <Text style={styles.contactIcon}>💻</Text>
              <Text style={[styles.contactText, !isDark && styles.contactTextLight]}>GitHub Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.spacer} />

    </ScrollView>
  );
}