import { Text, View } from 'react-native';
import { styles } from '../styles/AppStyles';

interface AboutProps {
  isDark: boolean;
}

export default function About({ isDark }: AboutProps) {
  return (
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
  );
}