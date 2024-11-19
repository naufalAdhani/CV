import React from 'react';
import { FaWhatsapp, FaInstagram, FaEnvelope, FaCode, FaDatabase, FaReact } from 'react-icons/fa';

const Contact = () => {
  return (
    <div style={styles.container}>
      {/* Card: My Skills */}
      <div style={styles.card}>
        <h2 style={styles.cardHeading}>My Skills</h2>
        <ul style={styles.skillList}>
          <li style={styles.skillItem}>
            <div style={styles.skillBox}>
              <FaCode style={{ ...styles.skillIcon, color: '#007BFF' }} /> {/* Biru untuk Web Development */}
              <span>Web Development</span>
            </div>
          </li>
          <li style={styles.skillItem}>
            <div style={styles.skillBox}>
              <FaDatabase style={{ ...styles.skillIcon, color: '#FFC107' }} /> {/* Kuning untuk Database */}
              <span>Database Management</span>
            </div>
          </li>
          <li style={styles.skillItem}>
            <div style={styles.skillBox}>
              <FaReact style={{ ...styles.skillIcon, color: '#61DAFB' }} /> {/* Biru React untuk React.js */}
              <span>React.js</span>
            </div>
          </li>
        </ul>
      </div>

      {/* Card: Contact Me */}
      <div style={styles.card}>
        <h2 style={styles.cardHeading}>Contact Me</h2>
        <div style={styles.contactList}>
          <div style={styles.contactBox}>
            <FaWhatsapp style={{ ...styles.contactIcon, color: '#25D366' }} /> {/* Hijau WhatsApp */}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.contactLink}
            >
              WhatsApp
            </a>
          </div>
          <div style={styles.contactBox}>
            <FaInstagram style={{ ...styles.contactIcon, color: '#E1306C' }} /> {/* Pink Instagram */}
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.contactLink}
            >
              Instagram
            </a>
          </div>
          <div style={styles.contactBox}>
            <FaEnvelope style={{ ...styles.contactIcon, color: '#FF5722' }} /> {/* Oranye untuk Email */}
            <a
              href="mailto:yourname@example.com"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.contactLink}
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '30px',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    border: '2px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '80%',
    maxWidth: '600px',
    textAlign: 'center',
  },
  cardHeading: {
    fontSize: '1.8rem',
    marginBottom: '20px',
    color: '#333',
  },
  skillList: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  skillItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  skillBox: {
    border: '2px solid #ccc',
    borderRadius: '10px',
    padding: '15px',
    textAlign: 'center',
    width: '150px',
    height: '150px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  skillIcon: {
    fontSize: '2rem',
    marginBottom: '10px',
  },
  contactList: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  contactBox: {
    border: '2px solid #ccc',
    borderRadius: '10px',
    padding: '15px',
    textAlign: 'center',
    width: '150px',
    height: '150px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  contactIcon: {
    fontSize: '2rem',
    marginBottom: '10px',
  },
  contactLink: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
};

export default Contact;
