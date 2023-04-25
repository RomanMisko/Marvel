import { useState, useEffect } from 'react';

export default function Scroll() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        style={{
          position: 'fixed',
          padding: '10px 0',
          top: '0',
          backgroundColor: 'white',
          borderBottom: '1px solid #c0c0c0',
          width: '100%',
        }}
      >
        Scroll top: <b>{scrollTop}</b>
      </div>
      
      </div>
    
  );
}