import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalstyle";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewEntry from "./pages/NewEntry";
import NewOut from "./pages/NewOut";
import Register from "./pages/Register";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/nova-entrada" element={<NewEntry />} />
        <Route path="/nova-saida" element= {<NewOut />} />
      </Routes>
    </BrowserRouter>
  );
}
