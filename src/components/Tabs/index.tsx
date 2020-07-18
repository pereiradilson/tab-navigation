import React, { useState } from 'react';

import { Container, TabLinks, Button, TabContent, Section } from './styles';

const Tabs: React.FC = () => {
  const [prepare, setPrepare] = useState('active');
  const [produce, setProduce] = useState('hidden');
  const [delivery, setDelivery] = useState('hidden');

  function handleTabLink(id: string): void {
    switch (id) {
      case 'prepare':
        setPrepare('active');
        setProduce('hidden');
        setDelivery('hidden');
        break;
      case 'produce':
        setPrepare('hidden');
        setProduce('active');
        setDelivery('hidden');
        break;
      case 'delivery':
        setPrepare('hidden');
        setProduce('hidden');
        setDelivery('active');
        break;
      default:
        break;
    }
  }

  return (
    <Container>
      <TabLinks>
        <Button
          type="button"
          className={prepare}
          onClick={() => handleTabLink('prepare')}
        >
          Prepare
        </Button>
        <Button
          type="button"
          className={produce}
          onClick={() => handleTabLink('produce')}
        >
          Produce
        </Button>
        <Button
          type="button"
          className={delivery}
          onClick={() => handleTabLink('delivery')}
        >
          Delivery
        </Button>
      </TabLinks>

      <TabContent>
        <Section className={prepare}>
          <h2>How to prepare content?</h2>
          <p>Need to lot of research and organizing ideas.</p>
        </Section>

        <Section className={produce}>
          <h2>How to produce</h2>
          <p>Develop your idea and record it.</p>
          <p>To record will need: Sound, Camera, Light and a Computer.</p>
        </Section>

        <Section className={delivery}>
          <h2>How to delivery</h2>
          <p>
            You choose any digital media like: YouTube, Twitch or Instagram.
          </p>
        </Section>
      </TabContent>
    </Container>
  );
};

export default Tabs;
