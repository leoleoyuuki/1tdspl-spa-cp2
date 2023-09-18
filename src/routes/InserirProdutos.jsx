
import { useNavigate} from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import { useState } from "react";

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
    const handleInserir = (event)=>{
        event.preventDefault();

        ListaProdutos.push(novoProduto)
        alert("Produto Inserido com sucesso!");

        navigate("/produtos")
    } 

    return (
        <>
            <h1>Inserir Produtos</h1>

            <form onSubmit={handleInserir}>
                <fieldset>
                    <legend>Produto a ser editado</legend>
                    <label htmlFor="id">Id: </label>
                    <input type="text" name="id" value={novoProduto.id} required/>
                    <div>
                        <label htmlFor="idNome">Nome:</label>
                        <input type="text" name="nome" id="idNome" value={novoProduto.nome} onChange={handlChange} required/>
                    </div>
                    <div>
                        <label htmlFor="idDesc">Descrição:</label>
                        <input type="text" name="desc" id="idDesc" value={novoProduto.desc} onChange={handlChange} required/>
                    </div>
                    <div>
                        <label htmlFor="idPreco">Preço:</label>
                        <input type="text" name="preco" id="idPreco" value={novoProduto.preco} onChange={handlChange} required/>
                    
                        <label htmlFor="idImg">Img</label>
                        <input type="text" name="img" id="idImg" value={novoProduto.img} onChange={handlChange} placeholder="URL" required/>
                    </div>
                    <div>
                        <button>Inserir</button>
                    </div>
                </fieldset>
            </form>
            
        </>
    );}
