import { CgSun } from 'react-icons/cg'
import { HiMoon } from 'react-icons/hi'
import { Container, Toggle } from "./styles";
import { useDispatch } from "react-redux";
import { changeTheme } from "../../store/ducks/theme";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index"
import { DefaultTheme } from "styled-components";

export type LoginHeaderProps = {
    content: string
}

function LoginHeader({content}: LoginHeaderProps) {
    const theme= useSelector<RootState, DefaultTheme>(state => state.theme.theme);
    const dispatch = useDispatch();

    const toggleTheme = () =>{
        dispatch(changeTheme());
    }

    const icon = theme.title === "light" ? <HiMoon size={30} /> : <CgSun size={30} />;

    return(
        <Container>
            {content}

            <Toggle onClick={toggleTheme}>
                {icon}
            </Toggle>
        </Container>
    )
};

export default LoginHeader;