import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react';

const Home = () => {
  const loggedIn = {
    firstName: 'Nikita',
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn.firstName || 'Guest'}
            subtext="Acces and manage your account and transactions efficiently."
          />
        </header>
        <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1250.23} />
      </div>
    </section>
  );
};

export default Home;
