import { useState } from "react";
import { useTranslation } from 'react-i18next';
import SectionsCard from "../../components/SectionsCard/SectionsCard";
import courses from "../../assets/courses.png";
import bacaloria from "../../assets/bacaloria.png";
import certificates from "../../assets/certificates.png";
import "./Sections.css";

const Sections = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { t } = useTranslation('sections');

  const SectionsCardsData = [
    { 
      image: courses,
      title: t('courses.title'),
      text: t('courses.text'),
      width: '15rem',
      height: '20rem'
    },
    { 
      image: bacaloria,
      title: t('bachelor.title'),
      text: t('bachelor.text'),
      width: '15rem',
      height: '20rem'
    },
    { 
      image: certificates,
      title: t('certificates.title'),
      text: t('certificates.text'),
      width: '15rem',
      height: '20rem'
    }
  ];

  return (
    <div className="Sections" id="sections">
      <h1 className="Sections-Title">{t('title')}</h1>
      <p className="Sections-text">{t('text')}</p>
      <div className="SectionCards-container">
        {SectionsCardsData.map((card, index) => (
          <SectionsCard
            key={index}
            image={card.image}
            title={card.title}
            description={card.text}
            width={card.width}
            height={card.height}
            hasBorder={true}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
        ))}
      </div>
      <div className="dots-container">
        {SectionsCardsData.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === hoveredIndex ? 'hovered' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Sections;
