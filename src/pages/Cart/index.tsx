import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { ProtectedLayout } from "../../components/ProtectedLayout";
import { emptyCart, selectCart, totalAmout } from "../../store/ducks/cart";
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
    const totalAmount= useSelector<RootState, number>(totalAmout);
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
                <CartCatalog items={cart}/>
                <ProtectedLayout>
                    <AdressTo>
                        {totalAmount > 0 ? 
                        <>
                            <Button onClick={handleOrder}>Fazer pedido</Button>
                            {user.isLogged && <>Seu pedido será enviado para: CEP: {user.endereco!.cep}, {user.endereco!.rua}, {user.endereco!.bairro}, {user.endereco!.numero}.</>}
                        </>
                        :
                            <>Seu carrinho está vazio</>
                        }
                    </AdressTo>
                </ProtectedLayout>
            </CatalogContainer>
        </>
    );
}