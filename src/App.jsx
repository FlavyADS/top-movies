import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div
      className="m-0 h-screen w-screen md:max-lg:flex flex
      bg-[url('./src/assets/starwars.png')] bg-cover "
    >
      <div
        className="h-screen w-screen flex flex-col xl:bg-gradient-to-r from-black 
        from-50% to-transparent overflow-auto sm:bg-gradient-to-tr"
      >
        <Header />
        <div className="flex flex-grow justify-center items-center xl:w-1/2 3xl:w-1/3 sm:w-full ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
