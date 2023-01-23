import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo"
import Button from "../components/Button";
import Input from "../components/Input";
import { useCallback, useState } from "react";
import axios from 'axios';  

export default function Register() {

  const [ form, setForm ] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [ error, setError ] = useState(null);

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/register', form);
      navigate('/');
    } catch (error) {
      setError(error.response.data);
    }
  }

  const handleInputChange = useCallback(({ target: { name, value } }) => setForm({
    ...form,
    [name]: value,
  }), [form, setForm])

    return (
      <>
       <Logo/>

       <form onSubmit={onSubmit}>
        <Input type="text" name="name" id="name" placeholder="Nome" onChange={handleInputChange} />
        <Input type="email" name="email" id="email" placeholder="E-mail"  onChange={handleInputChange} />
        <Input type="password" name="password" id="password" placeholder="Senha"  onChange={handleInputChange}/>
        <Input type="password" name="password_confirmation" id="password_confirmation" placeholder="Confirme a senha" onChange={handleInputChange}/>
        <Button type="submit">Cadastrar</Button>
        {error ? (<p className="error">{error}</p>) : false}
        <p>Já tem uma conta? <Link to="/">Entre agora!</Link></p>
      </form>
    </>
    
    )
  }