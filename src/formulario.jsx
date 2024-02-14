function Formulario ({botao,eventoTeclado, cadastrar,cancelar, objLimpar, remover}){
    return (
        
        <form>
            <input type="text" value={objLimpar.nome} onChange={eventoTeclado} name='nome' placeholder="Nome" className="form-control"></input>
            <input type="text" value={objLimpar.marca} onChange={eventoTeclado} name='marca' placeholder="Marca"className="form-control"></input>
            
            {
                botao
                ?
                <input type="button" onClick={cadastrar} value="Cadastrar" className="btn-primary"></input>
                :
                <div>
                    <input type="button" value="Alterar"className="btn-warning"></input>
                    <input type="button" onClick={remover} value="Remover"className="btn-danger"></input>
                    <input type="button" onClick={cancelar} value="Cencelar"className="btn-secundary"></input>

                </div>
            }
        
        </form>

    )
}

export default Formulario;