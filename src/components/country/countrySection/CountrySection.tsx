import {FC} from "react"


const CountrySection: FC = () => {

    const qountryCharacteristics = [
        {name:'Country: Georgia'},
        {name:'Capital: Tbilisi'},
        {name: 'population: 3 736,4 thousand'},
      ];
      
    return(
        <>
        <section className="country__section">
          <div className="country__section-wrapper">
            <div className="flag-img"></div>
            <div className="characteristics">
              {qountryCharacteristics.map((item, i) => 
                <div key={i} className="characteristic"><span>{item.name}</span></div>
              )}
            </div>
          </div>
        </section>
        </>
    )
}


export default CountrySection