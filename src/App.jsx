import React from 'react';
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Aboutme from "./components/AboutMe/Aboutme";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Info from "./components/Info/Info";
import Footer from "./components/Footer/Footer";

import { goTrip, foot, Silver, iPhone, totembo, zone, about , weather} from "./utilities/reExport";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();

  const navLinks = [
    { text: t("about"), href: '#about' },
    { text: t("skills"), href: '#skills' },
    { text: t("projects"), href: '#projects' },
    { text: t("contacts"), href: '#contacts' },
  ];

  const contacts = [
    { id: 1, icon: <Mail size={24} />, label: t("tel"), value: "rasulova22muslima@gmail.com", href: "mailto:rasulova22muslima@gmail.com" },
    { id: 2, icon: <Phone size={24} />, label: t("tel"), value: "+998 (91)-037-19-90", href: "tel:+998910371990" },
    { id: 3, icon: <MapPin size={24} />, label: t("loc"), value: t("loc2"), href: null },
  ];

  const mySkills = [
    { title: "Frontend", skills: ['React', 'Zustand', 'Redux Toolkitt', 'React Router Dom', 'Axios'] },
    { title: t('tools'), skills: ['Git', 'Figma', 'Vite', 'VS Code', 'Versel'] },
    {
      title: 'Soft Skills',
      skills: [
        t('skills-p1'),
        t('skills-p2'),
        t('skills-p3'),
        t('skills-p4'), 
        t('skills-p5')  
      ]
    },
    { title: t('languages'), skills: ["JavaScript","TypeScript","HTML","SCSS","CSS"] },
  ];

  
  const myProjects = [
    {
      title: "GoTrip",
      description: t("project1"),
      image: goTrip,
      tags: ["HTML", "CSS"],
      link: "https://rasulova22muslima-debug.github.io/GoTrip/",
      github: "https://github.com/rasulova22muslima-debug/GoTrip"
    },
    {
      title: "Zone",
      description: t("project2"),
      image: zone,
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://rasulova22muslima-debug.github.io/zone/",
      github: "https://github.com/rasulova22muslima-debug/zone"
    },
    {
      title: "FOOD 100",
      description: t("project3"),
      image: foot,
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://rasulova22muslima-debug.github.io/food100/",
      github: "https://github.com/rasulova22muslima-debug/food100"
    },
    {
      title: "Silver house",
      description: t("project4"),
      image: Silver,
      tags: ["HTML", "CSS"],
      link: "https://rasulova22muslima-debug.github.io/SilverHouse1/",
      github: "https://github.com/rasulova22muslima-debug/SilverHouse1"
    },
    {
      title: "Boulevard market",
      description: t("project5"),
      image: iPhone,
      tags: ["HTML", "CSS"],
      link: "https://rasulova22muslima-debug.github.io/iPhone/",
      github: "https://github.com/rasulova22muslima-debug/iPhone"
    },
    {
      title: "Totembo",
      description: t("project6"),
      image: totembo,
      tags: ["HTML", "CSS"],
      link: "https://rasulova22muslima-debug.github.io/totembo/",
      github: "https://github.com/rasulova22muslima-debug/totembo"
    },
    {
      title: "About-me",
      description: t("project7"),
      image: about,
      tags: ["React", "CSS", "JavaScript"],
      link: "https://about-me-react-three.vercel.app/",
      github: "https://github.com/rasulova22muslima-debug/about-me-react"
    },
    {
      title: "Weather",
      description: t("project8"),
      image: weather,
      tags: ["React", "CSS", "JavaScript"],
      link: "https://weather-react-six-delta.vercel.app/",
      github: "https://github.com/rasulova22muslima-debug/Weather-react"
    },
  ];

  return (
    <>
      <Header navItems={navLinks} />
      <About />
      <Aboutme />
      <Skills items={mySkills} />
      <Projects projects={myProjects} />
      <Info contacts={contacts} />
      <Footer navItems={navLinks} contactItems={contacts} />
    </>
  );
};

export default App;