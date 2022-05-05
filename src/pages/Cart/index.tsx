import { useSelector } from "react-redux";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { ProtectedLayout } from "../../components/ProtectedLayout";
import { selectCart } from "../../store/ducks/cart";
import { CatalogContainer } from "./styles";
import CartCatalog from "../../components/CartCatalog";

export default function Cart() {
    const cart = useSelector(selectCart);

    return (
        <>
            <Header />
            <CatalogContainer>    
                <ProtectedLayout>
                    <>
                        <CartCatalog items={cart}/>
                        <Button onClick={() => {}}>Fazer pedido</Button>
                    </>
                </ProtectedLayout>
            </CatalogContainer>
        </>
    );
}