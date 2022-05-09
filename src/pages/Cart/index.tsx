import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { ProtectedLayout } from "../../components/ProtectedLayout";
import { emptyCart, selectCart } from "../../store/ducks/cart";
import { AdressTo, CatalogContainer } from "./styles";
import CartCatalog from "../../components/CartCatalog";
import { RootState } from "../../store";
import { IUser } from "../../context/AuthProvider/types";
import { selectUser } from "../../store/ducks/user";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

export default function Cart() {
    const cart = useSelector(selectCart);
    const user = useSelector<RootState, IUser>(selectUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOrder = () => {
        message.info('Seu pedido foi feito com sucesso');
        dispatch(emptyCart());
        navigate('/');
    }

    return (
        <>
            <Header />
            <CatalogContainer>    
                <ProtectedLayout>
                    <AdressTo>
                        <CartCatalog items={cart}/>
                        <Button onClick={handleOrder}>Fazer pedido</Button>
                        Seu pedido será enviado para: CEP: {user.endereco!.cep}, {user.endereco!.bairro}, {user.endereco!.numero}
                    </AdressTo>
                </ProtectedLayout>
            </CatalogContainer>
        </>
    );
}