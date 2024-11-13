
const Qualities = () => {
  const ourQualities = [
    {id: 1, image: "./quality1.png", title: "SEAMLESS BOOKING", description: "Our platform offers effortless and efficient court reservations with just a few clicks." },
    {id: 2, image: "./quality2.png", title: "EXCEPTIONAL SERVICES", description: "With personalized assistance, our dedicated team is committed to providing a seamless experience."},
    {id: 3, image: "./quality3.png", title: "CONVENIENT", description: "Accessible from anywhere, anytime, ensuring you secure your preferred court at your convenience."}
  ];
  return (
    <>
      <section className='qualities' id='qualities'>
        <div className="container">
          {ourQualities.map(element => (
            <div className='card justify-content-center align-items-center vh-100"' key={element.id}>
              <img src={element.image} alt={element.title} />
              <p className='title'>{element.title}</p>
              <p className='description'>{element.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
export default Qualities