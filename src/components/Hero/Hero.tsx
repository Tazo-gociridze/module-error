import { FC } from "react"
import { IoIosConstruct } from "react-icons/io"
import { Link } from "react-router-dom"


const Hero: FC = () => {
    return(
        <section className="hero__section">
        <div className="hero__div">
          <div className="dark-ground">
            <div className="hero__div-text">
              <IoIosConstruct className="hero__div-text-icon"/>
              <h1>Corporate center <span>Corpo</span></h1>
              <p>The most beautiful and reliable structures</p>
              <Link to={'/about'}><button className="hero__section-btn">Find out more</button></Link>
            </div>
          </div>
        </div>
      </section>
    )
}


export default Hero