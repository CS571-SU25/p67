import { Carousel, Image} from "react-bootstrap"
export default function EventImage({ img, event }) {
  const eventImages = [
    { id: 1, img: "https://github.com/CS571-SU25/p67/blob/main/src/img/IMG_6077.jpeg?raw=true", event: "General Body Fall 2024" },
    { id: 2, img: "https://github.com/CS571-SU25/p67/blob/main/src/img/IMG_6075.jpeg?raw=true", event: "Game Night" },
    { id: 3, img: "https://github.com/CS571-SU25/p67/blob/main/src/img/IMG_6076.jpeg?raw=true", event: "Headshots & Haircuts" },

    { id: 4, img: "https://github.com/CS571-SU25/p67/blob/main/src/img/IMG_8742.jpg?raw=true",  event: "General Body Fall 2024" },
    { id: 5, img: "https://github.com/CS571-SU25/p67/blob/main/src/img/GN1.JPG?raw=true", event: "Game Night" },
    { id: 6, img: "https://github.com/CS571-SU25/p67/blob/main/src/img/IMG_0827.JPG?raw=true", event: "Game Night" },
    { id: 7, img: "https://github.com/CS571-SU25/p67/blob/main/src/img/IMG_2841.jpg?raw=true", event: "Headshots & Haircuts" }
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
