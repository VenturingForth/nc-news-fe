import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Topics({topic, setTopic}){
    const navigate = useNavigate();

    function handleTopicClick(event){
        event.preventDefault();
        setTopic(event.target.value);
    }

    useEffect(() => {
        if(topic === "all"){
            navigate(`/`);
        } else {
            navigate(`/topic/${topic}`);
        }
    },[topic])

    return (
        <>
            <Button 
                onClick={() => {handleTopicClick(event)}} 
                value={"all"}
                active={topic==="all"}
                type="button">
                    All
            </Button>
            <Button 
                onClick={() => {handleTopicClick(event)}} 
                value={"coding"}
                active={topic==="coding"}
                type="button">
                    Coding
            </Button>
            <Button 
                onClick={() => {handleTopicClick(event)}} 
                value={"cooking"}
                active={topic==="cooking"}
                type="button">
                    Cooking
            </Button>
            <Button 
                onClick={() => {handleTopicClick(event)}} 
                value={"football"}
                active={topic==="football"}
                type="button">
                    Football
            </Button>
        </>
    )
}