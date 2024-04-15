import NavSide from "./navside";

export default function DashLayOut({ children }) {
  return (
    <div className="flex justify-between w-full">
      <NavSide/>
      <div className="mx-auto w-4/5">{children}</div>
    </div>
  );
}
