import React, { useState } from 'react';



const Tab = ({ tab, isActive, onTabClick }) => {
    return (
        <button
            className={`tab ${isActive ? 'active' : ''}`}
            onClick={() => onTabClick(tab)}
        >
            {tab.label}
        </button>
    );
};


const Blog = () => {
    const items = [
        { type: 'chat', label: 'MS Team', logo: process.env.PUBLIC_URL + '/assets/images/alibaba.svg' },
        { type: 'cloud', label: 'AWS', logo: process.env.PUBLIC_URL + '/assets/images/aws.svg' },
        { type: 'Container', label: 'AWS', logo: process.env.PUBLIC_URL + '/assets/images/alibaba.svg' },
        { type: 'LMS', label: 'AWS', logo: process.env.PUBLIC_URL + '/assets/images/aws.svg' },
        { type: 'ITSM', label: 'AWS', logo: process.env.PUBLIC_URL + '/assets/images/alibaba.svg' },
        // ... more items
    ];


    const [activeTab, setActiveTab] = useState('all');

    // Generate a unique list of types for the tabs
    // Convert the Set to an array before mapping
    const tabs = [
        { key: 'all', label: 'All Integrations' },
        ...Array.from(new Set(items.map(item => item.type)))
            .map(type => ({
                key: type,
                label: type.charAt(0).toUpperCase() + type.slice(1)
            }))
    ];

    const handleTabClick = (tab) => {
        setActiveTab(tab.key);
    };

    const filteredItems = activeTab === 'all' ? items : items.filter(item => item.type === activeTab);

    return (
        <section className='r-blog'>
        <div className="container">
            <div className="tabb">
            <div className="tab-filter">
            <div className="tab-buttons">
                {tabs.map(tab => (
                    <Tab
                        key={tab.key}
                        tab={tab}
                        isActive={tab.key === activeTab}
                        onTabClick={handleTabClick}
                    />
                ))}
            </div>
            <div className="tab-content">
                {filteredItems.map((item, index) => (
                    <div key={index} className="logo-item">
                        <img src={item.logo} alt={item.label} />
                        <p>{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
            </div>
        </div>
    </section>
        
    );
};

export default Blog