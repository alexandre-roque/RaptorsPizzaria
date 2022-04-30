import React, { Component } from 'react'

export interface ItemProps {
  nome: string,
  tamanho: string,
  preco: number,
  id: number,
  categoria: string,
  foto?: any
};

export function Item(props: ItemProps) {
    return (
      <>
        <p>Item: {props.nome} </p>
        <p>Tamanho: {props.tamanho} </p>
        <p>Preço: {props.preco} </p>
      </>
    );
}
