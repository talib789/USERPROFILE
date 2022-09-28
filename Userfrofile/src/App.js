import "./styles.css";
import Header from "./components/Header";
import Skills from "./components/Skills";

const userDetails = {
  name: "MD Talib Ansari",
  title: "Software Engineer",
  avatar_url: "https://avatars.githubusercontent.com/u/95065465?v=4",
  skillsets: [
    {
      id: 1,
      langName: "ReactJS",
      logo:
        "https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png"
    },

    {
      id: 2,
      langName: "NodeJS",
      logo:
        "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
    },

    {
      id: 3,
      langName: "JavaScript",
      logo:
        "https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png"
    },

    {
      id: 5,
      langName: "Java",
      logo:
        "https://seeklogo.com/images/J/java-logo-7F8B35BAB3-seeklogo.com.png"
    },
    {
      id: 6,
      langName: "HTML5",
      logo:
        "https://seeklogo.com/images/H/html5-without-wordmark-color-logo-14D252D878-seeklogo.com.png"
    },
    {
      id: 7,
      langName: "CSS3",
      logo:
        "https://seeklogo.com/images/C/css-3-logo-023C1A7171-seeklogo.com.png"
    }
  ]
};

const logoData = userDetails.skillsets.map((langDetails) => (
  <Skills
    key={langDetails.id}
    src={langDetails.logo}
    langName={langDetails.langName}
    className="lang-data"
  />
));

export default function App() {
  return (
    <div className="App">
      <div className="left-box">
        <Header name={userDetails.name} className="header-box" />
        <h3>{userDetails.title}</h3>
        <div className="skillSheet-container">{logoData}</div>
      </div>
      <div className="avatar-box">
        <img src={userDetails.avatar_url} alt="user-avatar" />
      </div>
    </div>
  );
}
