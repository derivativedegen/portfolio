import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Project from "../components/project.js";
import { projectData } from "../projectData";
import { selectPage, setPage } from "../redux/data.js";
import "./projects.css";

export default function Projects(props) {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  page !== "projects" && dispatch(setPage("projects"));

  const [projectID, setProjectID] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const projectID = e.target.id;
    setProjectID(projectID);
  };

  return (
    <div className="col-xs-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 mb-5 pb-5">
      <div className="row justify-content-center pb-4">
        <div className="dropdown">
          <button
            className="btn btn-retro dropdown-toggle textspaced textlarge"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Mission Select
          </button>
          <div
            className="dropdown-menu raleway text-center"
            aria-labelledby="dropdownMenuButton"
          >
            {projectData.map((project, index) => {
              return (
                <button
                  className="dropdown-item"
                  onClick={handleClick}
                  id={index}
                  key={index}
                >
                  {project.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="pagebox shadow-lg row justify-content-center pr-0 pl-0">
        {projectID ? (
          <Project data={projectData[projectID]} />
        ) : (
          <h2 className="col-12 text-center textyellow textspaced pt-5 mt-5">
            Please select a mission above.
          </h2>
        )}
      </div>
    </div>
  );
}
