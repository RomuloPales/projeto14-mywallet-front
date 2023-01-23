import { useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function NewOut() {

  const [ form, setForm ] = useState({
    value: 0.00,
    description: "",
  });
  const [ error, setError ] = useState(null);

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/movements/output', form);
      navigate('/home');
    } catch (error) {
      setError(error.response.data);
    }
  }
  return (
    <>
      <Header>
        <h1>Nova Saida</h1>
      </Header>

      <form onSubmit={onSubmit}>
        <Input type="text" name="value" id="value" placeholder="Valor" onChange={e => setForm({...form, value: Number(e.target.value.replace(',', '.'))})} />
        <Input
          type="text"
          name="description"
          id="description"
          placeholder="Descrição" onChange={e => setForm({...form, description: e.target.value})}
        />
           {error ? (<p className="error">{error}</p>) : false}
        <Button type="submit">Salvar saída</Button>
      </form>
    </>
  );
}
