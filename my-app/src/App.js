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
import HTTPRequest from './components/HTTPRequest';
import HTTPPost from './components/HTTPPost';
import HTTPHooks from './components/HTTPHooks';
import ContentAPI from './components/ContentAPI';
import PostItemAPI from './components/PostItemAPI';
import ContentAPIHooks from './components/ContentAPIHooks';

function App() {
  return (
    <div className={css.App}>
      <NavBarForm/>
      <Sidebar/>
      {/* <ContentHooks/> */}
      {/* <Content/> */}
      {/* <ControlledFormHooks/> */}
      {/* <UseStateWithArrays/> */}
      {/* <UseStateWithObjects/> */}
      {/* <UseEffectCounter/> */}
      {/* <UseEffectCounterContainer/> */}
      {/* <HTTPRequest/> */}
      {/* <HTTPPost/> */}
      {/* <HTTPHooks /> */}
      {/* <ContentAPI /> */}
      <ContentAPIHooks />
    </div>
  );
}

export default App;