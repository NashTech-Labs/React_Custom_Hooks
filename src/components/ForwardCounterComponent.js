import useCounter from "../hooks/use-counter"
import { Card } from "./Card";



export const ForwardCounter = () =>{
   const counter = useCounter({ forward: true});

    return <Card>{counter}</Card>
}