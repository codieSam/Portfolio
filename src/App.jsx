import MainProfile from "./components/MainProfile"
import MyProfile from "./components/MyProfile"
import RightMenu from "./components/RightMenu"


function App() {
  
  return (
   <div className="bg-zinc-900 backdrop-opacity-90 min-h-screen h-full w-full text-gray-100">
    <div className="pt-8 px-8 flex flex-row justify-between">
    {/* Left area (MyProfile) */}

    <MyProfile />

    {/* Middle (Abut me) */}

    <MainProfile />

    {/* Right (Menu Buttoms) */}

    <RightMenu />

    </div>
   </div>
  )
}

export default App
