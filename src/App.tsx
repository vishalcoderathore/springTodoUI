import { SecurityProvider } from './components/SecurityProvider'; // ensure the path is correct
import TodoApp from './components/TodoApp';
import './App.css';

function App(): JSX.Element {
  return (
    <SecurityProvider>
      <TodoApp />
    </SecurityProvider>
  );
}

export default App;
