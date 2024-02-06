export default function Loading({content = ""}){
    return (
        <div className="loading-screen">
            <h2>{`Loading ${content}...`}</h2>
        </div>
    )
}