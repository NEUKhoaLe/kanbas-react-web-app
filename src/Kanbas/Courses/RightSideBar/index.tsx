import "../index.css";
import { Link } from "react-router-dom";

export const RightSideBar = function () {
  return (
    <div className="col right-side-bar">
      <p className="right-side-bar-text">Course Status</p>
      <div className="right-side-bar-publish-buttons">
        <button className="btn right-side-bar-unpublish-button" type="button">
          <i className="fa fa-ban" aria-hidden="true"></i>
          Unpublish
        </button>
        <button className="btn right-side-bar-publish-button" type="button">
          <i className="fa fa-check-circle" aria-hidden="true"></i>
          Published
        </button>
      </div>
      <div className="right-side-bar-rest-buttons">
        <button className="right-side-bar-rest-button">
          <i
            className="fa fa-cloud-download right-side-bar-icons"
            aria-hidden="true"
          ></i>
          <Link to="">Import Existing Content</Link>
        </button>
        <button className="right-side-bar-rest-button">
          <i
            className="fa fa-arrow-down right-side-bar-icons"
            aria-hidden="true"
          ></i>
          <Link to="">Import From Commons</Link>
        </button>
        <button className="right-side-bar-rest-button">
          <Link to="">
            <i
              className="fa fa-crosshairs right-side-bar-icons"
              aria-hidden="true"
            ></i>
            Choose Home Page
          </Link>
        </button>
        <button className="right-side-bar-rest-button">
          <Link to="">
            <i
              className="fa fa-bar-chart right-side-bar-icons"
              aria-hidden="true"
            ></i>
            View Course Stream
          </Link>
        </button>
        <button className="right-side-bar-rest-button">
          <Link to="">
            <i
              className="fa fa-bullhorn right-side-bar-icons"
              aria-hidden="true"
            ></i>
            New Announcement
          </Link>
        </button>
        <button className="right-side-bar-rest-button">
          <Link to="">
            <i
              className="fa fa-bar-chart right-side-bar-icons"
              aria-hidden="true"
            ></i>
            New Analytics
          </Link>
        </button>
        <button className="right-side-bar-rest-button">
          <Link to="">
            <i className="fa fa-bell" aria-hidden="true"></i>
            View Course Notifications
          </Link>
        </button>
      </div>
      <div className="coming-up-container">
        <p className="right-side-bar-text">Coming Up</p>
        <div className="right-side-bar-anchor">
          <Link to="">
            <i
              className="fa fa-calendar right-side-bar-icons"
              aria-hidden="true"
            ></i>
            View Calendar
          </Link>
        </div>
      </div>
      <hr />
      <div className="schedule-section">
        <div className="section">
          <i
            className="fa fa-calendar schedule-calendar-icon"
            aria-hidden="true"
          ></i>
          <div className="sub-section">
            <Link to=""> Lecture </Link>
            <p className="sub-section-text">CS5610 06 SP23</p>
            <p className="sub-section-text">Sep 9 at 6pm</p>
          </div>
        </div>
        <div className="section">
          <i
            className="fa fa-calendar schedule-calendar-icon"
            aria-hidden="true"
          ></i>
          <div className="sub-section">
            <Link to=""> Lecture </Link>
            <p className="sub-section-text">CS5610 06 SP23</p>
            <p className="sub-section-text">Sep 11 at 6pm</p>
          </div>
        </div>
        <div className="section">
          <i
            className="fa fa-calendar schedule-calendar-icon"
            aria-hidden="true"
          ></i>
          <div className="sub-section">
            <Link to=""> Lecture </Link>
            <p className="sub-section-text">CS5610 06 SP23</p>
            <p className="sub-section-text">Sep 13 at 6pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};
