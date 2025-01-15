import { Link, useParams } from "react-router-dom";

export default function ProductsDetailPage(){
    const params = useParams();

    return (
        <>
        <h2>{params.id}</h2>
        <Link to=".." relative="path">Back</Link>
        </>
    )
}