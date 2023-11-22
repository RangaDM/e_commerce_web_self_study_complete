

const NoURL = () => {
    return (
        <div
          className={` w-screen h-screen flex flex-col items-center justify-center`}
        >
          <h1 className=" text-6xl font-bold">404</h1>
          {/* <p>The requested URL {pathname} was not found on this server.</p> */}
        </div>
      );
}

export default NoURL