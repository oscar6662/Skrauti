import React from "react";
import { List, Avatar, Divider } from 'antd';

import s from './Stjorn.module.scss';

const data = [
  {
    title: 'Þuríður Helga Kristjánsdóttir',
    description: 'Formaður',
  },
  {
    title: 'Sigrún Helgadóttir',
    description: 'Meðstjórnardi',
  },
  {
    title: 'Ólafur Sigmar Andrésson',
    description: 'Meðstjórnardi',
  },
  {
    title: 'Kristján Baldursson',
    description: 'Varamaður',
  },
  {
    title: 'Snorri Baldursson',
    description: 'Stofnandi',
  },
];

export default function Stjorn() {
  return (
    <section className={s.one}>
      <div className={s.one__content}>
        <h1>
          Starfsemi
        </h1>
        	<div className={s.one__info}>
        	  <p>
        	      Náttúruverndarfélagið Skrauti var stofnað 14. febrúar 2021 að frumkvæði Snorra Baldurssonar. 
        	      Samtökin eru nefnd eftir fjallinu Skrauta í Vonarskarði. 
        	      Baráttumál þeirra fyrst í stað er friðlýsing landslagsheildar Vonarskarðs 
        	      sem náttúruvés í skilningi náttúruverndarlaga nr. 60/2013. 
        	      Með landslagsheild er átt við Vonarskarðsöskjuna milli Tungnafellsjökuls og Bárðarbungu að vestan og austan og milli upptakakvísla Skjálfandafljóts og Köldukvíslar að norðan og sunnan.
        	   </p>
        	</div>
          <Divider/>
          <List
            style={{'width':'100%'}}
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title={item.title}
                  description={item.description}
                />
            </List.Item>
            )}
          />
        </div>
    </section>
  );
}
