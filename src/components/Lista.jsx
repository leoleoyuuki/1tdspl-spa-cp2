import Cabecalho from "./Cabecalho";
import {Link} from "react-router-dom";

export default function Lista(){

    return(
        <>

            <Cabecalho>
            
            <li>
                <span><Link to="/">Home</Link></span>
            </li>
            <li>
                <span><Link to="/produtos">Produtos</Link></span>
            </li>
            </Cabecalho>
        </>
    )






}