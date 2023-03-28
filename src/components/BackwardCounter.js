import useCounter from "../hooks/use-counter";
import { Card } from "./Card";

export const BackwardCounter =()=>{

    const counter = useCounter({ forward: false});
    return <Card>{counter}</Card>
}