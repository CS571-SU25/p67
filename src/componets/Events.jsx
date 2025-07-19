import { Carousel,Image } from "react-bootstrap"
export default function Events(props){
  return<>
        <h1>Events</h1>
        <p>Take a look at events that have been hosted throughout the school Year</p>
        
        <Carousel>
        <Carousel.Item>
        <Image src={props.img} text="First slide" />
        </Carousel.Item>
        </Carousel>


        <h1>Have an event you want to see?</h1>
        <p>Fill out the form!</p>
    
        </>  
}