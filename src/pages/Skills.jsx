import React, { useState, useEffect } from "react"
import Section from "../components/Section"
import Skill from "../components/Skill"
import Pie3D from "../components/Chart/Pie3D"
import { SiAndroidstudio, SiAngular, SiCss3, SiDart, SiDocker, SiElectron, SiFirebase, SiFlask, SiFlutter, SiGit, SiGithub, SiGitlab, SiHtml5, SiIntellijidea, SiJava, SiJavascript, SiJupyter, SiKeras, SiKubernetes, SiMongodb, SiNodeDotJs, SiPostgresql, SiPostman, SiPython, SiReact, SiTensorflow, SiVisualstudiocode, SiVueDotJs } from "react-icons/si"
import { BsTerminalFill } from "react-icons/bs"

const Skills = () => {
  const [repoItems, setRepoItems] = useState([])
  const [dataSource, setDataSource] = useState([])

  let data = {
    skills: [
      {
        title: "C / C++",
        progress: "75%",
      },
      {
        title: "Java",
        progress: "75%",
      },
      {
        title: "Javascript",
        progress: "65%",
      },
      {
        title: "Python",
        progress: "45%",
      },    
      {
        title: "HTML",
        progress: "90%",
      },
      {
        title: "CSS",
        progress: "80%",
      },      
      {
        title: "Dart",
        progress: "65%",
      },
    ],
    frameworks: [
      {
        title: "React.js",
        progress: "90%",
      },
      {
        title: "Flutter",
        progress: "85%",
      },
      {
        title: ".NET",
        progress: "70%",
      },
      {
        title: "Angular.js",
        progress: "65%",
      },
      {
        title: "Vue.js",
        progress: "60%",
      },
      {
        title: "Redux",
        progress: "80%",
      },
      {
        title: "Framer Motion",
        progress: "40%",
      },
      {
        title: "Photoshop / Figma / UI / UX",
        progress: "60%",
      },
      {
        title: "Django",
        progress: "50%",
      },
      {
        title: "Bootstrap",
        progress: "70%",
      },
      {
        title: "Material-UI",
        progress: "80%",
      },
    ],
  }

  const getData = () => {
    fetch("https://api.github.com/users/sagnikghoshcr7/repos?per_page=100")
      .then((res) => res.json())
      .then((data) => setRepoItems(data))
  }

  useEffect(() => {
    // Fetch from official api
    getData()

    // Offline api
    // setRepoItems(items)
  }, [])

  useEffect(() => {
    let languages = repoItems.reduce((total, item) => {
      const { language, stargazers_count } = item
      if (!language) return total

      if (!total[language]) {
        total[language] = {
          label: language,
          value: 1,
          stars: stargazers_count,
        }
      } else {
        total[language] = {
          ...total[language],
          value: total[language].value + 1,
          stars: total[language].stars + 1,
        }
      }

      return total
    }, {})

    const mostUsed = Object.values(languages)
      .sort((a, b) => {
        return b.value - a.value
      })
      .slice(0, 5)
    setDataSource(mostUsed)
  }, [repoItems])

  const { skills, frameworks } = data

  const skillsJsx = skills.map((skill, index) => (
    <div className="col-md-8 py-1" key={index}>
      <Skill skill={skill} />
    </div>
  ))

  const frameworksJsx = frameworks.map((skill, index) => (
    <div className="col-md-8 py-1" key={index}>
      <Skill skill={skill} secondary />
    </div>
  ))

  const languagesUsedChart = (
    <div className="col-md-6 py-1">
      <Pie3D data={dataSource} />
    </div>
  )

  const SocialIcon = ({ icon }) => {
    return (
      <div
        className="list-inline-item dev-icons"
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon}
      </div>
    )
  }

  const iconsSet1 = [
    {
      icon: <SiGit />,
    },
    {
      icon: <SiGithub />,
    },
    {
      icon: <SiGitlab />,
    },
  ]

  const iconsSet2 = [
    {
      icon: <SiJava />,
    },
    {
      icon: <SiPython />,
    },
    {
      icon: <SiDart />,
    },
    {
      icon: <SiJavascript />,
    },
  ]

  const iconsSet3 = [
    {
      icon: <SiTensorflow />,
    },
    {
      icon: <SiKeras />,
    },
    {
      icon: <SiFlask />,
    },
    {
      icon: <SiFlutter />,
    },
  ]

  const iconsSet4 = [
    {
      icon: <SiHtml5 />,
    },
    {
      icon: <SiCss3 />,
    },
    {
      icon: <SiReact />,
    },
    {
      icon: <SiAngular />,
    },
    {
      icon: <SiVueDotJs />,
    },
    {
      icon: <SiElectron />,
    },
  ]

  const iconsSet5 = [
    {
      icon: <SiNodeDotJs />,
    },
    {
      icon: <SiMongodb />,
    },
    {
      icon: <SiPostgresql />,
    },
    {
      icon: <SiFirebase />,
    },
    {
      icon: <SiDocker />,
    },
    {
      icon: <SiKubernetes />,
    },
  ]

  const iconsSet6 = [
    {
      icon: <SiVisualstudiocode />,
    },
    {
      icon: <SiJupyter />,
    },
    {
      icon: <SiIntellijidea />,
    },
    {
      icon: <SiAndroidstudio/>,
    },
    {
      icon: <SiPostman />,
    },
    {
      icon: <BsTerminalFill />,
    },
  ]

  return (
    <Section id="skills" title="Skills">
      <div className="subheading mb-3">Coding Languages</div>
      <div className="row mb-4">{skillsJsx}</div>
      <div className="subheading mb-3">Frameworks / Libraries</div>
      <div className="row mb-4">{frameworksJsx}</div>
      <div className="subheading mb-3">Languages used as per Github</div>
      <div className="row mb-4" >{languagesUsedChart}</div>
      <div className="subheading mb-3">Programming Languages, Tools & Technologies</div>
      <div>
        {iconsSet1.map(({ icon }, index) => (
          <SocialIcon icon={icon} key={index} />
        ))}
      </div>
      <div>
        {iconsSet2.map(({ icon }, index) => (
          <SocialIcon icon={icon} key={index} />
        ))}
      </div>
      <div>
        {iconsSet3.map(({ icon }, index) => (
          <SocialIcon icon={icon} key={index} />
        ))}
      </div>
      <div>
        {iconsSet4.map(({ icon }, index) => (
          <SocialIcon icon={icon} key={index} />
        ))}
      </div>
      <div>
        {iconsSet5.map(({ icon }, index) => (
          <SocialIcon icon={icon} key={index} />
        ))}
      </div>
      <div>
        {iconsSet6.map(({ icon }, index) => (
          <SocialIcon icon={icon} key={index} />
        ))}
      </div>
    </Section>
  )
}

export default Skills
