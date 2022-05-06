import style from "../styles/Loader.module.css";
import ReactLoading from "react-loading";

const Loader = () => {
  return (
    <>
      <div className={style.spinnerloader}>
        <ReactLoading
          type="spinningBubbles"
          color="#3b5de7"
          height={100}
          width={100}
        ></ReactLoading>
      </div>
    </>
  );
};
export default Loader;
