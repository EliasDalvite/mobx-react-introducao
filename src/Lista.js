import { useNavigate } from "react-router-dom";
import MobxObj from './mobx/MobxObj';
import ListaObj from './mobx/ListaObj'

function Lista() {
    const navigate = useNavigate();
    const goToNextRoute = () => {
        navigate(`/`);
    };
    return (
        <div>
            <button onClick={goToNextRoute}>Voltar</button>
            <button type="button" onClick={ () => MobxObj.limpaUsuarios()}>
          Limpar
        </button>
            <ListaObj obj={MobxObj} />
        </div>
    )
}

export default Lista;