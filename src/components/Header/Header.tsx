
import { PiSignInBold } from "react-icons/pi";

import { FC } from "react";
import Nav from "./Nav/Nav";

const Header: FC<{way: string}> = ({way}) => {
  return (
    <>
      <header className="header">
        <div className="restrictive-container">
          <div className="logo__div"></div>
             <Nav way={way}/>
          <div className="sign-in-btn">
            <PiSignInBold />
          </div>
        </div>
      </header>
      ;
    </>
  );
}

export default Header;
