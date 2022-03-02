import { RecoilRoot } from 'recoil';
import './App.css';
// import CharacterCounter from './components/RecoilExample/CharacterCounter';
// import FontButton from './components/RecoilExample/FontButton';
// import Text from './components/RecoilExample/Text';
import TodoList from './components/RecoilExample/Todo/TodoList';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        {/* <FontButton/>
        <Text/>
        <CharacterCounter/> */}
        <TodoList/>
      </RecoilRoot>
    </div>
  );
}

export default App;
