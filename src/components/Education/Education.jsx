import classes from './Education.module.scss';

export default function Education() {
  const educationList = [
    {
      degree: 'Pathway to Tech Program – Full Stack Engineer',
      school: '_Nology',
      dates: 'Mar 2025 – Jun 2025',
      description:
        'Intensive 12-week bootcamp covering full-stack development with React, TypeScript, Java, Spring Boot, and modern web technologies.',
    },
    {
      degree: 'Certificate IV in Cyber Security',
      school: 'RMIT University',
      dates: '2024',
      description:
        'Practical training in cybersecurity fundamentals, including networking, threat detection, and risk mitigation.',
    },
    {
      degree: 'Vocational Graduate Certificate of Sustainability',
      school: 'Swinburne University of Technology',
      dates: '',
      description:
        'Advanced studies in sustainability principles and environmental impact, with a focus on practical application across industries.',
    },
    {
      degree: 'Bachelor of Science (Distinction)',
      school: 'Deakin University',
      dates: '',
      description:
        'Major in Environmental Science, focused on ecological systems, data analysis, and environmental management.',
    },
    {
      degree: 'Bachelor of Arts (Distinction)',
      school: 'Deakin University',
      dates: '',
      description:
        'Major in Literary Studies, with emphasis on critical analysis, writing, and interdisciplinary perspectives.',
    },
  ];

  return (
    <section className={classes.education}>
      <h2 className={classes.heading}>Education</h2>
      <div className={classes.cards}>
        {educationList.map((edu, idx) => (
          <div className={classes.card} key={idx}>
            <h3 className={classes.degree}>{edu.degree}</h3>
            <p className={classes.school}>{edu.school}</p>
            {edu.dates && <p className={classes.dates}>{edu.dates}</p>}
            <p className={classes.description}>{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
