import ShoeStore from "../assets/project/shoestore.png";
import Volunteer from "../assets/project/ktcb.png";
import MenswearApp from "../assets/project/menswear_app.png";

export const projects = [
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
    image: Volunteer,
    title: "Volunteer Website",
    description:
      "Project is in progress, collaboratively creating a volunteer website for the kids. The purpose is to create a place where people can learn more about the group and support together",
    technologies: ["HTML", "CSS", "SASS/SCSS", "Bootstrap", "Javascript"],
    source: "https://github.com/khoangtroicuabe/khoangtroicuabe.github.io",
    link: "https://khoangtroicuabe.org/",
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
