import { useEffect, useState } from "react";
import Job from "../Job/Job";

const Featuredjobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("./jobs.json")
      .then((response) => response.json())
      .then((data) => setJobs(data));
  }, []);
  // console.log(jobs[0])
  return (
    <div>
      <div>
        <h3 className="text-5xl text-center">
          Featured Jobs......{jobs.length}
        </h3>
        <p className="text-lg font-semibold text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam harum
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 my-16">
        {jobs.slice(0, dataLength).map((job) => (
          <Job job={job} key={job.id}></Job>
        ))}
        <div className={dataLength === jobs.length ? "hidden" : ""}>
          <button className="btn-primary rounded p-2 font-bold text-lg" onClick={() => setDataLength(jobs.length)}>
            Show All Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featuredjobs;
