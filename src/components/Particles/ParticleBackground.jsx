import Particles from "react-tsparticles";
// import particlesConfig from "./config/particles-config";
import { loadFull } from "tsparticles"; 
import config3 from "./config/config3";
import './ParticleBackground.css'

export const ParticleBackground = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    // console.log(container);
  };
  return (
    <section className="particles">
      <div className="particles__container">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={config3}
        />
        
      </div>

    </section>

  );
};



export default ParticleBackground