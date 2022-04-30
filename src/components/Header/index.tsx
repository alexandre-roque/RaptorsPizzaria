import React from 'react'
import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';
import { BsCart4 } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { DefaultTheme } from 'styled-components';
import { RootState } from '../../store';
import { changeTheme } from '../../store/ducks/theme';
import { Toggle } from '../LoginHeader/styles'
import { HeaderBody, StyledHeader, StyledMenu } from './styles'
import { useNavigate } from 'react-router-dom';
import { totalAmout } from '../../store/ducks/cart';
import logo from '../../assets/img/logo.jpg'

export default function Header() {
  const theme= useSelector<RootState, DefaultTheme>(state => state.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleTheme = () =>{
      dispatch(changeTheme());
  }
  
  const icon = theme.title === "light" ? <HiMoon size={30} /> : <CgSun size={30} />;
  const totalAmount= useSelector<RootState, number>(totalAmout);

  return (
    <HeaderBody>
        <StyledHeader>
            <a href="/"><img src={logo} alt="logo" /></a>
            <nav>
                <StyledMenu>
                  <li><a href="/">Sobre</a></li>
                  <li><a href="/">Contato</a></li>
                  <li>
                    <Toggle onClick={() => navigate('/cart')}>
                      <BsCart4 size={20} />
                      {totalAmount}
                    </Toggle>
                  </li>
                  <li>
                    <Toggle onClick={toggleTheme}>
                      {icon}
                    </Toggle>
                  </li>
                </StyledMenu>
            </nav>
        </StyledHeader>
    </HeaderBody>
  )
}
