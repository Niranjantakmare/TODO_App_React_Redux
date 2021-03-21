import "./App.css";
import Todo from "./containers/Todo";

function App() {
  return (
    <div className="app">
      {/* <nav className="app_header">
        <section>
          <h1 className="appTitle">React-Redux Counter Example</h1>
        </section>
      </nav> */}
      <h2 className="title">Things to do</h2>
      <div className="app_body">
        <Todo></Todo>
      </div>
    </div>
  );
}

export default App;
