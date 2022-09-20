import { FormEvent, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { InputForm } from "../InputForm";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

export function EmailForm() {
  const [loading, setLoading] = useState(false);
  const [sucessMessage, setSucessMessage] = useState(false);
  const form = useRef<any>();

  async function sendEmail(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_KEY
      );

      form.current.reset();
      setLoading(false);
      setSucessMessage(true);

      return response;
    } catch (err) {
      return err;
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (sucessMessage === true) {
      setTimeout(() => {
        setSucessMessage(false);
      }, 4000);
    }
  }, [sucessMessage]);

  return (
    <form
      onSubmit={sendEmail}
      ref={form}
      action=""
      className="flex flex-col justify-end text-gray-100"
    >
      <p className="text-gray-100 text-2xl font-medium">
        Formulário para contato
      </p>

      <InputForm type="text" placeholder="Nome:" name="from_name" />
      <InputForm type="email" placeholder="E-mail:" name="from_email" />

      <textarea
        placeholder="Mensagem:"
        name="message"
        className="bg-[#31313f] p-4 w-full rounded-lg mt-4 focus:outline-purple-700 outline-none"
      />
      <div className="flex gap-4 items-center">
        <input
          disabled={loading}
          type="submit"
          value={loading !== true ? "Enviar" : "Enviando"}
          className="flex place-self-start items-center px-14 py-3 mt-4 cursor-pointer transition-colors rounded-lg bg-purple-700 hover:bg-purple-800 hover:text-gray-200 disabled:opacity-50"
        />
        {sucessMessage && (
          <p className="mt-4 text-white animate-pulse">
            Mensagem enviada com sucesso!
          </p>
        )}
      </div>
    </form>
  );
}
