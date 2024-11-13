import { Link } from "react-scroll";    //react-scroll for animated effect

const Navbar = () => {
  return (
    <>
    <nav>
      <div className="navLinks">
        <div className="links">
          {[
            { id: 1, title: "HOME", link: "heroSection" },
            { id: 2, title: "ABOUT US", link: "about" },
            { id: 3, title: "GALLERY", link: "gallery" },
            { id: 4, title: "WHY US", link: "qualities" },
            { id: 5, title: "RESERVATION", link: "reservation" }
            ].map((element) => (
            <Link
              to={element.link}
              spy={true}
              smooth={true}
              duration={500}
              key={element.id}
            >
            {element.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;