import { useSelector } from "react-redux";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { ProtectedLayout } from "../../components/ProtectedLayout";
import { selectCart } from "../../store/ducks/cart";

export default function Cart() {
    const cart = useSelector(selectCart);

    return (
        <>
            <Header />
            <ProtectedLayout>
                <>
                    {cart.map(item => {
                       return (
                        <>
                            <h1>{item.amount} x {item.nome}: R$ {item.amount*item.preco}</h1>
                            <h2>{item.ingredientes}</h2>
                        </>
                       )
                    })}
                    <Button onClick={() => {}}>Fazer pedido</Button>
                </>
            </ProtectedLayout>
        </>
    );
}