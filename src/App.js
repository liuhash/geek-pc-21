import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
function App() {
  return (
      <BrowserRouter>
          {/*<Link to='/login'>登录</Link>*/}
              {/*<Link to='/home'>首页</Link>*/}

                <Routes>
                    <Route path='/' element={<Navigate to="/login" ></Navigate>}></Route>
                    <Route path='/home/*' element={<Layout/>}></Route>
                    <Route path='/login' element={<Login/>}></Route>
                </Routes>
      </BrowserRouter>

  );
}

export default App;
