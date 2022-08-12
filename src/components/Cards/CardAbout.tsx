interface CardProps {
  icon: any;
  title: string;
  subtitle: string;
}

export function CardAbout(props: CardProps) {
  return (
    <div className="mt-8 text-gray-100 min-w-[256px] w-64 h-64 first:bg-purple-700 bg-gray-300 hover:bg-purple-700 transition-colors text-2xl font-semibold flex flex-col justify-end p-4 uppercase ">
      {props.icon}
      <p className="mt-2">{props.title}</p>
      <p className="mt-0">{props.subtitle}</p>
    </div>
  );
}
