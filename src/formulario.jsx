function Formulario ({botao}){
    return (
        
        <form>
            <input type="text" placeholder="Nome" className="form-control"></input>
            <input type="text" placeholder="Marca"className="form-control"></input>
            
            {
                botao
                ?
                <input type="button" value="Cadastrar" className="btn-primary"></input>
                :
                <div>
                    <input type="button" value="Alterar"className="btn-warning"></input>
                    <input type="button" value="Remover"className="btn-danger"></input>
                    <input type="text" value="Cencelar"className="btn-secundary"></input>

                </div>
            }
        
        </form>

    )
}

export default Formulario;