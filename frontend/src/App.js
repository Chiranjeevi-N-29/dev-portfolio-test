import React, { useState, useEffect } from 'react';

function App() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch('/api/profile')
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  if (!profile) return <div style={styles.loading}>Loading Portfolio...</div>;

  return (
    <div style={styles.container}>
      {/* --- HERO SECTION --- */}
      <header style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.name}>{profile.name}</h1>
          <h2 style={styles.role}>{profile.role}</h2>
          <p style={styles.tagline}>"{profile.tagline}"</p>
          <div style={styles.heroButtons}>
            <a href="#projects" style={styles.primaryBtn}>View My Work</a>
            <a href="#contact" style={styles.secondaryBtn}>Contact Me</a>
          </div>
        </div>
      </header>

      {/* --- ABOUT SECTION --- */}
      <section id="about" style={styles.section}>
        <h2 style={styles.sectionHeading}>About Me</h2>
        <p style={styles.bio}>{profile.bio}</p>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" style={styles.section}>
        <h2 style={styles.sectionHeading}>Technical Skills</h2>
        <div style={styles.skillsGrid}>
          {Object.entries(profile.skills).map(([category, items]) => (
            <div key={category} style={styles.skillCategory}>
              <h3 style={styles.skillTitle}>{category}</h3>
              <div style={styles.skillList}>
                {items.map(skill => (
                  <span key={skill} style={styles.skillBadge}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" style={styles.section}>
        <h2 style={styles.sectionHeading}>Featured Projects</h2>
        <div style={styles.projectGrid}>
          {profile.projects.map((project, index) => (
            <div key={index} style={styles.projectCard}>
              <h3 style={styles.projectTitle}>{project.title}</h3>
              <p style={styles.projectDesc}>{project.desc}</p>
              <p style={styles.projectTech}><strong>Tech:</strong> {project.tech}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" style={styles.section}>
        <h2 style={styles.sectionHeading}>Get In Touch</h2>
        <div style={styles.contactLinks}>
          <p>Email: <a href={`mailto:${profile.email}`} style={styles.link}>{profile.email}</a></p>
          <div style={styles.socialRow}>
            <a href={profile.github} target="_blank" rel="noreferrer" style={styles.link}>GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" style={styles.link}>LinkedIn</a>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} {profile.name}. Built with React, Spring Boot, & DevOps Magic.</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Inter', -apple-system, sans-serif",
    backgroundColor: '#0f172a', // Deep Navy
    color: '#e2e8f0',
    minHeight: '100vh',
    scrollBehavior: 'smooth'
  },
  hero: {
    height: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
    textAlign: 'center',
    padding: '0 20px'
  },
  heroContent: { maxWidth: '800px' },
  name: { fontSize: '4.5rem', margin: '0', color: '#38bdf8', fontWeight: '800' },
  role: { fontSize: '2rem', color: '#94a3b8', marginTop: '10px' },
  tagline: { fontSize: '1.2rem', fontStyle: 'italic', color: '#64748b', margin: '20px 0' },
  heroButtons: { display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '30px' },
  primaryBtn: { backgroundColor: '#38bdf8', color: '#0f172a', padding: '12px 25px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' },
  secondaryBtn: { border: '2px solid #38bdf8', color: '#38bdf8', padding: '10px 25px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' },
  
  section: {
    maxWidth: '1000px',
    margin: '80px auto',
    padding: '0 20px',
  },
  sectionHeading: { fontSize: '2.5rem', borderBottom: '3px solid #38bdf8', paddingBottom: '10px', marginBottom: '30px', display: 'inline-block' },
  bio: { fontSize: '1.25rem', lineHeight: '1.7', color: '#94a3b8' },
  
  skillsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' },
  skillCategory: { backgroundColor: '#1e293b', padding: '20px', borderRadius: '12px', border: '1px solid #334155' },
  skillTitle: { marginTop: '0', color: '#38bdf8' },
  skillList: { display: 'flex', flexWrap: 'wrap', gap: '10px' },
  skillBadge: { backgroundColor: '#0f172a', color: '#38bdf8', padding: '5px 12px', borderRadius: '6px', fontSize: '0.9rem', border: '1px solid #38bdf8' },
  
  projectGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' },
  projectCard: { backgroundColor: '#1e293b', padding: '25px', borderRadius: '15px', transition: 'transform 0.2s', border: '1px solid #334155' },
  projectTitle: { color: '#38bdf8', marginTop: '0' },
  projectDesc: { color: '#94a3b8', lineHeight: '1.5' },
  projectTech: { fontSize: '0.9rem', color: '#64748b' },
  
  contactLinks: { textAlign: 'center', backgroundColor: '#1e293b', padding: '40px', borderRadius: '20px' },
  socialRow: { display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '20px' },
  link: { color: '#38bdf8', textDecoration: 'none', fontSize: '1.2rem' },
  
  footer: { textAlign: 'center', padding: '40px', color: '#475569', borderTop: '1px solid #1e293b' },
  loading: { height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#0f172a', color: '#38bdf8', fontSize: '2rem' }
};

export default App;
