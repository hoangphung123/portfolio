import Navbar from '../components/Navbar';
import DustBackground from '../components/DustBackground';
import './About.css';
import Logo1 from '../assets/Logo1.png'

const skills = [
  {
    title: 'Software & Website Development',
    desc: 'I specialize in developing dynamic, responsive, and secure web applications using modern technologies.',
    icons: [
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', alt: 'HTML5' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', alt: 'CSS3' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', alt: 'NodeJS' },
    ],
  },
  {
    title: 'UI/UX & Graphic Design',
    desc: 'I enjoy creating clean and user friendly interfaces, combining creativity and usability to deliver great user experiences.',
    icons: [
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg', alt: 'Photoshop' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg', alt: 'Adobe XD' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', alt: 'Figma' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg', alt: 'Canva' },
    ],
    tools: true,
  },
];

const educations = [
  {
    logo: Logo1,
    name: 'Southern Philippines Baptist Theological Seminary',
    level: 'High School Level',
    desc: "SFBTS is dedicated to teaching God's Word, equipping God's servants, and sending God's workers. My alma mater, a private educational institution located in Puerto Princesa City, was established through the inspiration and vision of a dedicated missionary who recognized the spiritual needs of the city's children of God.",
    year: '2015 - 2021',
  },
  {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/University_of_the_Immaculate_Conception_seal.png',
    name: 'University of the Immaculate Conception',
    level: 'Senior High School Level',
    desc: 'UIC has accepted the challenge to teach in humanities, science, engineering, and technology. It is known for its academic excellence and values formation. My time here was spent learning the value of service and the value of a Dominican society in service towards the ever-changing city children of God.',
    year: '2021 - 2023',
  },
  {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/University_of_Southeastern_Philippines_logo.png',
    name: 'University of Southeastern Philippines',
    level: 'College Level',
    desc: 'USEP is a premier university in the region, offering quality education and research. Here, I am pursuing my Bachelor of Science in Computer Science, focusing on software engineering and UI/UX design.',
    year: '2023 - Present',
  },
];

const socialIcons = [
  { href: '#', icon: 'fa fa-facebook' },
  { href: '#', icon: 'fa fa-github' },
  { href: '#', icon: 'fa fa-linkedin' },
  { href: '#', icon: 'fa fa-instagram' },
  { href: '#', icon: 'fa fa-twitter' },
];

const interests = [
  { icon: 'fa fa-code', label: 'Coding' },
  { icon: 'fa fa-paint-brush', label: 'Design' },
  { icon: 'fa fa-gamepad', label: 'Gaming' },
  { icon: 'fa fa-music', label: 'Music' },
  { icon: 'fa fa-book', label: 'Reading' },
];

const About = () => {
  return (
    <div className="app-container">
      <DustBackground />
      {/* <Navbar /> */}
      <div className="about-container">
        <aside className="about-sidebar">
          <h2>ABOUT ME</h2>
          <ul>
            <li className="active">Introduction</li>
            <li>Skills</li>
            <li>Education</li>
          </ul>
          <div className="about-social-icons">
            {socialIcons.map((s, i) => (
              <a href={s.href} key={i} target="_blank" rel="noopener noreferrer">
                <i className={s.icon}></i>
              </a>
            ))}
          </div>
        </aside>
        <section className="about-main scrollable">
          <div className="section-with-vertical-line">
            <div className="section-title-vertical">
              <span className="section-dot"></span>
              <span className="section-vertical-line"></span>
            </div>
            <div className="section-content">
              <div className="section-title-text">Introduction</div>
              <div className="about-intro-row">
                <div className="about-avatar-col">
                  <img className="about-avatar" src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" />
                </div>
                <div className="about-info-col">
                  <div className="about-intro-header">
                    <div className="about-intro-name">JHANUZ MATIDIOS.</div>
                    <div className="about-intro-role">Full-stack Developer, UI/UX Designer.</div>
                    <p className="about-desc">
                      An aspiring full stack developer passionate about creating innovative PRODUCTS, prioritizing security and efficiency. Passionate about front-end web development and UI/UX design, creating seamless digital experiences. CONTACT me to explore collaboration opportunities or learn more ABOUT ME.
                    </p>
                  </div>
                  <div className="about-details-row">
                    <div className="about-personal-details">
                      <div className="about-details-title">Personal Details</div>
                      <div><b>Age:</b> 20 years old</div>
                      <div><b>Birthday:</b> Jan 1, 2004</div>
                      <div><b>Email:</b> example@email.com</div>
                      <div><b>Address:</b> Philippines, Lopez Street</div>
                    </div>
                    <div className="about-interests-box">
                      <div className="about-details-title">Interests</div>
                      <div className="about-interests-list">
                        {interests.map((it, i) => (
                          <div className="interest-icon" key={i} title={it.label}>
                            <i className={it.icon}></i>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-with-vertical-line">
            <div className="section-title-vertical">
              <span className="section-dot"></span>
              <span className="section-vertical-line"></span>
            </div>
            <div className="section-content">
              <div className="section-title-text">Skills</div>
              <div className="skills-section">
                {skills.map((skill, idx) => (
                  <div className={`skill-box${skill.tools ? ' highlight' : ''}`} key={idx}>
                    <h4>{skill.title}</h4>
                    <p>{skill.desc}</p>
                    <div className="skill-icons">
                      {skill.icons.map((icon, i) => (
                        <img src={icon.src} alt={icon.alt} key={i} />
                      ))}
                    </div>
                    {skill.tools && <div className="tools-label">Tools I use</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="section-with-vertical-line">
            <div className="section-title-vertical">
              <span className="section-dot"></span>
              <span className="section-vertical-line"></span>
            </div>
            <div className="section-content">
              <div className="section-title-text">Education</div>
              <div className="education-section">
                {educations.map((edu, i) => (
                  <div className="edu-box" key={i}>
                    <div className="edu-logo">
                      <img src={edu.logo} alt="school" />
                    </div>
                    <div>
                      <div className="edu-title">{edu.name}</div>
                      <div className="edu-level">{edu.level}</div>
                      <div className="edu-desc">{edu.desc}</div>
                      <div className="edu-year">{edu.year}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* <div className="about-bg-number">02</div> */}
        </section>
      </div>
    </div>
  );
};

export default About; 