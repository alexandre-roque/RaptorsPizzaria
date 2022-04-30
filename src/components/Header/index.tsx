import React from 'react'
import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { DefaultTheme } from 'styled-components';
import { RootState } from '../../store';
import { changeTheme } from '../../store/ducks/theme';
import { Toggle } from '../LoginHeader/styles'
import { HeaderBody, StyledHeader, StyledMenu } from './styles'

export default function Header() {
  const theme= useSelector<RootState, DefaultTheme>(state => state.theme);
  const dispatch = useDispatch();

  const toggleTheme = () =>{
      dispatch(changeTheme());
  }
  const icon = theme.title === "light" ? <HiMoon size={30} /> : <CgSun size={30} />;

  return (
    <HeaderBody>
        <StyledHeader>
            <a href="/">Logo</a>
            <nav>
                <StyledMenu>
                    <li><a href="/">Sobre</a></li>
                    <li><a href="/">Produtos</a></li>
                    <li><a href="/">Contato</a></li>
                </StyledMenu>
            </nav>
          <Toggle onClick={toggleTheme}>
              {icon}
          </Toggle>
        </StyledHeader>
    </HeaderBody>
  )
}
