import { About } from "../components/About/About";
import { Form } from "../components/Form/Form";
import { Header } from "../components/Header/Header";
import { Home } from "../components/Home/Home";
import { Projects } from "../components/Projects/Projects";
import { Service } from "../components/Service";

export function Portfolio() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Service />
      <Projects />
      <Form />
    </>
  );
}
