import siwarpc from "./images/pdp cv siwar2.jpg";
import sanayaPic from "./images/sunaya.png";
import notePic from "./images/note-taker.png";
import teamGenPic from "./images/team-generator.png";
import readmePc from "./images/readme.png";
import spaceDashPic from "./images/space-dash-small.png";
import weatherPic from "./images/weather-small.png";
import passwordPic from "./images/password-small.png";
import pixel from "./images/web.png";
import books from "./images/sunaya.png";
import glowgo from "./images/glowgo.png";

const user = {
  name: "Zaghmi Siwar",
  profilePic: siwarpc,
  avatar: pixel,
  jobTitle: "BI Student",
  altTag: "",
  email: "Zaghmi.siwar@gmail.com",
  mobile: "25166594",
  github: "",
  linkedin: "https://www.linkedin.com/in/siwar-zaghmi-46a42319b/",
  p1: "Hi, I'm Siwar – a Bussines Intelligence Student.",
  p2:
    "I'm currently on an exciting journey with the University of Carthage and i'm loving every minute of it!",
  p3:
    "My passion for coding has comes from my love of problem solving and design - the joy in that moment when i find a solution to something that's been bugging me.",
  p4:
    "I look forward to building websites and applications that can address real-world problems. If you're looking for professional, junior fullstack developer, let's connect.",
};

const portfolios = [
  {
    id: 9,
    image: glowgo,
    altTag: "preview of glowgo app",
    language: "Java",
    name: "Android Studio",
    description:
      "CRUD Application",
    link1: "",
    link1BtnName: "View",
  },
  {
    id: 8,
    image: books,
    altTag: "Dashboard",
    language: "",
    name: "Power Bi",
    description:
      "Dashbord",
      link1: "",
      link1BtnName: "View",
    link2: "https://github.com/rubybassi/show-me-the-books",
    link2BtnName: "Github repo",
  },
  {
    id: 1,
    image: sanayaPic,
    altTag: "preview of sanaya app",
    language: "HTML",
    name: "Odoo",
    description:
      "Creat Modules for entreprise",
      link1: "",
      link1BtnName: "View",
    link2: "https://github.com/rubybassi/sanaya",
    link2BtnName: "Github repo",
  },
  {
    id: 2,
    image: notePic,
    altTag: "preview of Handy Note Take app",
    language: "HTML",
    name: "Excel Dashboard",
    description:
      "Tableaux de bord",
      link1: "",
      link1BtnName: "View",
    link2: "https://github.com/rubybassi/handy-note-taker",
    link2BtnName: "Github repo",
  },
  {
    id: 3,
    image: teamGenPic,
    altTag: "preview of My Team Generator app",
    language: "HTML",
    name: "Big data research",
    description:
      "ResearcH about big data and CRM",
      link1: "",
      link1BtnName: "View",
    link2: "",
    link2BtnName: "Github repo",
  },
  {
    id: 4,
    image: readmePc,
    altTag: "preview of Handy README Generator app",
    language: "",
    name: "Java",
    description:
      "Java Jee Crud Application.",
      link1: "",
      link1BtnName: "View",
    link2: "https://github.com/rubybassi/handy-README-generator",
    link2BtnName: "Github repo",
  },
];

export { user, portfolios };
