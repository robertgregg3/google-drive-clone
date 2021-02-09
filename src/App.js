import FilesView from "./Components/FilesView";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import SideIcons from "./Components/SideIcons";
import "./css/App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__main">
        <Sidebar />
        <FilesView />
        <SideIcons />
      </div>
    </div>
  );
}

export default App;
