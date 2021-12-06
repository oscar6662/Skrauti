import React from "react";
import { Divider } from 'antd'

import s from './Greinar.module.scss';

export default function Greinar() {
  return (

    <section className={s.one}>
      <div className={s.one__content}>
        <h1>
          Greinar og ítarefni
        </h1>
        <Divider />
        	<div className={s.one__info}>
            <h2>Greinar um Vonarskarð eftir Snorra Baldursson</h2>
        	  <a href="/greinar/1">Náttúruvé í Vonarskarði</a><br/>
            <a href="/greinar/2">Um Vonarskarð og svarta náttúruvernd</a>
            <Divider/>
            <h2>Álitsgerð</h2>
        	  <a href="/greinar/3">Álitsgerð Sifjar Konráðsdóttur lögmanns um málsmeðferð varðandi Vonarskarð í Vatnajökulsþjóðgarði</a>
        	</div>
        </div>
    </section>
  );
}
