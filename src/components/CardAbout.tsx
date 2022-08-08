import { Component } from "react";

export function CardAbout(props: {
  icon: any;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-gray-100 w-60 h-60 first:bg-purple-700 bg-gray-300 hover:bg-purple-700 mt-8 text-2xl font-semibold flex flex-col justify-end p-4 uppercase">
      {props.icon}
      <p className="mt-2">{props.title}</p>
      <p className="mt-0">{props.subtitle}</p>
    </div>
  );
}
