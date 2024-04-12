import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/globalContext";

function HeaderItem(link, text, image, handler, key) {
  return (
    <li className="inline-block" key={key}>
      <Link
        onClick={handler}
        className="px-8 py-4 text-slate-200 hover:bg-slate-800 rounded transition-colors duration-300 flex justify-between"
        to={link}
      >
        <img alt="header_item" src={image} className="px-2 invert" />
        {text}
      </Link>
    </li>
  );
}

const Header = () => {
  const { isLogged, user, resetSession } = useGlobalContext();
  if (isLogged) {
    navigation = [
      [
        `${isLogged ? "/account" : "/login"}`,
        `${user.name}`,
        "/user.svg",
        () => {},
      ],
      [
        "/",
        "Logout",
        "/log-out.svg",
        () => {
          resetSession();
        },
      ],
    ];
  } else {
    navigation = [
      ["/", "Home", "/home.svg", () => {}],
      [
        `${isLogged ? "/dashboard" : "/login"}`,
        "Login",
        "/log-in.svg",
        () => {},
      ],
      [
        `${isLogged ? "/dashboard" : "/register"}`,
        "Register",
        "/user.svg",
        () => {},
      ],
    ];
  }

  return (
    <header className="flex flex-row content-center justify-between p-4 text-4xl font-bold bg-slate-900 m-auto fixed w-full h-24">
      <h1 className="text-slate-200 self-center text-center select-none mx-8">
        AppFinanzas
      </h1>
      <nav className="mt-auto mb-0">
        <ul className="no-underline list-none text-2xl">
          {navigation.map((item, key) =>
            HeaderItem(item[0], item[1], item[2], item[3], key)
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
