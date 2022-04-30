import React from 'react'
import { HeaderBody, StyledHeader, StyledMenu } from './styles'

export default function Header() {
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
        </StyledHeader>
    </HeaderBody>
  )
}
