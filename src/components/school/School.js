import React from "react";
import { Link } from "react-router-dom";
import "./School.css";
import { MdArticle } from "react-icons/md";
import { BsBookHalf } from "react-icons/bs";
import { GiBookmarklet } from "react-icons/gi";
import Teacch from "../../images/Teaching-pana.png";
import Learn from "./Learn";

const School = () => (
  <div className="school">
    <div className="container">
      <div className="school__heading">
        <h5>How it works</h5>
        <h2>Our School Service</h2>
      </div>
      <div className="school__details">
        <div className="details__info">
          <div className="moniola">
            <p>Elroy</p>
          </div>
          <img src={Teacch} alt="imagehh" className="simage" />
          <Link to="/resources" className="hero-link">
            <button
              type="button"
              className="btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
            >
              LEARN
            </button>
          </Link>
        </div>
        <div className="school__info">
          <Learn
            Icon={MdArticle}
            text="We have God fearing and qualified teachers to bring your children to the next level. "
            Tm="school__article"
          />
          <Learn
            Icon={BsBookHalf}
            text1="enrol "
            text="Our children are taught and breed with the correct syllabus so they wouldn't lack behind. "
            Tm="school__article2"
          />
          <Learn
            Icon={GiBookmarklet}
            text="Our children are allowed to undergo private tutoring with their teachers for any course they are not good at "
            Tm="school__article3"
          />
          <Learn
            Icon={MdArticle}
            text="Our school do not only teach our children courses but also trade like tailoring,etc to build up skills"
            Tm="school__article4"
          />
        </div>
      </div>
    </div>
  </div>
);

export default School;
