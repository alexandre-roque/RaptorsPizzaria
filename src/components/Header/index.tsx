import React from 'react'
import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';
import { BsCart4 } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { DefaultTheme } from 'styled-components';
import { RootState } from '../../store';
import { changeTheme } from '../../store/ducks/theme';
import { Toggle } from '../LoginHeader/styles'
import { HeaderBody, Profile, ProfileText, StyledHeader, StyledIcon, StyledMenu } from './styles'
import { useNavigate } from 'react-router-dom';
import { totalAmout } from '../../store/ducks/cart';
import logo from '/images/logo.png'
import { IUser } from '../../context/AuthProvider/types';
import { selectUser } from '../../store/ducks/user';

export default function Header() {
  const theme = useSelector<RootState, DefaultTheme>(state => state.theme);
  const user = useSelector<RootState, IUser>(selectUser);
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
                  <li>
                    <Profile>
                      <Toggle onClick={() => navigate('/login')}><AiOutlineUser size={20}/></Toggle>
                      <ProfileText>{user.isLogged ? <>Olá <br/>{user.nome?.match(/.* /)}</> : <a href="/login">Login</a>}</ProfileText>
                    </Profile>
                  </li>
                  <li>
                    <Toggle onClick={() => navigate('/cart')}>
                      <BsCart4 size={20} />
                      <StyledIcon>{totalAmount}</StyledIcon>
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
