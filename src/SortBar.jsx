import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom';

export default function SortBar({topic, setTopic, sortBy, setSortBy, orderBy, setOrderBy}){
    const navigate = useNavigate();

    function handleSortChange(event){
        setSortBy(event.target.value);
    }

    function handleOrderChange(event){
        setOrderBy(event.target.value);
    }

    useEffect(() => {
        navigate(`?sort_by=${sortBy}&order=${orderBy}`)
    }, [sortBy, orderBy])

    return (
    <Form>
        <Form.Label htmlFor='sort-by-dropdown'>Sort By:</Form.Label>
        <Form.Select id='sort-by-dropdown' value={sortBy} onChange={() => {handleSortChange(event)}}>
            <option value="created_at" >Date</option>
            <option value="comment_count" >Comments</option>
            <option value="votes">Votes</option>
        </Form.Select>
        <Form.Label htmlFor='order-dropdown'>Order:</Form.Label>
        <Form.Select id='order-dropdown' value={orderBy} onChange={() => {handleOrderChange(event)}}>
            <option value="desc" >Descending</option>
            <option value="asc">Ascending</option>
        </Form.Select>
    </Form>
    )
}