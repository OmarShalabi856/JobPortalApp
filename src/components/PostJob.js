import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export let garr = [];
export default function PostJob() {
  const [JobOb, setJobOB] = React.useState({ JB: [] });
  function submitJob(JobProp) {
    let { JB } = JobOb;
    JB.push(JobProp);
    let arr = JB;
    console.log(arr);
    setJobOB({ JB: arr });
    garr = arr;
    console.log(garr);
  }

  const [Job, setJob] = React.useState({
    JobTitle: "",
    Image: "",
    Company: "",
    Salary: "",
    JobDescription: "",
    Type: "",
    Exp: "",
    Site: "",
    Category: "",
  });

  function handleTitle(e) {
    setJob((prevState) => ({ ...prevState, JobTitle: e.target.value }));
  }
  function handleImg(e) {
    const [file] = e.target.files;
    setJob((prevState) => ({ ...prevState, Image: URL.createObjectURL(file) }));
  }
  function handleCompany(e) {
    setJob((prevState) => ({ ...prevState, Company: e.target.value }));
  }
  function handleSalary(e) {
    let bool=true
    for (let i=0;i<e.target.value.length;i++){
if(e.target.value.charCodeAt(i)<48 || e.target.value.charCodeAt(i)>57){
  bool=false
  alert("Numbers Only!")
}
    }

    if(bool){
    setJob((prevState) => ({ ...prevState, Salary: e.target.value }));
    }
  }
  function handleJobDesc(e) {
    setJob((prevState) => ({ ...prevState, JobDescription: e.target.value }));
  }
  function handleImg(e) {
    setJob((prevState) => ({ ...prevState, Image: e.target.value }));
  }
  function handleJobType(e) {
    setJob((prevState) => ({ ...prevState, Type: e.target.value }));
  }
  function handleSite(e) {
    setJob((prevState) => ({ ...prevState, Site: e.target.value }));
  }
  function handleExp(e) {
    setJob((prevState) => ({ ...prevState, Exp: e.target.value }));
  }
  function handleCategory(e) {
    setJob((prevState) => ({ ...prevState, Category: e.target.value }));
  }
  const JobCategories = [
    "Agriculture",
    "Architecture",
    " Arts",
    "Communication",
    "Business and Finance",
    "Education",
    "Health Science",
    "IT",
    "Engineering",
  ];
  const cats = JobCategories.map((element) => {
    return <option>{element}</option>;
  });
  const [Sub, setSub] = React.useState(false);
  

    
 

  const [load, setLoad] = React.useState(false);
  const [load1, setLoad1] = React.useState(false);
  const [load2, setLoad2] = React.useState(false);

  function setLoader() {
    if (Job.JobTitle != "" && Job.Company != "" && Job.Salary != "") {
      setLoad(true);
      setLoad1(true);
    } else {
      alert("Fill All Fields!");
    }
    if (load1) {
      if (
        Job.Type != "" &&
        Job.JobDescription != "" &&
        Job.Site != "" &&
        Job.Exp != ""
      ) {
        setLoad1(false);
        setLoad2(true);
      } else {
        alert("Fill All Fields!");
      }
    }
  }
  const navigate = useNavigate();
  return (
    <div className="post-flex">
      <Navbar />
      <div className="postDiv">
     
        <form onSubmit={(event)=>{
              
              event.preventDefault();
            
                if(Job.Category!="" && Job.Image!=""){
                  submitJob(Job);
                 
                  navigate('/')
                }
                else{
                  alert("Fill All Fields!")
                }
              }
          }>
          <div style={!load?{ display: "flex", flexDirection: "column" ,width:"300px",height:"200px"}:{display:"none"}}>
            {!load && (
              <input
                value={Job.JobTitle}
                onChange={(e) => handleTitle(e)}
                placeholder="Job Title..."
                type="text"
              />
            )}
            <br />
            {!load && (
              <input
                value={Job.Company}
                onChange={(e) => handleCompany(e)}
                placeholder="Company Name..."
                type="text"
              />
            )}{" "}
            <br />
            {!load && (
              <input
                value={Job.Salary}
                onChange={(e) => handleSalary(e)}
                placeholder="Salary in USD..."
                type="text"
              />
            )}{" "}
            <br />
            <br />
            </div>
            <div style={load1?{ display: "flex", flexDirection: "column" ,width:"300px",height:"300px",margin:"auto"}:{display:"none"}}>
            {load1 && (
              <select
                name="Experience"
                onChange={(e) => handleExp(e)}
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
            )}
            <br />
            <br />
            {load1 && (
              <select
                name="Type"
                onChange={(e) => handleJobType(e)}
                className="JobType"
              >
                <option selected disabled>
                  Job Type
                </option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
                <option>Any</option>
              </select>
            )}
            <br />
            <br />
            {load1 && (
              <select
                name="Site"
                onChange={(e) => handleSite(e)}
                className="On-site/Remote"
              >
                <option selected disabled>
                  On-site/Remote
                </option>
                <option>Remote</option>
                <option>On-Site</option>
                <option>Hybrid</option>
                <option>Any</option>
              </select>
            )}
            <br />
            <br />
            {load1 && (
              <textarea
                rows="4"
                cols="50"
                className="text-desc"
                value={Job.JobDesc}
                onChange={(e) => handleJobDesc(e)}
                placeholder="Job Description..."
                type="text"
              />
            )}
            <br />
          </div>
          <div style={load2?{display:"flex",flexDirection:"column",height:"400px",width:"300px",marginTop:"100px"}:{display:"none"}}>
          {load2 && (
            <div className="LastLoad">
              <select
                onChange={(e) => {
                  handleCategory(e);
                }}
              >
                {cats}
              </select>
              <br />
              <br />
              <div>
                <label for="profile_pic">Choose Image to upload</label>
                <br />
                <input
                  onChange={(e) => {
                    handleImg(e);
                  }}
                  type="file"
                  id="profile_pic"
                  name="profile_pic"
                  accept=".jpg, .jpeg, .png"
                />
              </div>
              <div>
                <br />
                <br />
                <br />
                <br />
              </div>
              <br />
              <br />
              <button className="SubmitJob" type="submit" >
                Submit Job{" "}
              </button>
              </div>
             
              
            
            
          )}
           </div>
          {!load2 && (
            <img
              onClick={setLoader}
              style={{ height: "30px", width: "50px",display:"block",margin:"auto" }}
              src="https://www.pngitem.com/pimgs/m/34-345269_green-right-arrow-transparent-png-image-green-arrow.png"
            />
          )}
        </form>
      </div>
    </div>
  );
}
