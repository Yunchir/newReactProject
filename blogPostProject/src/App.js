import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";
import BasicExample from "./components/BasicExample";
import Basic from "./components/Basic";
import Footer from "./components/Footer";
import MainNAvbar from "./components/MainNavbar";

function App() {
  return (
    <div className="App container">
      <Navbar />
      <Main />
      <MainNAvbar />
      <BasicExample />
      <Basic />
      <Footer />
    </div>
  );
}

export default App;
