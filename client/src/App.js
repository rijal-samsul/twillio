import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Prejoin from "./pages/Prejoin";
import Check from "./pages/check";
import Room from "./pages/Room";
function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='/prejoin' element={<Prejoin/>}/>
      <Route exact path='/check' element={<Check/>}/>
      <Route exact path='/room' element={<Room/>}/>
    </Routes>
  );
}

export default App;
