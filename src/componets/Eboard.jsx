import { Card, Image } from "react-bootstrap"
export default function Eboard(props){
    return <>
            <h1> Meet the Ebord </h1>
            <Card style={{margin:"auto", width:"fit-content", padding:"1em"}}>
                <Image src = "" alt="picture of ebord member"/>
                <h2>{props.name? props.name:"John Doe"}</h2>
                <p>Position: {props.position}</p>
                <p>Hometown: {props.hometown}</p>
                <p>Major: {props.major}</p>
                <p>{props.bio?props.bio:""}</p>  
            </Card>
            </>
}