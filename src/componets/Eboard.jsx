import { useEffect, useState } from "react"
import { Image } from "react-bootstrap"

export default function Eboard(props){
    
    return <>

      
                <Image src={props.img} alt="picture of ebord member"  style={{height: "10em", width:"10em", objectFit: "contain" }}/>
                
                <h2>{props.name? props.name:"John Doe"}</h2>
                <div style={{ fontSize: "0.85rem" }}>
                <p>Position: {props.position}</p>
                <p>Hometown: {props.hometown}</p>
                <p>Major: {props.major}</p>
                <p>{props.bio?props.bio:""}</p>  
                </div>
          
            </>
}