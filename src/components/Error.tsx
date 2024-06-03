import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <p className="text-[20px]">Not found</p>
      <p className=" text-[20px] italic">
        Something went wrong you cant return for this link,
        <Link className="text-[20px] text-[#FC832C]" to="/">
          Home
        </Link>
      </p>
    </div>
  );
};
