import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import phoneIcon from "../../assets/call.png";  
import emailIcon from "../../assets/email.png";  
import logo from "../../assets/logo.png";
import './Footer.css';

const Footer = () => {
    const { t, i18n } = useTranslation('footer');
    const [pathData, setPathData] = useState('M0,450 C-20,10 300,500 1500,0 L1500,600 L0,600 Z');
    const currentLanguage = i18n.language;

    useEffect(() => {
        const updatePathData = () => {
            if (window.innerWidth < 600) {
                setPathData('M0,290 C210,100 200,400 600,0 L900,1000 L0,2000 Z'); // Mobile 
            } else {
                setPathData('M0,450 C-20,10 300,500 1500,0 L1500,600 L0,600 Z'); // Desktop 
            }
        };

        updatePathData();
        window.addEventListener('resize', updatePathData);

        return () => window.removeEventListener('resize', updatePathData);
    }, []);

    return (
        <div className={`footer-container ${currentLanguage === 'ar' ? 'reverse' : ''}`}>
            <svg viewBox="0 0 600 600" preserveAspectRatio="xMinYMin meet" className='svg2'>
                <defs>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="80%">
                        <stop offset="0%" style={{ stopColor: '#1376DB', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#1656C2', stopOpacity: 1 }} />
                    </linearGradient>
                </defs>
                <path d={pathData} style={{ stroke: 'none', fill: 'url(#grad2)' }}></path>
            </svg>
            <div className="footer-content">
                <div className="footer-image-container">
                    <img src={logo} alt="Footer Logo" className="footer-image" />
                </div>
                <div className={`footer-row footer-center ${currentLanguage === 'ar' ? 'reverse' : ''}`}>
                    <ul className="footer-links">
                        <li>{t('home')}</li>
                        <li>{t('sections')}</li>
                        <li>{t('courses')}</li>
                    </ul>
                    <ul className="footer-links">
                        <li>{t('overview')}</li>
                        <li>{t('instructors')}</li>
                    </ul>
                </div>
                <div className="footer-info">
                    <div className="footer-contact">
                        <div><img src={phoneIcon} alt="Phone Icon" className="icon" /> {t('phone')}</div>
                        <div><img src={emailIcon} alt="Email Icon" className="icon" /> {t('email')}</div>
                    </div>
                </div>
            </div>
            <p className='copy-write'>{t('copyright')}</p>
        </div>
    );
}

export default Footer;
