import { FC } from "react"
import { Link } from "react-router-dom";

const navs = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Country", path: "/country" },
  ];

const Nav: FC<{way: string}> = ({way}) => {
    return(
        <div className="navbar">
            {navs.map((item, index) => (
              <Link
                to={item.path}
                className={way === item.path ? "active-color" : ""}
                key={index}
              >
                {item.name}
              </Link>
            ))}
          </div>
    )
}

export default Nav