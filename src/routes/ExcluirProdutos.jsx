import { useNavigate} from "react-router-dom";
import { useParams } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import style from "./ExcluirProdutos.module.css"


export default function ExcluirProdutos() {

    document.title = "Excluir Produtos";

    const navigate = useNavigate();

    //receber o ID do produto pelo HOOK useParams()
    const {id} = useParams();

    //Recuperar o produto na lista pelo ID
    const produto = ListaProdutos.filter(produto => produto.id == id)[0];

    const handleDelete = (event)=>{
        event.preventDefault();

        let indice;

        indice = ListaProdutos.findIndex((item) => item.id === produto.id);


        ListaProdutos.splice(indice, 1);

        alert("Produto excluido com sucesso!");

        navigate("/produtos")


    }
    return (
        <>
            <div>
                <h1>Excluir Produtos</h1>

                <div className={style.card}>
                    <h2>Produto Selecionado</h2>
                    <figure>
                        <img src={produto.img} alt={produto.desc} />
                        <figcaption>{produto.nome} - <span>R$</span>{produto.preco}</figcaption>
                    </figure>
                    <div className={style.btn}>
                        <button onClick={handleDelete}>Excluir</button>
                        <button onClick={() => navigate("/produtos")}>Cancelar</button>
                    </div>
                </div>

            </div>
        </>
    );}