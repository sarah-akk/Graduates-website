import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import logo from "../../assets/logo.png";
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation('footer');
  const [pathData, setPathData] = useState('M0,100 C0,250 690,0 500,460 L500,00 L0,0 Z');

  useEffect(() => {
    const updatePathData = () => {
      if (window.innerWidth < 600) {
        setPathData('M0,200 C100,150 10,400 700,10 L300,1000 L0,1200 Z'); // Mobile 
      } else {
        setPathData('M0,400 C-20,10 300,500 1500,0 L1500,500 L0,500 Z'); // Desktop 
      }
    };

    updatePathData();
    window.addEventListener('resize', updatePathData);

    return () => window.removeEventListener('resize', updatePathData);
  }, []);

  return (
    <div className="footer-container">
      <svg viewBox="0 0 400 400" preserveAspectRatio="xMinYMin meet" className='svg2'>
        <defs>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="80%">
            <stop offset="0%" style={{ stopColor: '#127EE1', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#127EE1', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path d={pathData} style={{ stroke: 'none', fill: 'url(#grad2)' }}></path>
      </svg>
      <div className="footer-content">
        <div className="footer-row footer-center">
          <div className="footer-column footer-info">
            <div className="footer-contact">
              <p>{t('contactUs')}</p>
              <p>{t('phone')}</p>
              <p>{t('email')}</p>
            </div>
          </div>

          <ul className="footer-links">
            <li>{t('home')}</li>
            <li>{t('sections')}</li>
            <li>{t('courses')}</li>
          </ul>
          <ul className="footer-links">
            <li>{t('overview')}</li>
            <li>{t('instructors')}</li>
          </ul>
          <div className="footer-column footer-image">
            <img src={logo} alt="Footer Logo" className="footer-image" />
          </div>
        </div>
        <p className='copy-write'>{t('copyright')}</p>
      </div>
    </div>
  );
}

export default Footer;
