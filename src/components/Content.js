import React from "react";
import Categories from "./Categories";
import PostJob,{garr}from "./PostJob";
const Content = () => {
  const [childCategory, setChildCategory] = React.useState();
  const [Experience, setExperience] = React.useState("Any");
  const [Site, setSite] = React.useState("Any");
  const [JobType, setJobType] = React.useState("Any");
  const [details, setDetails] = React.useState(false);
  const [show, setShow] = React.useState({});

  function showDetails(val) {
    let updatedValue = {
      showing: true,
      desc: val.JobDescription,
     
    };
    
    setShow({ ...show, ...updatedValue });

    setDetails(true);
  }
 console.log(garr)
 function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(date) {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('/');
}

  const jobDivs= garr.map((element) => {
    console.log(element.Image)
    return (
      <div className="Job">
        <img className="Job-Image" src={"https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg"} />
        <h3> Job Title: {element.JobTitle}</h3>
        <h3>Company: {element.Company}</h3> 
        <h3> Salary:{element.Salary}$</h3>
        <button
          onClick={() => {
            window.open(
              "mailto:" +
                element.Email +
                "?subject=Subject&body=Body%20goes%20here"
            );
          }}
          className="Apply"
        >
          Apply Now
        </button>
        <button
          onClick={() => {
            showDetails(element);
          }}
          className="Details"
        >
          More Details
        </button>
      </div>
    );
  });

  const childToParent = (childdata) => {
    setChildCategory(childdata);
  };

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "Experience") {
      setExperience(value);
    } else if (name === "Site") {
      setSite(value);
    } else if (name === "Type") {
      setJobType(value);
    }
  }

  return (
    <div className="Main">
      <Categories childToParent={childToParent} />
      <div className="Filters">
        <select
          name="Experience"
          onChange={handleChange}
          className="Experience"
        >
          <option selected disabled>
            Experience Level
          </option>
          <option>Senior</option>
          <option>Junior</option>
          <option>Internship</option>
          <option>Any</option>
        </select>

        <select name="Type" onChange={handleChange} className="JobType">
          <option selected disabled>
            Job Type
          </option>
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Contract</option>
          <option>Any</option>
        </select>

        <select name="Site" onChange={handleChange} className="On-site/Remote">
          <option selected disabled>
            On-site/Remote
          </option>
          <option>Remote</option>
          <option>On-Site</option>
          <option>Hybrid</option>
          <option>Any</option>
        </select>
        <button>Apply Filters</button>
      </div>
      <div className="flex-main">
        {details && (
          <div className="DetailBox">
            <img
              onClick={() => {
                setDetails(false);
              }}
              className="X-sign"
              src="data:image/jpeg;base64,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"
            />
            <h2>Job Details:</h2>
            <p>{show.desc}</p>
            Date:{show.date}
          </div>
        )}

        <div className={details ? "grid-Jobs1" : "grid-Jobs2"}>{jobDivs}</div>
      </div>
    </div>
  );
};

export default Content;
