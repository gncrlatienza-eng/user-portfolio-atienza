// styles/AppStyles.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  
  // Main container
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },

  // ===== HERO STYLES =====
  hero: {
    height: 900,
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
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 60,
  },
  badge: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 25,
    overflow: 'hidden',
    alignSelf: 'center'
  },
  heroInfo: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    padding: 28,
    borderRadius: 20,
    overflow: 'hidden',
  },
  name: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 12,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
  info: {
    fontSize: 17,
    color: 'white',
    marginBottom: 6,
    opacity: 0.95,
  },

  // ===== SECTION STYLES =====
  section: {
    marginHorizontal: 16,
    marginBottom: 24,
    marginTop: 24,
  },
  sectionCard: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.8',
    padding: 24,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    overflow: 'hidden',
    
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: 'white',
    letterSpacing: -0.5,
  },
  seeAll: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
  text: {
    fontSize: 17,
    color: 'white',
    lineHeight: 26,
    fontWeight: '400',
  },

  // ===== SKILL STYLES (2-Column Grid) =====
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'space-between',
  },
  skill: {
    width: '48%',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    padding: 16,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    overflow: 'hidden',
    alignItems: 'center',
  },
  skillText: {
    fontSize: 15,
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
  },

  // ===== PROJECT STYLES (Horizontal Scroll) =====
  projectsScroll: {
    paddingLeft: 16,
  },
  project: {
    width: 300,
    marginRight: 16,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
  },
  projectImage: {
    width: '100%',
    height: 180,
  },
  projectContent: {
    padding: 18,
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
    marginBottom: 6,
    letterSpacing: -0.3,
  },
  projectText: {
    fontSize: 15,
    color: 'white',
    lineHeight: 22,
  },

  // ===== CONTACT STYLES =====
  contactGrid: {
    gap: 12,
  },
  contact: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    padding: 18,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    overflow: 'hidden',
  },
  contactIcon: {
    fontSize: 24,
    marginRight: 14,
  },
  contactText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },

  // Spacing
  spacer: {
    height: 40,
  },
});