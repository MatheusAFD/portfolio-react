interface InputFormProps {
  placeholder: string;
  name: string;
  type: string;
}

export function InputForm(props: InputFormProps) {
  return (
    <input
      type={props.type}
      className="bg-[#31313f] p-4 w-full  rounded-lg mt-4 focus:outline-purple-700 outline-none"
      placeholder={props.placeholder}
      name={props.name}
    />
  );
}
