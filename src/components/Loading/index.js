import React from 'react';
import './Loading.css';

export default function Loading() {
  return (
    <div className="wrapper">
      <div className="circle" />
      <div className="circle" />
      <div className="circle" />
      <div className="shadow" />
      <div className="shadow" />
      <div className="shadow" />
      <span>Carregando</span>
    </div>
  );
}
