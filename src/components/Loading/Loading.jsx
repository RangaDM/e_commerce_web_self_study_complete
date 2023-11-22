import style from "./loading.module.css";
const Loading = () => {
  return (
    <div className="relative top-0 left-0 w-full h-screen flex items-center gap-2 bg-white justify-center z-[101]">
      <div className={style.loading_spinner}></div>
      Loading...
    </div>
  );
};

export default Loading;
