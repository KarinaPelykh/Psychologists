import { Hourglass } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh] my-[auto] relative ">
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
