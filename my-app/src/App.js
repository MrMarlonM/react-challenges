import css from './App.module.css';
import Sidebar from "./components/Sidebar";
import NavBarForm from './components/NavBarForm';
import Content from './components/Content';
import ControlledFormHooks from './components/ControlledFormHooks';
import UseStateWithArrays from './components/UseStateWithArrays';
import UseStateWithObjects from './components/UseStateWithObjects';
import UseEffectCounter from './components/UseEffectCounter';
import UseEffectCounterContainer from './components/UseEffectCounterContainer';
import ContentHooks from './components/ContentHooks';

function App() {
  return (
    <div className={css.App}>
      <NavBarForm/>
      <Sidebar/>
      <ContentHooks/>
      {/* <Content/> */}
{/*   <ControlledFormHooks/> */}
{/*   <UseStateWithArrays/> */}
{/*   <UseStateWithObjects/> */}
{/*   <UseEffectCounter/> */}
{/*   <UseEffectCounterContainer/> */}
    </div>
  );
}

export default App;