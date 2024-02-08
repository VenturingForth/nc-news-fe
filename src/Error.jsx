export default function Error({error}){
    console.log(error);
    return (
        <>
        <h2>Error {error.status}</h2>
        <p>{error.msg}</p>
        </>
    )
}