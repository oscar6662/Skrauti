import React from 'react';

import s from './Navbar.module.scss';

export default function Navbar() {

  return (
    <>
      <header className = {s.header}>
        <div className = {s.header__content}>
          <div>
            <h1>Skrauti</h1>
            <h2>Félag um verndun landslagsheildarinnar í Vonarskarði</h2>
          </div>
        </div>
      </header>
    </>
  );
}