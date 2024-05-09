import { useRecoilValue } from "recoil";
import "./App.css";
import Auth from "./pages/Auth";
import userAtom from "./atoms/userAtom";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  const user = useRecoilValue(userAtom);
  return (
    <div>
      <Routes>
        <Route path="/" element={user ? <Dashboard /> : <Auth />} />
      </Routes>
    </div>
  );
}

export default App;
