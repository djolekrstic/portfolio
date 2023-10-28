import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

export const links = [
  {
    id: "1",
    name: "home",
    route: "/",
  },
  {
    id: "2",
    name: "about",
    route: "about",
  },
  {
    id: "3",
    name: "projects",
    route: "projects",
  },
  {
    id: "4",
    name: "contact",
    route: "contact",
  },
];

export const social = [
  {
    id: "github",
    url: "https://github.com/djolekrstic",
    icon: <FaGithub />,
  },
  {
    id: "linkedin",
    url: "https://www.linkedin.com/in/%C4%91or%C4%91e-krsti%C4%87-5885631b0/",
    icon: <FaLinkedin />,
  },
];
