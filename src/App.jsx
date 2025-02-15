import About from "./components/About";
import MainProfile from "./components/MainProfile";
import MyProfile from "./components/MyProfile";
import Projects from "./components/Projects";
import RightMenu from "./components/RightMenu";

function App() {
  return (
    <div className="bg-zinc-900 min-h-screen h-full w-full text-gray-100">
      <div className="pt-8 px-8 flex flex-row justify-between space-x-10">
        {/* Left area (MyProfile) */}

        <MyProfile />

        <div className="ml-[370px]"></div>

        {/* Middle (Abut me) */}

        <div className="flex flex-col space-y-16 ">
          <MainProfile />

          <Projects />

          <About />
        </div>

        {/* Right (Menu Buttoms) */}

        <RightMenu />
      </div>
    </div>
  );
}

export default App;
