import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const TrendingPanel: React.FC = () => {
  return (
    <Container>
      <Panel>
        <span className="title">Assuntos mais discutidos</span>

        <ul>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">OMS Fala sobre a vacinação de adolescentes</span>
              <span className="subtext">há 1 d • 469 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Instabilidade da bolsa causada por discurso presidencial</span>
              <span className="subtext">há 5 h • 178 leitores</span>
            </span>
          </li>

        </ul>
      </Panel>
    </Container>
  );
};

export default TrendingPanel;
