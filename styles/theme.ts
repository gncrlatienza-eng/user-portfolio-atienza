// styles/theme.ts
// Theme colors for light and dark mode
interface ThemeColors {
  container: string;
  section: string;
  title: string;
  text: string;
  skill: string;
  skillText: string;
  projectTitle: string;
  projectText: string;
  contact: string;
  contactText: string;
}

interface Theme {
  light: ThemeColors;
  dark: ThemeColors;
}

export const theme: Theme = {
  light: {
    container: '#f5f5f5',
    section: '#ffffff',
    title: '#333',
    text: '#666',
    skill: '#f0f0f0',
    skillText: '#333',
    projectTitle: '#333',
    projectText: '#666',
    contact: '#f9f9f9',
    contactText: '#333',
  },
  dark: {
    container: '#1a1a1a',
    section: '#2d2d2d',
    title: '#ffffff',
    text: '#cccccc',
    skill: '#3d3d3d',
    skillText: '#ffffff',
    projectTitle: '#ffffff',
    projectText: '#cccccc',
    contact: '#3d3d3d',
    contactText: '#ffffff',
  },
};

// Helper function to get dynamic styles
export const getThemedStyles = (isDarkMode: boolean) => {
  const colors = isDarkMode ? theme.dark : theme.light;
  
  return {
    container: { backgroundColor: colors.container },
    section: { backgroundColor: colors.section },
    title: { color: colors.title },
    text: { color: colors.text },
    skill: { backgroundColor: colors.skill },
    skillText: { color: colors.skillText },
    projectTitle: { color: colors.projectTitle },
    projectText: { color: colors.projectText },
    contact: { backgroundColor: colors.contact },
    contactText: { color: colors.contactText },
  };
};