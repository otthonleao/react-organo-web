import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";
import { useState } from 'react'

const Formulario = (props) => {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({ nome, cargo, imagem, time})
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>

        <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" valor={nome} aoAlterado={valor => setNome(valor)}></CampoTexto>
        <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" valor={cargo} aoAlterado={valor => setCargo(valor)}></CampoTexto>
        <CampoTexto  label="Imagem" placeholder="Insira uma imagem" valor={imagem} aoAlterado={valor => setImagem(valor)}></CampoTexto>
        <ListaSuspensa label="Times" itens={props.times} obrigatorio={true} valor={time} aoAlterado={valor => setTime(valor)}></ListaSuspensa>
        <Botao>Criar Card</Botao>  {/* Nesse caso a propriedade está sendo passada como 'children', assim posso incluir uma img ou icone tal como no HTML */}
      </form>
    </section>
  );
};

export default Formulario;
