import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {id, logo, job_title, company_name,remote_or_onsite, location, job_type, salary} = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl p-4 bg-neutral-50">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p> {company_name} </p>
        <div className="flex">
            <button className="px-5 py-2 rounded border-2 mr-4 font-bold border-blue-600 text-green-800"> {remote_or_onsite} </button>
            <button className="px-5 py-2 rounded border-2 mr-4 font-bold border-blue-600 text-green-800"> {job_type} </button>
        </div>
        <div className="card-actions">
          <Link to={`/job/${id}`}>
          <button className="btn btn-primary"> View Details </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
