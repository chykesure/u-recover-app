import React from 'react';
import '../components/Resources.css';
import deeperLifeImage from '../../src/imgs/logo.png';
import billyGrahamImage from '../../src/imgs/rBGEA.png';
import uRecoverImage from '../../src/imgs/ucover.png';

import bg_deeperLifeImage from '../../src/imgs/rDLBC.png';
import bg_billyGrahamImage from '../../src/imgs/rBilly.png';
import bg_uRecoverImage from '../../src/imgs/rimg.png';

const Resources = () => {
  return (
    <div className="resources-container">
      <h2 className="resources-title">Resources</h2>
      <div className="resources-content">
        <div className="resource-item">
          <div className="resource-card" style={{ backgroundImage: `url(${bg_deeperLifeImage})` }}>
            <img src={deeperLifeImage} alt="Deeper Christian Life Ministry" className="resource-image" />
          </div>
          <div className="resource-caption">Deeper Christian Life Ministry</div>
        </div>
        <div className="resource-item">
          <div className="resource-card" style={{ backgroundImage: `url(${bg_billyGrahamImage})` }}>
            <img src={billyGrahamImage} alt="Billy Graham Evangelical Association" className="resource-image" />
          </div>
          <div className="resource-caption">Billy Graham Evangelical Association</div>
        </div>
        <div className="resource-item">
          <div className="resource-card" style={{ backgroundImage: `url(${bg_uRecoverImage})` }}>
            <img src={uRecoverImage} alt="U - Recover" className="resource-image" />
          </div>
          <div className="resource-caption">U - Recover</div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
