import { observer } from "mobx-react"

const ListaObj = observer(({ obj }) => {
    return (
        <div>
            <h2> Usuarios cadastrados:</h2>
            {obj.usuarios.length > 0 ? (
                <ul>
                    {obj.usuarios.map((usuario) => (
                        <li key={usuario.id}>   
                            {usuario.id}
                            {" - "}
                            {usuario.nomeCompleto}
                            {" - "}
                            {usuario.email} <br/>
                        </li>
                    ))}
                </ul>
            ) : (
                <div>Nenhum usuário cadastrado até o momento</div>
            )}
        </div>
    );
});

export default ListaObj;