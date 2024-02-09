import { Link } from "react-router-dom";
export default function Header({setTopic}){
    function handleHeaderClick(){
        setTopic("all");
    }

    return (
        <header>
        <Link to="/" className="banner" onClick={()=>{handleHeaderClick()}}>
        <h1>NC News</h1>
        </Link>
        </header>
    )
}