
import { useNavigate} from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";

export default function InserirProdutos() {
    document.title = "Inserir Produtos";

    
    const navigate = useNavigate();



    return (
        <>
            <h1>Inserir Produtos</h1>
            <ListaProdutos/>
            <button onClick={() => navigate("/produtos")}>Voltar</button>
        </>
    );}
