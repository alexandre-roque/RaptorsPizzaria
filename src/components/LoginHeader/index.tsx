import { CgSun } from 'react-icons/cg'
import { HiMoon } from 'react-icons/hi'
import { Container, Toggle, ToggleDiv } from "./styles";
import { useDispatch } from "react-redux";
import { changeTheme } from "../../store/ducks/theme";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index"
import { DefaultTheme } from "styled-components";
import { StyledIcon } from '../Header/styles';
import { BsCart4 } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { totalAmout } from '../../store/ducks/cart';

export type LoginHeaderProps = {
    content: string
}

function LoginHeader({content}: LoginHeaderProps) {
    const theme= useSelector<RootState, DefaultTheme>(state => state.theme);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toggleTheme = () =>{
        dispatch(changeTheme());
    }

    const icon = theme.title === "light" ? <HiMoon size={30} /> : <CgSun size={30} />;
    const totalAmount= useSelector<RootState, number>(totalAmout);

    return(
        <Container>
            {content}
            <ToggleDiv>
                <Toggle onClick={() => navigate('/cart')}>
                    <BsCart4 size={20} />
                    <StyledIcon>{totalAmount}</StyledIcon>
                </Toggle>
                <Toggle onClick={toggleTheme}>
                    {icon}
                </Toggle>
            </ToggleDiv>
        </Container>
    )
};

export default LoginHeader;