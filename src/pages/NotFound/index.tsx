import React from 'react';
import { navigate } from 'hookrouter';

import Button, { ButtonColor } from '../../components/Button';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';

import TeamRocket from './assets/TeamRocket.png';
import s from './NotFound.module.scss';

const NotFoundPage: React.FC = () => {
  return (
    <div className={s.root}>
      <Layout>
        <div className={s.content}>
          <div className={s.numbersBlock}>404</div>
          <div className={s.layer}>
            <img src={TeamRocket} alt="Team Rocket" />
            <Heading size={1}>
              <span className={s.whiteText}>The rocket team</span> has won this time.
            </Heading>
            <Button color={ButtonColor.yellow} onClick={() => navigate('/')}>
              Return
            </Button>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default NotFoundPage;
