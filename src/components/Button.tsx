import classNames from "classnames";

interface ButtonProps {
  title: string;
  linkTo: string;
  children?: any;
  size: "small" | "large";
  type: "primary" | "secundary";
}

export function Button(props: ButtonProps) {
  return (
    <a
      href={props.linkTo}
      className={classNames(
        "px-8 py-2 flex items-center transition-colors rounded-lg",
        {
          "bg-purple-700  flex items-center hover:bg-purple-800":
            props.type === "primary",
          "border-[2px] border-purple-700 hover:bg-purple-700 hover:border-white":
            props.type === "secundary",
          "px-8 py-[11px] min-w-[160px]": props.size == "large",
        }
      )}
      target="__blank"
    >
      <div className="flex gap-2">
        {props.title}
        {props.children}
      </div>
    </a>
  );
}

// " bg-purple-700  flex items-center hover:bg-purple-800 "
