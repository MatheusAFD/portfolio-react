export function ItemNav(props: {
  linkTo?: string;
  title: string;
  ClassName?: string;
}) {
  return (
    <a href={props.linkTo}>
      {" "}
      <li className={`hover:text-purple-700 cursor-pointer ${props.ClassName}`}>
        {props.title}
      </li>
    </a>
  );
}

export function Header() {
  return (
    <header>
      <nav className="p-4 bg-dark-900 text-gray-100 flex justify-between items-center">
        <h1 className="ml-32 text-purple-700 font-semibold text-xl">
          Matheus Araújo
        </h1>
        <ul className="flex gap-6 mr-32 text-base font-semibold">
          <ItemNav title="Home" ClassName="text-purple-700" />
          <ItemNav title="About me" />
          <ItemNav title="Projects" />
          <ItemNav title="Contact" />
        </ul>
      </nav>
    </header>
  );
}
