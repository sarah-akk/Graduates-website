import { useTranslation } from 'react-i18next';
import './Contact.css';
import call from "../../assets/call.png";
import email from "../../assets/email.png";

const Contact = () => {
    const { t } = useTranslation('contact');

    return (
        <>
            <h2 className="contact-title">{t('title')}</h2>
            <div className="contact-container">
                <div className="contact-left">
                    <p className="contact-info">
                        <img src={call} alt="Call Icon" />
                        {t('phone')}
                    </p>
                    <p className="contact-info">
                        <img src={email} alt="Email Icon" />
                        {t('email')}
                    </p>
                </div>
                <div className="contact-right">
                    <form className="contact-form">
                        <input type="text" name="name" placeholder={t('namePlaceholder')} className="contact-input" />
                        <input type="email" name="email" placeholder={t('emailPlaceholder')} className="contact-input" />
                        <input type="text" name="phonenumber" placeholder={t('phonePlaceholder')} className="contact-input" />
                        <textarea name="message" placeholder={t('messagePlaceholder')} className="contact-input contact-textarea"></textarea>
                        <button type="submit" className="contact-button">{t('sendButton')}</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;
