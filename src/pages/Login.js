import { Link } from "react-router-dom";
import Logo from "../components/Logo"

import Button from "../components/Button"
import Input from "../components/Input"
export default function Login() {
    return (
      <>
        
        <Logo/>
        <form onSubmit={null}>
        <Input type="email" name="email" id="email" placeholder="E-mail" />
        <Input type="password" name="password" id="password" placeholder="Senha" />
        <Button type="submit">Entrar</Button>
        <p>Primeira vez? <Link to="/cadastro">Cadastre-se!</Link></p>
      </form>
      </>
    )
  }