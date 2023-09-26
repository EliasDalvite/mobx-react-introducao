import './App.css';
import ListaObj from './mobx/ListaObj'
import MobxObj from './mobx/MobxObj';
import Formulario from './componentes/Formulario';

function App() {
  return (
    <div>
    <Formulario obj={MobxObj}/>
    <ListaObj obj={MobxObj} />
    </div>
  );
}

export default App;
