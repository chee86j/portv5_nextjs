import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as TbIcons from "react-icons/tb";
import Image from "next/image";
import PytestIcon from "./pytest.svg"

const BackEndIconData = [
  {
    icon: <SiIcons.SiTypescript />,
    name: "TypeScript",
    level: "Intermediate",
  },
  {
    icon: <SiIcons.SiPython />,
    name: "Python",
    level: "Experienced",
  },
  {
    icon: <FaIcons.FaNodeJs />,
    name: "Node.js",
    level: "Proficient",
  },
  {
    icon: <SiIcons.SiPostgresql />,
    name: "PostgreSQL",
    level: "Proficient",
  },
  {
    icon: <SiIcons.SiSqlite />,
    name: "SQLite",
    level: "Experienced",
  },
  {
    icon: <SiIcons.SiPrisma />,
    name: "Prisma",
    level: "Experienced",
  },
  {
    icon: <FaIcons.FaServer />,
    name: "Express.js",
    level: "Intermediate",
  },
  {
    icon: <SiIcons.SiSequelize />,
    name: "Sequelize",
    level: "Proficient",
  },
  {
    icon: <TbIcons.TbApi />,
    name: "RESTful API",
    level: "Proficient",
  },
  {
    icon: <SiIcons.SiCheckmarx />,
    name: "OOP",
    level: "Proficient",
  },
  {
    icon: <FaIcons.FaDatabase />,
    name: "Database Management",
    level: "Proficient",
  },
  {
    icon: <SiIcons.SiMocha/>,
    name: "Mocha",
    level: "Experienced",
  },
  {
    icon: <SiIcons.SiJasmine/>,
    name: "Jasmine",
    level: "Experienced",
  },
  {
    icon: <Image src={PytestIcon} alt="Pytest" className="iconStyle"/>,
    name: "Pytest",
    level: "Experienced",
  }
];

export default BackEndIconData;
