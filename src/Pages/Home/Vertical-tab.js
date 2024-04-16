import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import bootstrap styles

const tabs = [
  { title: 'First', content: 'Content for first tab', imgSrc: './assets/images/alibaba.svg' },
  { title: 'Second', content: 'Content for second tab', imgSrc: './assets/images/azure.svg' },
  { title: 'Third', content: 'Content for third tab', imgSrc: './assets/images/alibaba.svg' },
  { title: 'Fourth', content: 'Content for fourth tab', imgSrc: './assets/images/azure.svg' },
  // ... add more tabs as needed
];

const VTab = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress === 100) {
          setActiveTab(prevActiveTab => (prevActiveTab + 1) % tabs.length);
          return 0; // reset progress when tab changes
        }
        return prevProgress + 20; // increase progress
      });
    }, 1000); // progress bar moves every 1 second

    return () => clearInterval(interval); // cleanup interval on unmount
  }, []);

  useEffect(() => {
    setProgress(0); // reset progress to 0 when activeTab changes
  }, [activeTab]);

  return (
    <div className="container tab-block">
      <div className="row mt-5">
        <div className="col-sm-3">
          <div className="nav flex-column nav-pills vertical-tab" id="v-tab" role="tablist" aria-orientation="vertical">
            {tabs.map((tab, index) => (
              <a
                className={`nav-link tab-slide ${index === activeTab ? 'active' : ''}`}
                id={`v-tab-${index}`}
                data-toggle="pill"
                role="tab"
                aria-controls={`v-tab-content-${index}`}
                aria-selected={index === activeTab}
                onClick={() => {
                  setActiveTab(index);
                  setProgress(0); // reset progress when tab is manually clicked
                }}
                key={index}
              >
                
                <div className="progress" style={{ width: '100%', flexGrow: 1 }}>
                  <div className="progress-bar" role="progressbar" style={{ width: `${index === activeTab ? progress : 0}%` }}></div>
                </div>
                <div>{tab.title}</div>
              </a>
            ))}
          </div>

        </div>
        <div className="col-sm-9">
          <div className="tab-content" id="v-tabContent">
            {tabs.map((tab, index) => (
              <div className={`tab-pane fade ${index === activeTab ? 'show active' : ''}`} id={`v-tab-content-${index}`} role="tabpanel" aria-labelledby={`v-tab-${index}`} key={index}>
                <img className="d-block w-100" src={tab.imgSrc} alt={`${tab.title} slide`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VTab;
