import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex max-w-screen-md mx-auto h-screen items-center justify-center">
      <div className="text-3xl font-bold text-center">
        <h3>Oops !!!</h3>
        <p>Page Not Found</p>
        <Link to={"/"}> <button className="btn btn-sm bg-green-600 text-white">Go Back To Home</button> </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
