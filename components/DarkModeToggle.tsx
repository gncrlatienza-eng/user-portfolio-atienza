import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface DarkModeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

export default function DarkModeToggle({ isDarkMode, onToggle }: DarkModeToggleProps) {
  return (
    <TouchableOpacity 
      style={styles.darkModeButton}
      onPress={onToggle}
    >
      <Text style={styles.darkModeIcon}>
        {isDarkMode ? '☀️' : '🌙'}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  darkModeButton: {
    backgroundColor: 'rgba(50,50,50,0.9)',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 20,
  },
  darkModeIcon: {
    fontSize: 20,
  },
});