import React, { useContext } from "react";
import Switch from 'react-switch';
import { ThemeContext } from "styled-components";
import { Container } from "./styles";
import { shade } from 'polished';
import { useDispatch } from "react-redux";
import { changeTheme } from "../../store/ducks/theme";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index"
import { DefaultTheme } from "styled-components";

const LoginHeader: React.FC = () => {
    const theme= useSelector<RootState, DefaultTheme>(state => state.theme.theme);
    const { colors, title } = useContext(ThemeContext);
    const dispatch = useDispatch();

    const toggleTheme = () =>{
        dispatch(changeTheme());
    }

    return(
        <Container>
            Faça seu login

            <Switch
                onChange={toggleTheme}
                checked={theme.title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={colors.secundary}
                onColor={shade(0.2, colors.toggleOn)}
            />
        </Container>
    )
};

export default LoginHeader;