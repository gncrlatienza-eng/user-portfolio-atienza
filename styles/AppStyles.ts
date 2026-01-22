// styles/AppStyles.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  
  // Main container (whole app background)
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  // ===== HERO STYLES =====
  hero: {
    height: 880,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 60,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  badge: {
    backgroundColor: 'rgba(50,50,50,0.9)',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    alignSelf: 'center',
  },
  heroInfo: {
    padding: 24,
    borderRadius: 12,
  },
  name: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 12,
  },
  info: {
    fontSize: 16,
    color: 'white',
    marginBottom: 6,
    opacity: 0.9,
  },

  // ===== SECTION STYLES =====
  section: {
    backgroundColor: 'white',
    margin: 16,
    padding: 20,
    borderRadius: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },

  // ===== SKILL STYLES =====
  skill: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  skillText: {
    fontSize: 16,
    color: '#333',
  },

  // ===== PROJECT STYLES =====
  project: {
    marginBottom: 20,
  },
  projectImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  projectText: {
    fontSize: 14,
    color: '#666',
  },

  // ===== CONTACT STYLES =====
  contact: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  contactIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  contactText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
});