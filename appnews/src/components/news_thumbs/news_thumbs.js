// Importando o React
import React, { Component } from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, CardTitle, Icon } from 'react-materialize';

import img from '../../images/img.jpg';

const api = 'https://hn.algolia.com/api/v1/search?query=';

const qry = 'redux';

class NewsThumbs extends Component {
    constructor(props) {
        super(props);

        this.state = {
          hits: [],
        };
    }

    componentDidMount() {
        fetch(api + qry)
          .then(response => response.json())
          .then(data => this.setState({ hits: data.hits }));
    }
    
    render() {
        const { hits } = this.state;
            
        return (
            <ul>
                {hits.map(hit =>
                  <li key={hit.objectID}>
                    <a href={hit.url}>{hit.title}</a>
                  </li>
                )}
            </ul>
        );
    }
    
    /*const myThumbs = () => (
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
    );*/

}

export default NewsThumbs;
    
    

