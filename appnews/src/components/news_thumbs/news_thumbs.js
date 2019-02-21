// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, CardTitle, Icon } from 'react-materialize';

import img from '../../images/img.jpg';

const NewsThumbs = () => (
    <Card className='small'
        header={<CardTitle image={img}><Icon small>favorite</Icon>
        <p>60</p></CardTitle>}>
        <p>I am a very simple card. I am good at containing small bits of information.</p>
        
        <div className="n-infos">
            <span className="n-titulo">
                <Icon small>public</Icon> 
                <p>Primeira Noticia</p>
            </span>
            <span className="n-data">
                <Icon small>access_time</Icon> 
                <p>01/02/2019</p>
            </span>
        </div>
    </Card>
);

export default NewsThumbs;