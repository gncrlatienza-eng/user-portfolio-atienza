// styles/AppStyles.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  
  // Main container
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
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
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 25,
    alignSelf: 'center',
    overflow: 'hidden',
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

  // ===== STATS SECTION =====
  statsContainer: {
    flexDirection: 'row',
    margin: 16,
    marginTop: -40,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.8)',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
  },
  statNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 13,
    color: '#6a6a6a',
    fontWeight: '600',
    textAlign: 'center',
  },

  // ===== SECTION STYLES =====
  section: {
    marginHorizontal: 16,
    marginBottom: 24,
  },
  sectionCard: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.8)',
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
    color: '#1a1a1a',
    letterSpacing: -0.5,
  },
  seeAll: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
  },
  text: {
    fontSize: 17,
    color: '#4a4a4a',
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
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.6)',
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
    color: '#1a1a1a',
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
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.9)',
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
    color: '#1a1a1a',
    marginBottom: 6,
    letterSpacing: -0.3,
  },
  projectText: {
    fontSize: 15,
    color: '#6a6a6a',
    lineHeight: 22,
  },

  // ===== CONTACT STYLES =====
  contactGrid: {
    gap: 12,
  },
  contact: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.6)',
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
    color: '#1a1a1a',
    fontWeight: '600',
  },

  // Spacing
  spacer: {
    height: 40,
  },
});