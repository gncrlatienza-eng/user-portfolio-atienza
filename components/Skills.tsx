import { Text, View } from 'react-native';
import { styles } from '../styles/AppStyles';

interface SkillsProps {
  isDark: boolean;
}

export default function Skills({ isDark }: SkillsProps) {
  const skills: string[] = [
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
  );
}