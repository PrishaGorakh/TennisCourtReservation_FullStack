
const Gallery = () => {
  const galleryData = [
    {id: 1, image: "./gallery1.png", title: "PRECISION", category: "Equipment"},
    {id: 2, image: "./gallery2.png", title: "GUIDANCE", category: "Coaching"},
    {id: 3, image: "../gallery3.png", title: "ARENA", category: "Court"},
    {id: 4, image: "./gallery4.png", title: "POWER HOUSE", category: "Equipment"},
    {id: 5, image: "./gallery5.png", title: "COURTBOUND", category: "Eqipment"},
    {id: 6, image: "./gallery6.png", title: "YOUTHFUL", category: "Action"},
    {id: 7, image: "./gallery7.png", title: "TRIUMPH", category: "Tournament"},
    {id: 8, image: "./gallery8.png", title: "INTENSITY", category: "Action"}
  ];
  return (
    <section className='gallery' id='gallery'>
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">PHOTO GALLERY</h1>
          <p> </p>
          <p> </p>
          <p> </p>
        </div>
        <div className="gallery_container">
          {galleryData.map(element => (
            <div className="card" key={element.id}>
              <img src={element.image} alt={element.title}/>
              <h3>{element.title}</h3>
              <button>{element.category}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery