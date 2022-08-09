import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Service } from "./components/Service";
import { Projects } from "./components/Projects/Projects";
import { About } from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Service />
      <Projects />
    </div>
  );
}

export default App;
