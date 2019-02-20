// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// Importando componentes de news
import NewsThumbs from '../news_thumbs/news_thumbs'
import NewsPreview from '../news_preview/news_preview'

const News = () => (
  <Row>
    <Col m={6} s={12}>
      {<NewsThumbs />}
    </Col>
    
    <Col m={12} s={12}>
        {<NewsPreview />}
    </Col>
  </Row>
);

export default News;