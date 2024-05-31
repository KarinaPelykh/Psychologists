import { Hourglass } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div className="flex justify-center min-h-screen  items-center my-[auto] relative ">
      <div className="">
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          colors={["#fc832c", " #fc832c"]}
        />
      </div>
    </div>
  );
};
