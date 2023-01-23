import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalstyle";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewEntry from "./pages/NewEntry";
import NewOut from "./pages/NewOut";
import Register from "./pages/Register";
import { AuthProvider } from "./contexts/auth.js";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route element={<AuthProvider />}>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/nova-entrada" element={<NewEntry />} />
          <Route path="/nova-saida" element={<NewOut />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
