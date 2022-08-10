import { Connect } from "./Connect";
import { EmailForm } from "./EmailForm";

export function Form() {
  return (
    <section className="flex justify-between max-w-6xl m-auto p-4 mt-36">
      <Connect />
      <EmailForm />
    </section>
  );
}
