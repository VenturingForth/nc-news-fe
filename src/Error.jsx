export default function Error({error}){
    return (
        <>
        <h2>Error {error.status}</h2>
        <p>{error.msg}</p>
        </>
    )
}