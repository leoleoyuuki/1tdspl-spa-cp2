
import { useNavigate} from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";

export default function InserirProdutos() {
    document.title = "Inserir Produtos";

    
    const navigate = useNavigate();

    //Criando o hook useState() para carregar o produto e depois alterar.
    const [novoProduto , setNovoProduto] = useState({
        id: ListaProdutos.length + 1,
        nome: "",
        desc: "",
        preco: "",
        img: ""
    })

 
 // Função para alterar o produto
    const handlChange = (event)=>{
        const {name,value} = event.target;
        setNovoProduto({...novoProduto,[name]:value})
    }

// Manipuila o evento para inserir o novoPoduto no ListaProdutos
    const handleInserer = (event)=>{
        event.preventDefault();

        ListaProdutos.push(novoProduto)
        alert("Produto Inserido com sucesso!");

        navigate("/produtos")
    } 

    return (
        <>
            <h1>Inserir Produtos</h1>
            <ListaProdutos/>
            <button onClick={() => navigate("/produtos")}>Voltar</button>
        </>
    );}
