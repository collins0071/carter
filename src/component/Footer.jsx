import React from 'react'

const Footer = () => {
  return (
    <div style={styles.footer}>
        <div style={styles.container}>
    <div style={styles.brand}>
      <h2>Zara</h2>
     <p>London, United Kingdom · +44 800 368 4990</p>
     <p>Open ⋅ Closes 9:30 pm</p>
     <p>In-store shopping·</p>
     <p>In-store pick-up</p>
    </div>

    <div style={styles.links}>
      <ul style={styles.linkers}>
        <li><a href="/" className='a' style={{color: 'white'}}>Home</a></li>
        <li><a href="/about" style={{color: 'white'}}>About Us</a></li>
        <li><a href="/contact"style={{color: 'white'}}>Contact Us</a></li>
      </ul>
    </div>

    <div style={styles.social}>
      <p>Follow Us:</p>
      <div style={styles.socialIcons}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img 
          style={{width: 50, height: 40}}
          src="/fbloo.png" alt="Facebook" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img 
          style={{width: 50, height: 50}}
          src="/twitt.png" alt="Twitter" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img 
          style={{width: 30, height: 30}}
          src="/insta.png" alt="Instagram" />
        </a>
      </div>
    </div>
  </div>
    </div>
  )
}


const styles = {
    footer: {
      backgroundColor: '#c0c0c0',
      color: '#fff',
      padding: '20px 0',
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    brand: {
      flex: 1,
    },
    links: {
      flex: 1,
      textAlign: 'center',
    },
    linkers: {
        listStyle: 'none',
    },
    social: {
      flex: 1,
      textAlign: 'right',
    },
    socialIcons: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
  };
export default Footer