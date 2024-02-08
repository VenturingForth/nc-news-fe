import { Link } from "react-router-dom";
export default function Header({setTopic}){
    function handleHeaderClick(){
        setTopic("all");
    }

    return (
        <Link to="/" onClick={()=>{handleHeaderClick()}}>
        <h1>NC News</h1>
        </Link>
    )
}