import './Coaches.css';
import { useTranslation } from 'react-i18next';
import teacher from '../../assets/teacher.png'; 

const Coaches = () => {

  const { t } = useTranslation('coaches');

  return (
    <div className="coaches-container" id="coaches">
      <div className="coaches-left">
        <img src={teacher} alt="Coach 1" className="coach-image" />
        <img src={teacher} alt="Coach 2" className="coach-image" />
        <img src={teacher} alt="Coach 3" className="coach-image" />
      </div>
      <div className="coaches-right">
      <h2 className="coaches-title">{t('title')}</h2>
      <p className="coaches-paragraph">{t('paragraph')}</p>
      </div>
    </div>
  );
}

export default Coaches;
