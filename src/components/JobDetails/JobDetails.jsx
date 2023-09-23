import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../utility/localstorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  // console.log(id, jobs);
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = job;

  const handleApplyBtn = () => {
    saveJobApplication(idInt);
    toast("Job applied!!!");
  };
  return (
    <div>
      <h3 className="text-center font-bold text-3xl my-8">Job Details</h3>

      <div className="grid grid-cols-4 gap-4">
        {/* left Div */}
        <div className="col-span-3 shadow-sm rounded-sm bg-neutral-50 p-4">
          <div className="text-gray-500 text-sm space-y-4">
            <p>
              <span className="text-lg font-semibold text-black">
                Job Description:{" "}
              </span>
              {job_description}
            </p>
            <p>
              <span className="text-lg font-semibold text-black">
                Job Responsiblity:{" "}
              </span>
              {job_responsibility}
            </p>
            <p>
              <span className="text-lg font-semibold text-black">
                Educational Requirements:
              </span>
              <p>{educational_requirements}</p>
            </p>
            <p>
              <span className="text-lg font-semibold text-black">
                Experiences:
              </span>
              <p>{experiences}</p>
            </p>
          </div>
        </div>
        {/* right div */}
        <div className="p-4 bg-blue-50 rounded-sm shadow-sm">
          <div className="text-[13px] space-y-4">
            <h3 className="border-b-2 border-neutral-300 py-2 text-xl font-bold text-black">
              Job Details
            </h3>
            <p>
              <span className="text-black">Salary: </span>
              {salary} <span>(Per Month)</span>
            </p>
            <p>
              <span className="text-black">Job Title: </span>
              {job_title}
            </p>
          </div>
          <div className="text-[13px] space-y-3 pb-0">
            <h3 className="border-b-2 border-neutral-300 py-2 text-xl font-bold text-black">
              Contact Information
            </h3>
            <p>
              <span className="text-black">Phone : </span>
              {contact_information.phone}
            </p>
            <p>
              <span className="text-black">Email : </span>
              {contact_information.email}
            </p>
            <p>
              <span className="text-black">Address : </span>
              {contact_information.address}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleApplyBtn}
          className="w-[245px] hover:bg-fuchsia-950 my-2 bg-sky-600 p-2 rounded-lg text-white"
        >
          Apply Now
        </button>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default JobDetails;
