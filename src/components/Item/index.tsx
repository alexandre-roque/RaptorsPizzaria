import React, { Component } from 'react'

export interface ItemProps {
  name: String,
  tamanho: String,
  preco: Number,
  id: Number
};

export function Item(props: ItemProps) {
    return (
      <>
        <p>Item: {props.name} </p>
        <p>Tamanho: {props.tamanho} </p>
        <p>Preço: {props.preco} </p>
      </>
    );
}
