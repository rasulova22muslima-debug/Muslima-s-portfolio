import Header from "./components/Header/Header"
import About from "./components/About/About"
import Aboutme from "./components/AboutMe/Aboutme"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"
import Info from "./components/Info/Info"
import Footer from "./components/Footer/Footer"

import { goTrip, foot, Silver, iPhone, totembo, zone } from "./utilities/reExport";
import { Mail, Phone, MapPin } from "lucide-react";


const App = () => {
  const mySkills = [
    { title: 'Frontend', skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML5/CSS3'] },
    { title: 'Backend', skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST API'] },
    { title: 'Инструменты', skills: ['Git', 'Figma', 'Vite', 'VS Code', 'Webpack'] },
    { title: 'Дизайн', skills: ['UI/UX Design', 'Responsive Design', 'Adobe XD', 'Photoshop', 'Illustrator'] },
    { title: 'Soft Skills', skills: ['Командная работа', 'Коммуникация', 'Решение проблем', 'Тайм-менеджмент', 'Креативность'] },
    { title: 'Языки', skills: ['Русский (родной)', 'Английский (B2)'] },
  ];

  const myProjects = [
    {
      title: "GoTrip",
      description: "Магазин для любителей активного отдыха.",
      image: goTrip, tags: ["СSS","HTML"],
      link: "https://rasulova22muslima-debug.github.io/GoTrip/",
      github: "https://github.com/rasulova22muslima-debug/GoTrip"
    },
    {
      title: "Zone",
      description: "Сайт для бизнес-решения на основе виртуальной реальности", image: zone,
      tags: ["Next.js", "MongoDB", "Node.js"],
      link: "https://rasulova22muslima-debug.github.io/zone/",
      github: "https://github.com/rasulova22muslima-debug/zone"
    },
    {
      title: "FOOD 100",
      description: "Сайт для заказа бургеров.",
      image: foot,
      tags: ["Next.js", "MongoDB", "Node.js"],
      link: "https://rasulova22muslima-debug.github.io/food100/",
      github: "https://github.com/rasulova22muslima-debug/food100"
    },
    {
      title: "Silver house",
      description: "Проект по продаже новостроек.",
      image: Silver,
      tags: ["Next.js", "MongoDB", "Node.js"],
      link: "https://rasulova22muslima-debug.github.io/SilverHouse1/",
      github: "https://github.com/rasulova22muslima-debug/SilverHouse1"
    },
    {
      title: "Boulevard market",
      description: "Проект по продаже техники Apple.",
      image: iPhone,
      tags: ["Next.js", "MongoDB", "Node.js"],
      link: "https://rasulova22muslima-debug.github.io/iPhone/",
      github: "https://github.com/rasulova22muslima-debug/iPhone"
    },
    {
      title: "Totembo",
      description: "Проект по продаже техники Totembo.",
      image: totembo,
      tags: ["Next.js", "MongoDB", "Node.js"],
      link: "https://rasulova22muslima-debug.github.io/totembo/",
      github: "https://github.com/rasulova22muslima-debug/totembo"
    },
  ];

  const contacts = [
    { id: 1, icon: <Mail size={24} />, label: "Email", value: "rasulova22muslima@gmail.com", href: "mailto:rasulova22muslima@gmail.com" },
    { id: 2, icon: <Phone size={24} />, label: "Телефон", value: "+998 (91)-037-19-90", href: "tel:+998910371990" },
    { id: 3, icon: <MapPin size={24} />, label: "Местоположение", value: "Ташкент, Узбекистан", href: null },
  ];
  const navLinks = [
    { text: 'О себе', href: '#about' },
    { text: 'Навыки', href: '#skills' },
    { text: 'Проекты', href: '#projects' },
    { text: 'Контакты', href: '#contacts' },
  ];
  return (
    <>
      <Header navItems={navLinks}/>
      <About />
      <Aboutme />
      <Skills items={mySkills} />
      <Projects projects={myProjects} />
      <Info contacts={contacts} />
      <Footer navItems={navLinks} contactItems={contacts} />
    </>
  )
}

export default App;