import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';


export default function PlatformOverview() {
  const [activeTab, setActiveTab] = useState('tab1');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1); // Get current hash without '#'
      if (['tab1', 'tab2', 'tab3', 'tab4'].includes(hash)) {
        setActiveTab(hash);
      }
    };

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Check initial hash
    handleHashChange();

    // Cleanup
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderTab = () => {
    switch (activeTab) {
      case 'tab1':
        return <Tab1 />;
      case 'tab2':
        return <Tab2 />;
      case 'tab3':
        return <Tab3 />;
      case 'tab4':
        return <Tab4 />;
      default:
        return null;
    }
  };

  

  return (
    <>
    <section className='hero-sec3'>
        <div className='container'>
          <div className="row">
              <div className="col-12 hero-content">
                <h1>Keep cloud spending <span>in control</span></h1>
                <p>Provisioning cloud resources and consumption isn’t easy. Budget, forecast and set limits across your multicloud services with CloudVerse.</p>
              </div>
          </div>
        </div>
      </section>
      
      <section className='tab-sec3'>
        <div className="container">
          <dic className="row">
            <div className="col-12">
            <nav >
            <Link to="#tab1" onClick={() => setActiveTab('tab1')} className={activeTab === 'tab1' ? 'active' : ''}>ASSET MONITORING & TRACKING</Link>
            <Link to="#tab2" onClick={() => setActiveTab('tab2')} className={activeTab === 'tab2' ? 'active' : ''}>PRODUCT & APPLICATION VISIBILITY</Link>
            <Link to="#tab3" onClick={() => setActiveTab('tab3')} className={activeTab === 'tab3' ? 'active' : ''}>CLOUD SPENDING & BUDGETING</Link>
            <Link to="#tab4" onClick={() => setActiveTab('tab4')} className={activeTab === 'tab4' ? 'active' : ''}>SAVINGS RECOMMENDATION & ALERTS</Link>
            </nav>
            </div>
          </dic>
          <div className='tab-content'>
          {renderTab()}
          </div>
        </div>
      </section>


      <section className='height100'>
       
      </section>

      <Routes>
        <Route path="/tab1" element={<Tab1 />} />
        <Route path="/tab2" element={<Tab2 />} />
        <Route path="/tab3" element={<Tab3 />} />
        <Route path="/tab4" element={<Tab4 />} />
      </Routes>

      
    </>
  );
}
