import ShoeStore from "../assets/project/shoestore.png";
import MenswearApp from "../assets/project/menswear_app.png";
import Techcell from "../assets/project/techcell.png";

export const projects = [
  {
    image: Techcell,
    title: "Techcell Dashboard",
    description:
      "Fullstack project for graduation, this e-commerce website specializes in providing phone services. I am responsible for the website admin part",
    technologies: [
      "Nextjs",
      "Material UI",
      "Formik",
      "Redux Toolkit",
      "Nestjs",
      "Microservice",
      "MongoDB"
    ],
    source: "https://github.com/TechCell-Project/tech-cell-client-management",
    link: "https://admin.techcell.cloud",
  },
  {
    image: ShoeStore,
    title: "Shoe Store Website",
    description:
      "The online sales website (MPA) with full functions of searching, adding products, payment, ... for customers. Also, the admin has the following functions: crud, accept order and upload images,...",
    technologies: [
      "ASP.Net MVC",
      "Entity Framework",
      "MSSQL",
      "Javascript",
      "Jquery",
      "Bootstrap",
      "SASS/SCSS",
      "API",
    ],
    source: "https://github.com/bou2201/ShoeStoreWebsite",
    link: undefined,
  },
  {
    image: MenswearApp,
    title: "Menswear App Console",
    description:
      "A menswear app project that enables you to login, view products, view transaction history, search & add, export order by admin. Actor this app is seller",
    technologies: ["C#", "Three-layer architecture", "MySQL"],
    source: "https://github.com/bou2201/Project_1",
    link: undefined,
  },
];
