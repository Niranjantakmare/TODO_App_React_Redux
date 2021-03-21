import logo from './logo.svg';
import './App.css';
import VisibleTodoList from './components/VisibleTodoList';
import AddTodos from './components/AddTodos';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <AddTodos></AddTodos>
      <VisibleTodoList></VisibleTodoList>
      <Footer></Footer>
    </div>
  );
}

export default App;
