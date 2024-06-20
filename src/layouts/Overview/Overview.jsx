import './Overview.css';
import photo1 from "../../assets/photo1.png"
import photo2 from "../../assets/photo2.png"
import photo3 from "../../assets/photo3.png"
import photo4 from "../../assets/photo4.png"
import photo5 from "../../assets/photo5.png"
import photo6 from "../../assets/photo6.png"
import photo7 from "../../assets/photo7.png"

import degree from "../../assets/degree.png"
import video from "../../assets/video.png"
import profile from "../../assets/profile.png"

import { useTranslation } from 'react-i18next';

const Overview = () => {
  const { t, i18n } = useTranslation('overview');

  const currentLanguage = i18n.language;
  const isRtl = currentLanguage === 'ar'; 

  return (
    <div className="overview-container" id="overview">
      <div className={`overview-left ${isRtl ? 'rtl' : ''}`}>
        <h2 className="overview-title">{t('overviewTitle')}</h2>
          <li className="overview-item">
          <img src={degree} alt="Degree Icon" className="item-image" />
            <div>
              <h2>{t('onlineDegrees')}</h2>
              <p>{t('onlineDegreesText')}</p>
            </div>
          </li>
          <li className="overview-item">
          <img src={video} alt="Video Icon" className="item-image" />
            <div>
              <h2>{t('shortCourses')}</h2>
              <p>{t('shortCoursesText')}</p>
            </div>
          </li>
          <li className="overview-item">
          <img src={profile} alt="Profile Icon" className="item-image" />
            <div>
              <h2>{t('professionalInstructors')}</h2>
              <p>{t('professionalInstructorsText')}</p>
            </div>
          </li>
      </div>
      <div className="overview-right">
        <div className="circle-container">
          <div className="circle">
            <img src={photo1} alt="Circle 1" className="circle-image" />
          </div>
          <div className="circle">
            <img src={photo2} alt="Circle 2" className="circle-image" />
          </div>
          <div className="circle">
            <img src={photo3} alt="Circle 3" className="circle-image" />
          </div>
          <div className="circle">
            <img src={photo4} alt="Circle 4" className="circle-image" />
          </div>
          <div className="circle">
            <img src={photo5} alt="Circle 5" className="circle-image" />
          </div>
          <div className="circle">
            <img src={photo6} alt="Circle 6" className="circle-image" />
          </div>
          <div className="circle">
            <img src={photo7} alt="Circle 7" className="circle-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
