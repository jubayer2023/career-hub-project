import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/localstorage";
import JobApplied from "./JobApplied";

const Appliedjobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
      const jobsApplied = [];
      for (let id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        jobsApplied.push(job);
      }
      // console.log(jobsApplied, storedJobIds)
      setAppliedJobs(jobsApplied);
    }
  }, []);

  return (
    <div>
      <h3 className="text-3xl text-center font-bold my-8">
        Applied Jobs!!! {appliedJobs.length}{" "}
      </h3>
      
      <details className="dropdown mb-32">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </details>

      <div className="">
        {appliedJobs.map((job) => (
          <JobApplied job={job} key={job.id}></JobApplied>
        ))}
      </div>
    </div>
  );
};

export default Appliedjobs;
