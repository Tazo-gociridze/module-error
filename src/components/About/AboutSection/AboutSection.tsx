import { FC } from "react"



const AboutSection: FC = () => {
    return(
        <section className="about__section">
          <div className="about__section-description">
            <h1>ABOUT US</h1>
            <h2>
              WE ARE <span>CREATIVE</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ea rem? Non explicabo repellat
               quas voluptatibus nesciunt molestiae culpa eos incidunt accusantium?
                Dignissimos voluptate explicabo cum quaerat, distinctio quibusdam odio?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, soluta non.
                 Illum minus esse, architecto, a corrupti dolores dicta amet id accusamus officiis facere atque vero. <br /> <br />
                  Fuga corrupti voluptatenecessitatibus asperiores cumque ad in cum molestiae aperiam et aspernatur,
                 accusamus vitae nulla doloremque omnis ducimus assumenda natus totam! Cum, culpa?    
            </p>
            <button>READ MORE</button>
          </div>
          <div className="about__section-img">

          </div>
        </section>
    )
}

export default AboutSection