import classes from './About.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3,
  faSass,
  faPython,
  faJs,
  faReact,
  faGitAlt,
  faGithub,
  faNodeJs,
  faNpm,
} from '@fortawesome/free-brands-svg-icons';

import { faTerminal } from '@fortawesome/free-solid-svg-icons';

import portrait from '../../assets/Amelia_Portrait.jpg';

export default function About() {
  return (
    <section className={classes.aboutSection}>
      <div className={classes.content}>
        <div className={classes.text}>
          <h1>Hi, I'm Amelia</h1>
          <p>
            I'm a <strong>peppy self-confessed dork</strong> with a life-long love of learning.
            With 12 years in IT support and a background that weaves through tech, sustainability, and communication — 
            I've recently shifted gears into full-stack development.
          </p>

          <p>
            My professional journey has spanned customer service, green IT initiatives, cyber security training, and even 
            authoring content for corporate sustainability reports. I've always thrived where learning, creativity, and tech collide.
          </p>

          <p>
            I'm now focused on building intuitive and engaging web experiences — and I'm excited to contribute to purpose-driven teams
            that value curiosity and impact.
          </p>

          <p>
            When I'm not coding, you'll probably find me deep in a fantasy novel, binging Star Trek reruns, or battling it out in Age of Empires.
            I'm also a big fan of world-building games like Minecraft and sprawling adventures like The Elder Scrolls.
            Beyond that, I'm passionate about exploring accessibility in tech and building things that everyone can use and enjoy.
          </p>

          <div className={classes.callToAction}>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              📄 View My Resume
            </a>
            <a href="mailto:amelia@example.com">
              📬 Let's Connect
            </a>
          </div>
        </div>

        <div className={classes.imageWrapper}>
          <img src={portrait} alt="Portrait of Amelia" className={classes.portrait} />
        </div>
      </div>

      <div className={classes.techSkills}>
        <h2>Tech Skills</h2>
        <p>HTML, CSS, SCSS (Sass), Python, JavaScript, React, Git, GitHub, Node.js, npm, Terminal</p>
        <div className={classes.iconRow}>
          <FontAwesomeIcon icon={faHtml5} title="HTML5" />
          <FontAwesomeIcon icon={faCss3} title="CSS3" />
          <FontAwesomeIcon icon={faSass} title="Sass" />
          <FontAwesomeIcon icon={faPython} title="Python" />
          <FontAwesomeIcon icon={faJs} title="JavaScript" />
          <FontAwesomeIcon icon={faReact} title="React" />
          <FontAwesomeIcon icon={faGitAlt} title="Git" />
          <FontAwesomeIcon icon={faGithub} title="GitHub" />
          <FontAwesomeIcon icon={faNodeJs} title="Node.js" />
          <FontAwesomeIcon icon={faNpm} title="npm" />
          <FontAwesomeIcon icon={faTerminal} title="Terminal" />
        </div>
      </div>
    </section>
  );
}

