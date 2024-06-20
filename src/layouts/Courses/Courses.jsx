import "./Courses.css";
import SectionsCard from "../../components/SectionsCard/SectionsCard";
import IT from "../../assets/IT.png";
import math from "../../assets/math.png";
import science from "../../assets/sciense.png";
import { useTranslation } from 'react-i18next';

const Courses = () => {

  const { t } = useTranslation('courses');

  const CoursesCardsData = [
      { 
          image: IT,
          title: t('it.title'),
          text: t('it.text'),
          width: '20rem',
          height: '27rem',
          lessonsNum: t('it.lessonsNum'),
          rating: t('it.rating')
      },
      { 
          image: math,
          title: t('math.title'),
          text: t('math.text'),
          width: '20rem',
          height: '27rem',
          lessonsNum: t('math.lessonsNum'),
          rating: t('math.rating')
      },
      { 
          image: science,
          title: t('science.title'),
          text: t('science.text'),
          width: '20rem',
          height: '27rem',
          lessonsNum: t('science.lessonsNum'),
          rating: t('science.rating')
      }
  ];

  return (
    <div className="Sections" id="courses">
        <h1 className="Sections-Title">{t('title')}</h1>
        <p className="Sections-text">{t('text')}</p>
      
       <div className="CoursesCards-container">
        {CoursesCardsData.map((card, index) => (
          <SectionsCard
            key={index}
            image={card.image}
            title={card.title}
            description={card.text}
            width={card.width}
            height={card.height}
            hasBorder={false}
            lessonsNum={card.lessonsNum}
            rating={card.rating}
          />
        ))}
      </div>
    </div>
  )
}

export default Courses
