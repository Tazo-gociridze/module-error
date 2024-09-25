
import Header from "../Header/Header";
import "../../App.css";
import CountrySection from "./countrySection/CountrySection";


function Country() {
  return (
    <>
      <main>
        <Header way={"/country"} />
        <CountrySection/>
      </main>
    </>
  );
}

export default Country;
