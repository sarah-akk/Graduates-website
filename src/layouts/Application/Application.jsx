import { useTranslation } from 'react-i18next';
import googlePlay from "../../assets/googlePlay.jpg";
import mobile from "../../assets/mobile.png";
import './Application.css';

const Application = () => {
    const { t, i18n } = useTranslation('application');
    const currentLanguage = i18n.language;

    return (
        <div className={`application-container ${currentLanguage === 'en' ? 'reverse' : ''}`}>
            <div className="application-text-container">
               <p className="application-text">{t('startDownload')}</p>
                <p className="application-text">{t('downloadFromHere')}</p>
                <img src={googlePlay} alt="Google Play" className="application-image" />
            </div>
            <div className="application-image-container">
                <img src={mobile} alt="Mobile" className="application-image" />
            </div>
        </div>
    );
};

export default Application;
