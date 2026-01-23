import { Linking, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/AppStyles';

interface ContactProps {
  isDark: boolean;
}

export default function Contact({ isDark }: ContactProps) {
  return (
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
            <Text style={[styles.contactText, !isDark && styles.contactTextLight]}>
              gncrlatienza@gmail.com
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.contact, !isDark && styles.contactLight]}
            onPress={() => Linking.openURL('https://github.com/gncrlatienza-eng')}
          >
            <Text style={styles.contactIcon}>💻</Text>
            <Text style={[styles.contactText, !isDark && styles.contactTextLight]}>
              GitHub Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}