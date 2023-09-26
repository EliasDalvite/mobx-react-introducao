import Formulario from './componentes/Formulario';
import { useNavigate } from "react-router-dom";
import MobxObj from './mobx/MobxObj';
import ListaObj from './mobx/ListaObj'

function Form() {
    const navigate = useNavigate();
    const goToNextRoute = () => {
        navigate(`/avancaRota`);
    };
    return (
        <div>
            <Formulario obj={MobxObj}/>
            <button onClick={goToNextRoute}>Continuar</button>
            <ListaObj obj={MobxObj} />
        </div>
    )
}

export default Form;