import './App.css'
import {useState} from 'react' /* react library */

function App() {
  const [command, setCommand] = useState("")
  const [output, setOutput] = useState("")
  const [showContact, setShowContact] = useState(false)
  const [showResume, setShowResume] = useState(false)
  const [activeProject, setActiveProject] = useState(null)
  //const [history, setHistory] = useState([])
  const handleKeyDown = (e) => {  /*function to deal with keyborad-down events*/
    if (e.key==="Enter"){
    const cleanCommand = command.trim().toLowerCase()
    setShowContact(false)
    setShowResume(false)
    setActiveProject(null)
    const parts = cleanCommand.split(" ")
    //setHistory(previousHistory => [...previousHistory, cleanCommand])   
 
    //console.log(history)
    
    if (parts[0]==="project"){
      if (parts[1]==="1")
      {
        setOutput(`PROJECT: RASID

TYPE
AI / NLP / Full Stack

DESCRIPTION
Bilingual AI system for detecting unsafe and
fraudulent online advertisements.

TECHNOLOGIES
AraBERT • BERT • FastAPI • OCR • Whisper • LIME

KEY FEATURES
• Arabic & English analysis
• Safe / Manipulative / Fraud classification
• Image and video content analysis
• Explainable AI results

`)
        setCommand("")
        setActiveProject("rasid")
            return

      }
      else if (parts[1]==="2"){
        setOutput(`PROJECT: CLOUD CATCH

TYPE
Cloud / Multiplayer / Web Application

DESCRIPTION
Cloud-based multiplayer classroom game designed
for interactive group participation.

TECHNOLOGIES
Flask • Redis • Docker • REST API • JavaScript

KEY FEATURES
• QR-based player joining
• Shared multiplayer game state
• Real-time player updates
• Randomized player selection
• Host-controlled game sessions`)
        setCommand("")
        setActiveProject("cloud-catch")
        return
      }

      setOutput(`Project not found.
Available projects: 1, 2
Type "projects" to view the project list.`)
setCommand("")
return
    }
    switch (cleanCommand){
    case "help":
      setOutput(`AVAILABLE COMMANDS

about
  Who is Faten?

projects
  View my projects

skills
  Technical skills

experience
  Experience & training

education
  Academic background

resume
  View my resume

contact
  Contact information

clear
  Clear terminal`)
      break
    
    case "about":
      setOutput(`ABOUT ME

I'm Faten Aldawood, a Computer Science graduate with a strong interest in
Cloud Engineering, Artificial Intelligence, Data Engineering, and
Software Engineering.

I enjoy building practical systems that combine software, cloud
technologies, and AI to solve real-world problems.

My recent work includes RASID, a bilingual AI-powered online safety
system, and Cloud Catch, a cloud-based multiplayer application built
with Flask, Redis, Docker, and REST APIs.

I also completed cooperative training at the Ministry of Human Resources
and Social Development and the Google Cloud Professional Bootcamp at
Tuwaiq Academy.

Currently exploring opportunities where I can grow as an engineer,
contribute to real products, and continue building scalable,
intelligent systems.`)
      break

    case "education":
  setOutput(`EDUCATION

B.Sc. in Computer Science
Almaarefa University
2026
GPA: 3.50 / 4.00

Diploma in Application Development
Imam Mohammad Ibn Saud Islamic University
2020
GPA: 4.96 / 5`)
  break
    case "projects":
      setOutput(`PROJECTS

01  RASID
    Bilingual AI system for detecting unsafe and fraudulent online ads.

02  CLOUD CATCH
    Cloud-based multiplayer classroom game powered by Redis.

Type "project 1" or "project 2" for details.`)
      break
    case "skills":
      setOutput (`TECHNICAL SKILLS

[CLOUD]
Cloud Run • Redis • Cloud Functions • Docker

[AI]
BERT • AraBERT • NLP • OCR • Whisper • LIME

[DATA ENGINEERING]
SQL • BigQuery • Python • Pandas • Airflow • dbt • Spark

[SOFTWARE ENGINEERING]
Python • JavaScript • React • FastAPI • Flask • Git/GitHub
`)
      break
    case "experience":
      setOutput(`EXPERIENCE & TRAINING

COOP TRAINING
Ministry of Human Resources and Social Development
Data Analysis / Data Engineering

• SQL and database development
• Python and Pandas for data processing
• Data visualization and dashboards
• Excel-based data analysis

GOOGLE CLOUD PROFESSIONAL BOOTCAMP
Tuwaiq Academy

• Cloud application development
• Cloud Run and Cloud Functions
• Docker and containerization
• Redis and cloud-based architectures`)
      break

    case "resume":
  setOutput(`RESUME`)
  setShowResume(true)
  break

    case "contact":
      setOutput(`CONTACT

`)

  setShowContact(true)
      break
    case "clear":
      setOutput("")
      break
    default:
  setOutput(`Command not found 
Type "help" to see available commands.`)
  break

    }
    setCommand("")
  }
  }

  return (
    <main>


  <div className="crt-screen">
      <p className="system-label">
      FATEN SYSTEMS 1.0
     </p>
        <h1>
      Hi there
      <br/>
      I'm Faten Aldawood
        </h1>
       <ul>
      <li>Cloud Engineering</li>
      <li>AI Engineering</li>
      <li>Data Engineering</li>
      <li>Software Engineering</li>
       </ul>

      <p>Computer Science Graduate</p>
      <p>Scroll or type <code>help</code> to explore</p>

      <pre>{output}</pre>

    {activeProject === "rasid" && (
  <div className="project-link">
    <a
      href="https://github.com/FMD94/rasid-ai-engine"
      target="_blank"
      rel="noreferrer"
    >
      View RASID on GitHub
    </a>
  </div>
)}

{activeProject === "cloud-catch" && (
  <div className="project-link">
    <a
      href="https://github.com/FMD94/cloud-catch"
      target="_blank"
      rel="noreferrer"
    >
      View Cloud Catch on GitHub
    </a>
  </div>
)}

      {showContact && (
  <div className="contact-links">
    <a href="mailto:f.eng.aldawood@gmail.com">
      Email — f.eng.aldawood@gmail.com
    </a>

    <a
      href="https://www.linkedin.com/in/fatenaldawood"
      target="_blank"
      rel="noreferrer"
    >
      LinkedIn — linkedin.com/in/fatenaldawood
    </a>

    <a
      href="https://github.com/FMD94"
      target="_blank"
      rel="noreferrer"
    >
      GitHub — github.com/FMD94
    </a>

    <p>
  Open to opportunities in:
  <br />
  Cloud • AI • Data Engineering • Software Engineering
</p>
  </div>
)}
      {showResume && (
  <div className="resume-link">
    <a
      href="/Faten-Aldawood-Resume.pdf"
      target="_blank"
      rel="noreferrer"
    >
      View / Download Resume
    </a>
  </div>
)}
      <p>visitor@faten:~$ 
        <input 
        type="text" 
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        onKeyDown ={handleKeyDown}
        />
        </p>
       </div>
 
    </main>
    
  )
}

export default App
