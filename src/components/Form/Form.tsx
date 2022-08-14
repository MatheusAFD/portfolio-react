import { Connect } from "./Connect";
import { EmailForm } from "./EmailForm";

export function Form() {
  return (
    <section
      className="flex flex-col md:flex-row justify-between gap-5 max-w-6xl m-auto p-4 mt-10 md:mt-28 mb-20 z-0"
      id="contato"
      data-aos="fade-right"
    >
      <Connect />
      <EmailForm />
    </section>
  );
}
