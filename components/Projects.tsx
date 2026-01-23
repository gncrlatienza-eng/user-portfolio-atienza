import { Image, ScrollView, Text, View } from 'react-native';
import { styles } from '../styles/AppStyles';

interface ProjectsProps {
  isDark: boolean;
}

interface Project {
  title: string;
  description: string;
  image: string;
}

export default function Projects({ isDark }: ProjectsProps) {
  const projects: Project[] = [
    {
      title: 'Cine-Ease',
      description: 'A modern cinema booking system with real-time seat selection and payment integration.',
      image: 'https://res.cloudinary.com/dt73x7u5k/image/upload/v1769103536/Screenshot_2025-10-23_085056_zlicse.png'
    },
    {
      title: 'The Sentinel',
      description: 'UI/UX: A system that helps farmer to search and identify for particular pest and disease affecting their crops.',
      image: 'https://res.cloudinary.com/dt73x7u5k/image/upload/v1769153272/Screenshot_2026-01-23_152741_ae0bxz.png'
    },
    {
      title: "Let's Budget",
      description: 'UI/UX: An intuitive budgeting app to help users manage their finances effectively.',
      image: 'https://res.cloudinary.com/dt73x7u5k/image/upload/v1769153619/LetsBudget_shz1by.png'
    },
    {
      title: 'Smart Vault',
      description: 'UI/UX: A secure IOT-based vault system with remote access and monitoring features.',
      image: 'https://res.cloudinary.com/dt73x7u5k/image/upload/v1769153911/Screenshot_2026-01-23_153740_coxe8f.png'
    },
    {
      title: 'Go Fast',
      description: 'UI/UX: A navigation based system designed to identify the fastest route to a destination.',
      image: 'https://res.cloudinary.com/dt73x7u5k/image/upload/v1769154152/Screenshot_2026-01-23_154213_hdiiqs.png'
    },
    {
      title: 'Wel-bi',
      description: 'Track your daily mood and well-being with insightful analytics and personalized recommendations.',
      image: 'https://res.cloudinary.com/dt73x7u5k/image/upload/v1769105318/Screenshot_2026-01-23_020813_tg7lu8.png'
    }
  ];

  return (
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
        {projects.map((project, i) => (
          <View key={i} style={[styles.project, !isDark && styles.projectLight]}>
            <Image
              source={{ uri: project.image }}
              style={styles.projectImage}
            />
            <View style={styles.projectContent}>
              <Text style={[styles.projectTitle, !isDark && styles.projectTitleLight]}>
                {project.title}
              </Text>
              <Text style={[styles.projectText, !isDark && styles.projectTextLight]}>
                {project.description}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}