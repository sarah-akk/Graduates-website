import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import lady from "../../assets/lady.png";
import NavBar from '../../components/NavBar/NavBar';
import SectionsCard from "../../components/SectionsCard/SectionsCard";
import Sidebar from '../../components/SideBar/SideBar';
import logo from "../../assets/logo.png";
import duration from "../../assets/duration.png";
import graduates from "../../assets/graduates.png";
import sections from "../../assets/sections.png";
import './Home.css';

const Home = () => {
  const { t, i18n } = useTranslation();
  const [pathData, setPathData] = useState('M0,100 C10,250 690,0 500,460 L500,00 L0,0 Z');
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const currentLanguage = i18n.language;

  const StartPageCardsData = [
    { 
      image: duration,
      title: t('cards.duration.title'),
      text: t('cards.duration.text'),
      width: '5rem',
      height: '6rem'
    },
    { 
      image: graduates,
      title: t('cards.graduates.title'),
      text: t('cards.graduates.text'),
      width: '5rem',
      height: '6rem'
    },
    { 
      image: sections,
      title: t('cards.sections.title'),
      text: t('cards.sections.text'),
      width: '5rem',
      height: '6rem'
    }
  ];

  useEffect(() => {
    const updatePathData = () => {
      if (window.innerWidth < 600) {
        setPathData('M0,600 C100,1200 1000,0 900,2500 L500,00 L0,0 Z'); // Mobile
      } else {
        setPathData('M0,100 C10,310 710,0 500,460 L500,00 L0,0 Z'); // Desktop
      }
    };

    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 600);
    };

    updatePathData();
    updateIsMobile();
    window.addEventListener('resize', updatePathData);
    window.addEventListener('resize', updateIsMobile);

    return () => {
      window.removeEventListener('resize', updatePathData);
      window.removeEventListener('resize', updateIsMobile);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  
  const toggleLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSidebarOpen(false); 
  };  

  const orderedCardsData = currentLanguage === 'en' ? [...StartPageCardsData].reverse() : StartPageCardsData;

  return (
    <div className="container" id='home'>
      <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="30%">
            <stop offset="0%" style={{ stopColor: '#127EE1', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#163EAF', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path d={pathData} style={{ stroke: 'none', fill: 'url(#grad1)' }}></path>
        {!isMobile ? <circle cx="40" cy="160" r="20" fill="transparent" stroke='white' /> : " "}
      </svg>

      {isMobile ? (
        <div className='SideBar-Row'> 
          <img src={logo} alt="logo" />
          <button className="sidebar-toggle" onClick={toggleSidebar}>☰</button>
          <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} onLanguageChange={toggleLanguage} />
        </div>
      ) : (
        <NavBar />
      )}

      {currentLanguage === 'en' && (
        <div className="content">
          <div className="image-content">
            <img src={lady} alt="Image" />
          </div>
          <div className="text-content-en">
            <h1>{t('welcome_message')}</h1>
            <p dangerouslySetInnerHTML={{ __html: t('description') }}></p>
          </div>
        </div>
      )}

      {currentLanguage === 'ar' && (
        <div className="content">
          <div className="text-content">   
            <h1>{t('welcome_message')}</h1>
            <p dangerouslySetInnerHTML={{ __html: t('description') }}></p> 
          </div>
          <div className="image-content">
            <img src={lady} alt="Image" />
          </div>
        </div>
      )}

      <div className="homeCards-container">
        {orderedCardsData.map((card, index) => (
          <SectionsCard
            key={index}
            image={card.image}
            title={card.title}
            description={card.text}
            width={card.width}
            height={card.height}
            hasBorder={true}
            homeCard={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
