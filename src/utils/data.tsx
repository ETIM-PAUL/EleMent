import { IoPeople } from "react-icons/io5";
import { GiTeacher } from "react-icons/gi";
import { FaMale, FaFemale } from "react-icons/fa";

const sidebarItems = [
  {
    index: 1,
    title: "Dashboard",
    path: "/home",
    icon: "",
    tier: "first"
  },
  {
    index: 2,
    title: "Class Management",
    path: "class-management",
    icon: "",
    tier: "first"
  },
  {
    index: 3,
    title: "Subjects",
    path: "subjects",
    icon: "",
    tier: "first"
  },
  {
    index: 4,
    title: "Time Table",
    path: "timetable",
    icon: "",
    tier: "first"
  },
  {
    index: 5,
    title: "Houses",
    path: "houses",
    icon: "",
    tier: "first"
  },
  {
    index: 6,
    title: "Bills & Payment",
    path: "bills&payment",
    icon: "",
    tier: "first"
  },
  {
    index: 7,
    title: "Live classes",
    path: "liveclasses",
    icon: "",
    tier: "second"
  },
  {
    index: 8,
    title: "Users",
    path: "users",
    icon: "",
    tier: "third"
  },
  {
    index: 9,
    title: "Settings",
    path: "settings",
    icon: "",
    tier: "third"
  }
]

const cards = [
  {
    number: "1,520",
    title: "Total pupils",
    icon: <IoPeople />,
    index: 1,
  },
  {
    icon: <FaMale />,
    number: "557",
    title: "Male pupils",
    index: 2,
  },
  {
    icon: <FaFemale />,
    number: "963",
    title: "Female pupils",
    index: 3,
  },
  {
    icon: <GiTeacher />,
    number: "120",
    title: "Total teachers",
    index: 4,
  }
]

const bestStudents = [
  {
    name: "Ibrahim Musa",
    class: "Primary 2b",
    email: "ibrahimthelegend@gmail.com",
    mobile: "08012246792",
    details: "with an average of 88% across 15 subjects"
  },
  {
    name: "Ifeanyi Ubah",
    class: "Primary 3b",
    email: "ubahifeanyi2015@gmail.com",
    mobile: "09044838712",
    details: "with an average of 80% across 15 subjects"
  },
  {
    name: "Itam Tabe",
    class: "Primary 2a",
    email: "itamtabe25@gmail.com",
    mobile: "09174987274",
    details: "with an average of 75% across 15 subjects"
  },
  {
    name: "Efiok Efiok",
    class: "Primary 4a",
    email: "efioke872@gmail.com",
    mobile: "08141140297",
    details: "with an average of 73% across 15 subjects"
  }
]

const classOverview = [
  {
    title: "NUR 1",
    noOfPupils: 197,
    boarders: 0,
    day: 197,
    dataCompletion: 90,
  },
  {
    title: "NUR 2",
    noOfPupils: 195,
    boarders: 0,
    day: 195,
    dataCompletion: 88,
  },
  {
    title: "PRY 1",
    noOfPupils: 188,
    boarders: 0,
    day: 188,
    dataCompletion: 88,
  },
  {
    title: "PRY 2",
    noOfPupils: 156,
    boarders: 0,
    day: 156,
    dataCompletion: 89,
  },
  {
    title: "PRY 3",
    noOfPupils: 195,
    boarders: 0,
    day: 195,
    dataCompletion: 94,
  },
  {
    title: "PRY 4",
    noOfPupils: 192,
    boarders: 0,
    day: 192,
    dataCompletion: 88,
  },
  {
    title: "PRY 5",
    noOfPupils: 197,
    boarders: 0,
    day: 197,
    dataCompletion: 89,
  },
  {
    title: "PRY 6",
    noOfPupils: 200,
    boarders: 0,
    day: 200,
    dataCompletion: 94,
  }
]
export { sidebarItems, cards, bestStudents, classOverview }