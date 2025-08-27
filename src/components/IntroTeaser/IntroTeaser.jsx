// src/components/IntroTeaser/IntroTeaser.jsx
import classes from './IntroTeaser.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faSass,
  faJs,
  faReact,
  faPython,
  faGitAlt,
  faGithub,
  faNodeJs,
  faNpm,
} from '@fortawesome/free-brands-svg-icons';

import { faTerminal } from '@fortawesome/free-solid-svg-icons';

import cartoonPortrait from '../../assets/Pixar_Amelia.png'; // updated image

export default function IntroTeaser() {
  return (
    <section className={classes.teaser}>
      {/* Text content comes first now */}
      <div className={classes.textContainer}>
        <h1>Hi, I'm Amelia!</h1>
        <p>
          I'm a web developer at _Nology, passionate about turning ideas into digital experiences. I love clean code, great UX, and the occasional debugging challenge.
        </p>
        <p className={classes.techIntro}>Tech I use:</p>
        <div className={classes.techIcons}>
          <FontAwesomeIcon icon={faHtml5} title="HTML5" />
          <FontAwesomeIcon icon={faCss3Alt} title="CSS3" />
          <FontAwesomeIcon icon={faSass} title="Sass" />
          <FontAwesomeIcon icon={faPython} title="Python" />
          <FontAwesomeIcon icon={faJs} title="JavaScript" />
          <FontAwesomeIcon icon={faReact} title="React" />
          <FontAwesomeIcon icon={faGitAlt} title="Git" />
          <FontAwesomeIcon icon={faGithub} title="GitHub" />
          <FontAwesomeIcon icon={faNodeJs} title="Node.js" />
          <FontAwesomeIcon icon={faNpm} title="NPM" />
          <FontAwesomeIcon icon={faTerminal} title="Terminal" />
        </div>
      </div>

      {/* Image moved to the right */}
      <div className={classes.imageContainer}>
        <img
          src={cartoonPortrait}
          alt="Cartoon illustration of Amelia"
          className={classes.portrait}
        />
      </div>
    </section>
  );
}
