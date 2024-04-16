import React, { useState } from 'react';

const Swich = () => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleSwitch = () => {
        setIsChecked((prev) => !prev);
    };

    return (
        <>
          <div className="swich-head">
          <span className={isChecked ? 'before-text atv' : 'before-text'}>Before CloudVerse</span>
      <input type="checkbox" className="switch" onChange={toggleSwitch} checked={isChecked} />
      <span className={isChecked ? 'after-text' : 'after-text atv'}>After CloudVerse</span>
          </div>
            <div className="swich-images">
            <img src={process.env.PUBLIC_URL + '/assets/images/Before.svg'} alt="Image 1" className={isChecked ? 'swich-img hidden' : 'swich-img'} />
            <img src={process.env.PUBLIC_URL + '/assets/images/After.svg'} alt="Image 2" className={isChecked ? 'swich-img' : 'swich-img hidden'} />
            </div>
        </>
    );
}

export default Swich