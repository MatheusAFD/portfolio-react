import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function InputForm(props: InputProps) {
  return (
    <input
      {...props}
      className="bg-[#31313f] p-4 w-full  rounded-lg mt-4 focus:outline-purple-700 outline-none"
    />
  );
}
