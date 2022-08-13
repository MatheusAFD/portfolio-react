export function ItemNav(props: {
  linkTo?: string;
  title: string;
  ClassName?: string;
}) {
  return (
    <li
      className={`hover:text-purple-700 ${props.ClassName} first:text-purple-700`}
    >
      <a href={props.linkTo}>{props.title}</a>
    </li>
  );
}
