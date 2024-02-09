import { useEffect, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { fetchTopics } from "./api/api";

export default function Topics({topic, setTopic}){
    const [loading, isLoading] = useState(true)
    const [topics, setTopics] = useState([])
    const navigate = useNavigate();

    function handleTopicClick(event){
        event.preventDefault();
        setTopic(event.target.value);
    }

    useEffect(() => {
        fetchTopics()
        .then((data) => {
            setTopics(data)
        })
    },[])

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
                variant="primary"
                onClick={() => {handleTopicClick(event)}} 
                value={"all"}
                active={topic==="all"}
                type="button">
                    all
            </Button>
            {topics.map((tpc) => {
                return (
                    <Button 
                        variant="topic"
                        key={`${tpc.slug}-topic`}
                        onClick={() => {handleTopicClick(event)}}
                        value={tpc.slug}
                        active={topic===tpc.slug}
                        type="button">
                        {tpc.slug}
                    </Button>
                )
            })}
        </>
    )
}