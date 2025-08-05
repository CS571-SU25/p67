import { useEffect, useState } from "react"
import { Card, Image } from "react-bootstrap"
import RevealOnScroll from "./RevealOnScroll";
export default function Interns(props){
    
    return <>
           <RevealOnScroll>
            <Card style={{margin:"auto", width:"fit-content", padding:"1em" , height:"300px", width:"300px", textAlign:"center", paddingBottom:"1em"}}>
                <Image src={props.img? props.img:""} alt="picture of Intern"/>
                <h2>{props.name? props.name:"John Doe"}</h2>
                <div>
                <p>Position: {props.position}</p>
                <p>Hometown: {props.hometown}</p>
                <p>Major: {props.major}</p>
                <p>{props.bio?props.bio:""}</p>  
                </div>
            </Card>
            </RevealOnScroll>
            </>
}