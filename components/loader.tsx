// IMPORTS -
import { ClipLoader } from "react-spinners";

export const Loader = () => {
  return (
    <div className="flex justify-center items-center h-[55vh]">
      <ClipLoader size={50} />
    </div>
  );
};
