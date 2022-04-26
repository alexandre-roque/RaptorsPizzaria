import React, { useContext } from "react";
import Switch from 'react-switch';
import { ThemeContext } from "styled-components";
import { Container } from "./styles";
import { shade } from 'polished';
import { useDispatch } from "react-redux";
import { changeTheme } from "../../store/ducks/theme";


const Header: React.FC = () => {
    const { colors, title } = useContext(ThemeContext);
    const dispatch = useDispatch();

    const toggleTheme = () =>{
        dispatch(changeTheme());
    }

    return(
        <Container>
            Hello World

            <Switch
                onChange={toggleTheme}
                checked={title === 'dark'}
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

export default Header;