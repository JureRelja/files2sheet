import { Children } from "react";

export default function Card({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="bg-white py-5 px-10">{children}</div>;
}
