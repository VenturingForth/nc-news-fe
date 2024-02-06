import { useEffect, useState } from "react";
import { patchArticleVotes } from "./api/api";

export default function VoteButtons({article_id, votes}){
    const [voteDisplay, setVoteDisplay] = useState(votes);
    const [isError, setIsError] = useState(false);

    function handleVoteClick(inc_votes){
        patchArticleVotes(article_id, inc_votes)
        .then(()=>{
            setVoteDisplay(voteDisplay + inc_votes);
            if (isError){
                setIsError(false);
            }
        }).catch((err)=>{
            setIsError(true);
        })
    }

    return (
        <>
        <button className="vote-button vote-button-dec" onClick={() => handleVoteClick(-1)}>-</button>
        <p className="vote-button" style={{display: 'inline'}}>Votes | {voteDisplay}</p>
        <button className="vote-button vote-button-inc" onClick={() => handleVoteClick(1)}>+</button>
        <p className="error">{isError ? "Your vote could not be posted. Please try again" : null}</p>
        </>
    )
}