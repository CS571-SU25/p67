import { Carousel, Image} from "react-bootstrap"
export default function EventImage({ img, event }) {
  const eventImages = [
    { id: 1, img: "src/img/IMG_6077.jpeg", event: "General Body Fall 2024" },
    { id: 2, img: "src/img/IMG_6075.jpeg", event: "Game Night" },
    { id: 3, img: "src/img/IMG_6076.jpeg", event: "Headshots & Haircuts" },

    { id: 4, img: "src/img/IMG_8742.jpg",  event: "General Body Fall 2024" },
    { id: 5, img: "src/img/GN1.JPG", event: "Game Night" },
    { id: 6, img: "src/img/IMG_0827.JPG", event: "Game Night" },
    { id: 7, img: "src/img/IMG_2841.jpg", event: "Headshots & Haircuts" }
  ];
  return (
    
     <Carousel>  {eventImages.map(ev => (
       <Carousel.Item>
      <Image style={{height:"25rem", width:"25rem"}}src={ev.img} alt={ev.event} />
      <Carousel.Caption>
        <h3>{ev.event}</h3>
      </Carousel.Caption>
    </Carousel.Item>
        ))}</Carousel>
    
  );
}