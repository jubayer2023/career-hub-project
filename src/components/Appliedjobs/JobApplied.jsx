const JobApplied = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="bg-neutral-50 text-black p-4 space-y-2 mb-4 flex justify-between items-center border-2 border-lime-400 rounded-md">
      {/* logo + description */}
      <div className="flex items-center gap-4 ">
        <div className="bg-neutral-300 text-center w-[150px] h-[150px] flex items-center justify-center p-5 rounded-md">
          <img src={logo} alt="" />
        </div>
        <div className="text-[13px] font-semibold text-neutral-600 space-y-2">
          <h3 className="text-xl font-bold">{job_title}</h3>
          <p>{company_name}</p>
          <div className="flex">
            <button className="px-5 py-2 rounded border-2 mr-4 font-bold border-blue-600 text-green-800">
              {remote_or_onsite}
            </button>
            <button className="px-5 py-2 rounded border-2 mr-4 font-bold border-blue-600 text-green-800">
              {job_type}
            </button>
          </div>
          <p>
            <span>{location}</span> <span>Salary: {salary}</span>
          </p>
        </div>
      </div>

      {/* button */}
      <div className="">
        <button className="bg-blue-500 text-white font-semibold text-sm p-2 rounded-md">
          View Detais
        </button>
      </div>
    </div>
  );
};

export default JobApplied;
