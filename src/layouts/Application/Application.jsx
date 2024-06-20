import { useTranslation } from 'react-i18next';
import googlePlay from "../../assets/googlePlay.jpg";
import mobile from "../../assets/mobile.png";
import './Application.css';

const Application = () => {
    const { t } = useTranslation('application');

    return (
        <div className="application-container">
            <div className="application-left">
                <p className="application-text">{t('startDownload')}</p>
            </div>
            <div className="application-middle">
                <img src={mobile} alt="Middle Image" className="application-image" />
            </div>
            <div className="application-right">
                <p className="application-text">{t('downloadFromHere')}</p>
                <img src={googlePlay} alt="Right Side Image" className="application-image" />
            </div>
        </div>
    );
};

export default Application;
