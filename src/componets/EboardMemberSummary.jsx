import { useEffect, useState } from "react"
import {Row, Col, Card} from "react-bootstrap"
import Eboard from "./Eboard"
import Interns from "./Interns"
import RevealOnScroll from "./RevealOnScroll"
export default function EboardMemberSummary(){
    
    const [eboardMembers, setEboard] = useState([]);
    const interns = [{
                id:1,
                name:"Intern 1",
                position:"Intern",
                hometown:"Internland, WI",
                bio:""
    },
    {
         id:2,
                name:"Intern 2",
                position:"Intern",
                hometown:"Internland, WI",
                bio:""

    },
    {

         id:3,
                name:"Intern 3",
                position:"Intern",
                hometown:"Internland, WI",
                bio:""
    }


]
useEffect(()=>{

    fetch(`https://bmc-api-8d29.onrender.com/members`)
        .then(res =>res.json())
        .then(data => {
            console.log(data)
            setEboard(data);
        });
},[])
    
    return (
        <div>
     <h1 style={{textAlign:"center"}}> Meet the Ebord </h1>
  <Row > {eboardMembers.map(member => <Col  xs={12} lg={6} xl={4} xxl={3}  key={member.id} > <RevealOnScroll>  <Card style={{margin:"auto", width:"300px", padding:"1em" , height:"400px", alignItems:'center', textAlign:"center", paddingBottom:"1em"}}><Eboard {...member}/></Card> </RevealOnScroll>    </Col> )}</Row>
  <h1 style={{textAlign:"center"}}> Meet our Interns </h1>
   <Row>{interns.map(intern => <Col xs={12} lg={6} xl={4} xxl={3} key={intern.id}> <Interns {...intern}/></Col>)}</Row>
    </div>
    );
}