import './App.css';
import { Container } from 'react-bootstrap'
import {Envelope, Github, Linkedin} from 'react-bootstrap-icons'


function App() {
  return (
    <Container className='App'>
      <div className="section">
        <div style={{ marginRight: "5rem" }}>
          <img className="profile-img" style={{ width: "15rem", borderRadius: "50%" }} src="https://media-exp1.licdn.com/dms/image/C4E03AQFLOWQWQWD4lQ/profile-displayphoto-shrink_100_100/0/1656026660033?e=1668643200&v=beta&t=u8ZyCZGfawhBWt8xmBCxUiqr-r8vW_1VXwopj1xko3I" alt="profile pic" />
          <h1 style={{ color: "white", marginTop: "0", textDecoration:"underline" }}>Samreen Saba</h1>
        </div>
        <div style={{ marginTop: "3rem" }}>
          <h2 style={{ color: "white" }}>ABOUT</h2>
          <p>MSc Computer Science graduate and adept front-end developer focusing on HTML, CSS, JavaScript, ReactJS, TypeScript and implementing responsive web applications with a proven ability to collaborate effectively with senior developers while spending extra time to be mentored.</p>
        </div>
      </div>
      <div style={{marginLeft:"10rem", textAlign:"center"}}>
        <h2>SKILLS</h2>
        <div>
          <img className='skill-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8R-uRdD8kpY71pM7TyCd9yUEpEbN03VFa34Zcfiw&s" alt='HTML' />
          <img className='skill-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt='CSS' />
          <img className='skill-img' src="https://quintagroup.com/cms/js/js-image/javascript-logo.png/@@images/8c64c4b9-4e1c-4c26-9b5e-78d85e3130a9.png" alt='JS' />
          <img className='skill-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt='React JS' />
          <img className='skill-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png" alt='Boostrap' />
          <img className='skill-img' src="https://miro.medium.com/max/375/1*qsMH3spHzOErEBvK0-fKWw@2x.jpeg" alt='ES6' />
          <img className='skill-img' src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png" alt='ES6' />
        </div>
      </div>
      <div>
        <h2>Contact</h2>
        <div className="social">
          <div><Linkedin size={35}/></div>
          <div>https://www.linkedin.com/in/samreen-saba-3a50741a4/</div>
        </div>
        <div className="social">
          <div><Github size={35}/></div>
          <div> https://github.com/Samreensaba</div>
        </div>
        <div className="social">
          <div><Envelope size={35}/></div>
          <div> samren_saba@yahoo.com</div>
        </div>
      </div>
    </Container>
  );
}

export default App;
