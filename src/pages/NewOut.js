import Header from "../components/Header";
import Button from "../components/Button";
import Input from "../components/Input";

export default function NewOut() {
  return (
    <>
      <Header>
        <h1>Nova entrada</h1>
      </Header>

      <form onSubmit={null}>
        <Input type="text" name="value" id="value" placeholder="Valor" />
        <Input
          type="text"
          name="description"
          id="description"
          placeholder="Descrição"
        />
        <Button type="submit">Salvar saída</Button>
      </form>
    </>
  );
}
