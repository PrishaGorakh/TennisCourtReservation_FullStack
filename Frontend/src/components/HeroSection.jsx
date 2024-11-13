import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar/>
        <div className="container d-flex justify-content-center align-items-center ">
          <div className="banner">
            <img src="/hero1.jpg" alt="Image 1" className="imageBox"/>
          </div>
          <div className="banner">
            <img src="/hero2.png" alt="Your Image" className="imageBox"/>
          </div>
          <div className="banner">
            <img src="/hero3.png" alt="Image 2" className="imageBox"/>
          </div>
        </div>
    </section>
  );
};

export default HeroSection;
