import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/AppStyles';

interface HeroProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

export default function Hero({ isDark, setIsDark }: HeroProps) {
  return (
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
  );
}