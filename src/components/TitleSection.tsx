export function TitleSection(props: { title: string }) {
  return (
    <h2 className="mt-4 text-3xl font-semibold text-purple-700">
      {props.title}
    </h2>
  );
}
