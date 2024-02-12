import { useEffect, useState } from 'react'
import './App.css'
import Formulario from './formulario'
import Tabela from './tabela'

function App() {

  //objeto produto como se fosse classe
  const produto ={
    codigo : 0,
    nome : '',
    marca: ''
  }
 

  const [btncadastrar, setbtnCadastrar] = useState(true);

  //estado do meu vetor de produtos
  const [produtos, setProdutos] = useState([]);

  const [objProduto,setObjProduto] = useState(produto);

    // useEFFECCT usado quando componente é montado
    // [] fazer requisiçao unica vez
    useEffect (()=>{
      fetch("http://localhost:8081/listar")
      .then(retorno=>retorno.json())
      .then(retorno_convertido =>setProdutos(retorno_convertido))
    }, []);
  return (
    <>
      <div>
       <p>{JSON.stringify(objProduto)  }</p>
      <Formulario  botao={btncadastrar} />
      <Tabela vetor={produtos}/>
      
      </div>
    </>
  )
}

export default App
