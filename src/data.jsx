import { FaGithub, FaLinkedin } from "react-icons/fa6";
import {
  html5,
  css3,
  js,
  react,
  node,
  tailwind,
  git,
  ubuntu,
  sass,
  figma,
} from "./assets";
import { nanoid } from "nanoid";

export const links = [
  {
    id: nanoid(),
    name: "home",
    route: "/",
  },
  {
    id: nanoid(),
    name: "about",
    route: "about",
  },
  {
    id: nanoid(),
    name: "projects",
    route: "projects",
  },
  {
    id: nanoid(),
    name: "contact",
    route: "contact",
  },
];

export const social = [
  {
    id: nanoid(),
    url: "https://github.com/djolekrstic",
    icon: <FaGithub />,
  },
  {
    id: nanoid(),
    url: "https://www.linkedin.com/in/%C4%91or%C4%91e-krsti%C4%87-5885631b0/",
    icon: <FaLinkedin />,
  },
];

export const skills = [
  {
    id: nanoid(),
    skill: "html5",
    image: html5,
  },
  {
    id: nanoid(),
    skill: "css3",
    image: css3,
  },
  {
    id: nanoid(),
    skill: "javascript",
    image: js,
  },
  {
    id: nanoid(),
    skill: "react",
    image: react,
  },
  {
    id: nanoid(),
    skill: "node",
    image: node,
  },
  {
    id: nanoid(),
    skill: "tailwind",
    image: tailwind,
  },
  {
    id: nanoid(),
    skill: "git",
    image: git,
  },
  {
    id: nanoid(),
    skill: "ubuntu",
    image: ubuntu,
  },
  {
    id: nanoid(),
    skill: "sass",
    image: sass,
  },
  {
    id: nanoid(),
    skill: "figma",
    image: figma,
  },
];
