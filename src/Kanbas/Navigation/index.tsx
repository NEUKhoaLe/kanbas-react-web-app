import {
  FaArrowCircleRight,
  FaBook,
  FaClock,
  FaInbox,
  FaLaptop,
  FaQuestionCircle,
  FaRegCalendarAlt,
  FaRegUserCircle,
  FaTachometerAlt,
  FaTimes,
} from "react-icons/fa";
import "./index.css";
import { Link, useLocation } from "react-router-dom";

export const KanbasNavigation = function () {
  const sections = [
    { label: "Account", icon: <FaRegUserCircle className="fs-2" /> },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2 icon" /> },
    { label: "Courses", icon: <FaBook className="fs-2 icon" /> },
    { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2 icon" /> },
    { label: "Inbox", icon: <FaInbox className="fs-2 icon" /> },
    { label: "History", icon: <FaClock className={"fs-2 icon"} /> },
    { label: "Commons", icon: <FaArrowCircleRight className={"fs-2 icon"} /> },
    { label: "Studio", icon: <FaLaptop className={"fs-2 icon"} /> },
    { label: "Help", icon: <FaQuestionCircle className={"fs-2 icon"} /> },
  ];

  const { pathname } = useLocation();

  return (
    <div
      className={"container text-center wd-kanbas-navigation overflow-hidden"}
    >
      <div className="navigation-image">
        <Link to={"/Kanbas/Dashboard"}>
          <img
            className="navigation-image"
            src="/Kanbas-old/Navigation/northeastern.png"
            alt=""
          />
        </Link>
      </div>
      {sections.map((item, index) => {
        return (
          <div
            key={index}
            className={`navigation-row ${pathname.includes(item.label) ? "wd-active" : ""}`}
          >
            <Link to={`/Kanbas/${item.label}`}>
              {item.icon}
              <br />
              {item.label}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

interface HiddenKanbasNavigationProp {
  isOpen: (isOpen: boolean) => void;
}

export const HiddenKanbasNavigation: React.FC<HiddenKanbasNavigationProp> =
  function ({ isOpen }) {
    const sections = [
      { label: "Dashboard", icon: <FaTachometerAlt className="fa-2x icon" /> },
      { label: "Account", icon: <FaRegUserCircle className="fa-2x" /> },
      { label: "Courses", icon: <FaBook className="fa-2x icon" /> },
      { label: "Calendar", icon: <FaRegCalendarAlt className="fa-2x icon" /> },
      { label: "Inbox", icon: <FaInbox className="fa-2x icon" /> },
      { label: "History", icon: <FaClock className={"fa-2x icon"} /> },
      {
        label: "Commons",
        icon: <FaArrowCircleRight className={"fa-2x icon"} />,
      },
      { label: "Studio", icon: <FaLaptop className={"fa-2x icon"} /> },
      { label: "Help", icon: <FaQuestionCircle className={"fa-2x icon"} /> },
    ];

    return (
      <div className={"text-center kanbas-collapse"}>
        <button
          className="btn navigation-row-close-button"
          type={"button"}
          onClick={() => isOpen(false)}
        >
          <FaTimes className={"icon-close"} />
        </button>
        {sections.map((item, index) => {
          return (
            <div className={"hidden-navigation-row"}>
              <Link to={`/Kanbas/${item.label}`} className={"indented"}>
                {item.icon}
                <p>{item.label}</p>
              </Link>
            </div>
          );
        })}
      </div>
    );
  };
