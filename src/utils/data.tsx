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
    title: "TOTAL",
    noOfPupils: 1520,
    boarders: 0,
    day: 1520,
    dataCompletion: 0,
  }
]
const classes = [
  {
    title: "NUR 1A",
    noOfPupils: 28,
    boarders: 0,
    day: 28,
    dataCompletion: 90,
    classTeacher: "Joy Ndukwe",
    teacherInitials: "J.S"
  },
  {
    title: "NUR 1B",
    noOfPupils: 30,
    boarders: 0,
    day: 30,
    dataCompletion: 88,
    classTeacher: "Helena Charles",
    teacherInitials: "H.S"
  },
  {
    title: "NUR 2A",
    noOfPupils: 32,
    boarders: 0,
    day: 32,
    dataCompletion: 88,
    classTeacher: "Alice Ntang",
    teacherInitials: "A.N"
  },
  {
    title: "NUR 2B",
    noOfPupils: 30,
    boarders: 0,
    day: 30,
    dataCompletion: 89,
    classTeacher: "Felicity Ubong",
    teacherInitials: "F.U"
  },
  {
    title: "PRY 1A",
    noOfPupils: 32,
    boarders: 0,
    day: 32,
    dataCompletion: 94,
    classTeacher: "Idara Edet",
    teacherInitials: "I.E"
  },
  {
    title: "PRY 1B",
    noOfPupils: 31,
    boarders: 0,
    day: 31,
    dataCompletion: 88,
    classTeacher: "Salome Ukpong",
    teacherInitials: "S.U"
  },
  {
    title: "PRY 2A",
    noOfPupils: 34,
    boarders: 0,
    day: 34,
    dataCompletion: 89,
    classTeacher: "Ita Ita",
    teacherInitials: "I.I"
  },
  {
    title: "PRY 2B",
    noOfPupils: 30,
    boarders: 0,
    day: 30,
    dataCompletion: 94,
    classTeacher: "Helen Imoh",
    teacherInitials: "H.I"
  },
  {
    title: "PRY 3A",
    noOfPupils: 27,
    boarders: 0,
    day: 27,
    dataCompletion: 89,
    classTeacher: "Bisi Ayo",
    teacherInitials: "B.A"
  },
  {
    title: "PRY 3B",
    noOfPupils: 30,
    boarders: 0,
    day: 30,
    dataCompletion: 94,
    classTeacher: "Theresa David",
    teacherInitials: "T.D"
  },
  {
    title: "PRY 4A",
    noOfPupils: 40,
    boarders: 0,
    day: 40,
    dataCompletion: 89,
    classTeacher: "Uwanna Joshua",
    teacherInitials: "U.J"
  },
  {
    title: "PRY 4B",
    noOfPupils: 38,
    boarders: 0,
    day: 38,
    dataCompletion: 94,
    classTeacher: "Atim Etim",
    teacherInitials: "A.E"
  },
  {
    title: "PRY 5A",
    noOfPupils: 47,
    boarders: 0,
    day: 47,
    dataCompletion: 89,
    classTeacher: "Loveth Benson",
    teacherInitials: "L.B"
  },
  {
    title: "PRY 5B",
    noOfPupils: 43,
    boarders: 0,
    day: 43,
    dataCompletion: 94,
    classTeacher: "Daniella Daniels",
    teacherInitials: "D.D"
  },
]

const pupilsPerfomance = [
  {
    name: "NUR 1",
    uv: 60,
    pv: 63,
    amt: 53
  },
  {
    name: "NUR 2",
    uv: 57,
    pv: 52,
    amt: 49
  },
  {
    name: "PRY 1",
    uv: 68,
    pv: 48,
    amt: 55
  },
  {
    name: "PRY 2",
    uv: 55,
    pv: 59,
    amt: 60
  },
  {
    name: "PRY 3",
    uv: 48,
    pv: 63,
    amt: 55
  },
  {
    name: "PRY 4",
    uv: 55,
    pv: 54,
    amt: 49
  },
  {
    name: "PRY 5",
    uv: 50,
    pv: 49,
    amt: 60
  },
  {
    name: "PRY 6",
    uv: 60,
    pv: 58,
    amt: 49
  }
];

const houses = [
  {
    title: "Harmans",
    color: "green",
    hex: "#00A651",
    noOfPupils: 124,
    classTeacher: "Helena Charles",
    teacherInitials: "H.C"
  },
  {
    title: "Hyde Johnsons",
    color: "blue",
    hex: "#0E38E8",
    noOfPupils: 154,
    classTeacher: "Bisi Ayo",
    teacherInitials: "B.A"
  },
  {
    title: "Mckee-Wright",
    color: "red",
    hex: "#D61C4E",
    noOfPupils: 124,
    classTeacher: "Salome Ukpong",
    teacherInitials: "S.U"
  },
  {
    title: "Panes",
    color: "yellow",
    hex: "#FAD200",
    noOfPupils: 124,
    classTeacher: "Ita Ita",
    teacherInitials: "I.I"
  },
]
export { sidebarItems, cards, bestStudents, classOverview, classes, houses, pupilsPerfomance }