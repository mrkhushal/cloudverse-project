import React, { useState, useEffect, useRef } from 'react';

function CountToValue({ value, duration, details }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const steps = value / duration;
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        if (count < value) {
          setCount((prevCount) => prevCount + steps);
        } else {
          setCount(value); // Ensure the count reaches the exact value
          clearInterval(interval);
        }
      }, 10); // Adjust the interval duration as needed

      return () => clearInterval(interval);
    }
  }, [isVisible, count, value, steps]);

  return (
    <div className="count" ref={countRef}>
      <h3><span>{Math.round(count)}</span> %</h3>
      <p>{details}</p>
    </div>
  );
}

function ExampleComponent() {
  const values = [
    { value: 100, details: 'on Cloud Silos' },
    { value: 20, details: 'on Cloud Spend' },
    { value: 50, details: 'on Team Productivity' }
  ];
  const maxDuration = Math.max(...values.map((item) => item.value)); // Find the maximum value

  return (
    <section className="second">
      <div className="container">
        <h2 className='m-h2 text-center'>Deliver efficient, comprehensive management <br /> for enterprise cloud operations</h2>
        <div className="counts">
          {values.map((item, index) => (
            <CountToValue key={index} value={item.value} duration={maxDuration} details={item.details} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExampleComponent;
