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

  //obter dados do formulario EVENTOS
  const aoDigitar=(e)=> {
    setObjProduto({...objProduto, [e.target.name]:e.target.value})
  }

  //cadastrar produto
  const cadastrar = () => {
    fetch("http://localhost:8081/cadastrar", {
      method:'post',
      body:JSON.stringify(objProduto),
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json',
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {

      //ataulizar lista para novo produto
        if(retorno_convertido.mensagem !== undefined){
          alert(retorno_convertido.mensagem);
        }else{
          // pega todos os produtos e adiciona na api
          setProdutos([...produtos, retorno_convertido]);
          alert('Produto cadastrado com sucesso');
          LimparFormulario();
        }
    })
  }
  //selecionar produto
  const SelecionarP = (indice) => {
      setObjProduto(produtos[indice]);
      setbtnCadastrar(false);// quero alterar ativo outros botoes
  }

  // limpar formulario
  const LimparFormulario =() =>{
      setObjProduto(produto); // modelos sempre limpo do "produto"
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
       {/*<p>{JSON.stringify(objProduto)  }</p>*/}
      <Formulario  botao={btncadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} objLimpar={objProduto}/>
      <Tabela vetor={produtos} selecionar={SelecionarP}/>
      
      </div>
    </>
  )
}







export default App
