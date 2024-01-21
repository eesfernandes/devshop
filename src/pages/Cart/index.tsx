import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

export function Cart(){

    const { cart, addItemCart, removeItemCart, total } = useContext(CartContext);

    return(
        <div className="w-full max-w-7xl mx-auto">
            <h1 className="font-medium text-2xl text-center my-4">Carrinho de compras</h1>
            {cart.length === 0 && (
                <div className="flex flex-col items-center justify-center">
                    <p className="font-medium">Seu carrinho está vazio...</p>
                    <Link 
                        to="/"
                        className="bg-slate-600 my-3 p-1 px-3 text-white font-medium rounded"
                    >
                        Acessar Produtos
                    </Link>
                </div>
            )}
            {cart.map( (item) => (
                <section key={item.id} className="flex items-center justify-between border-b-2 border-gray-300">
                <img 
                    className="w-28"
                    src={item.cover} 
                    alt={item.title} 
                />
                <strong>
                    Preço: {item.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    })}
                </strong>
                <div className="flex items-center justify-center gap-3">
                    <button 
                        onClick={ () => removeItemCart(item)}
                        className=" flex bg-slate-600 px-2 rounded text-white font-medium items-center justify-center">
                        -
                    </button>
                        {item.amount}
                    <button 
                        onClick={ () => addItemCart(item)}
                        className=" flex bg-slate-600 px-2 rounded text-white font-medium items-center justify-center">
                        +
                    </button>
                </div>
                <strong>
                    SubTotal: {item.total.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    })}
                </strong>
            </section>
            ))}
            {cart.length !== 0 && <p className="font-bold mt-4">Total: {total}</p>}
        </div>
    )
}