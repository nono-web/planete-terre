import React from 'react';
import './TopSection.css';

const TopSection = () => {
  return (
    <div className="topSectionContainer">
      <h1 className="logo">Le réchauffement de la planète</h1>
      <h4 className="slogan">
        Gardez-la au frais pour vivre en toute sécurité{' '}
      </h4>
      <p className="paragraph">
        Vous pouvez nous aider à refroidir notre monde et à le faire revenir à
        son meilleur état en donnant pour aider à réparer notre seul monde et
        notre Terre bien-aimée. En faisant un don pour aider à réparer
        notre seul monde et notre chère TERRE ! Soyez cool et laissez la terre
        être cool. Le globe se réchauffe et va s'enflammer. Arrêtez de polluer,
        cela vous coûtera plus cher.
      </p>
      <button className="donateButton">
        <a className="lien" href="https://www.agirpourlenvironnement.org/" target="_blank">
          Donner pour sauver la planète !!!
        </a>
      </button>
    </div>
  );
};

export default TopSection;
