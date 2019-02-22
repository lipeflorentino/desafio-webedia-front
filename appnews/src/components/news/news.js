// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// Importando componentes de news
import NewsThumbs from '../news_thumbs/news_thumbs'
import NewsPreview from '../news_preview/news_preview'
import '../news_thumbs/stylesheet/news_thumbs.css';
import '../news_thumbs/stylesheet/news_thumbs_switch.scss';
import '../news_preview/stylesheet/news_preview.css';

const News = () => (
  <Row>
    <Col m={6} s={12}>
        {<NewsThumbs />}
    </Col>
    <div className="clearfix"></div>
    <Col m={12} s={12}>
        {<NewsPreview />}
    </Col>
  </Row>
);

export default News;