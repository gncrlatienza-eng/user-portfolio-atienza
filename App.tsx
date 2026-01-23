import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { styles } from './styles/AppStyles';

// Import components
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <ScrollView style={[styles.container, !isDark && styles.containerLight]}>
      <Hero isDark={isDark} setIsDark={setIsDark} />
      <About isDark={isDark} />
      <Skills isDark={isDark} />
      <Projects isDark={isDark} />
      <Contact isDark={isDark} />
      <View style={styles.spacer} />
    </ScrollView>
  );
}