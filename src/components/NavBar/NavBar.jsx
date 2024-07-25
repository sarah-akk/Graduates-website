import { useState } from 'react';
import { NavData } from "../../data/NavigationData";
import { Link } from 'react-scroll';
import "./NavBar.css";
import logo from "../../assets/logo.png";
import { useTranslation } from 'react-i18next';

const NavBar = () => {
    const { t, i18n } = useTranslation('home');
    const [activeLang, setActiveLang] = useState('ar');
    const [activeMenuItem, setActiveMenuItem] = useState(0);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setActiveLang(lng);
    };

    return (
        <div className={`NaveBar ${activeLang === 'en' ? 'reverse-order' : ''}`}>
            <div className="menu-and-language-switcher">
                <div className="menu">
                    {NavData.map((item, index) => (
                        <Link
                            to={item.link}
                            key={index}
                            spy={true}
                            smooth={true}
                            offset={10}
                            duration={500}
                            onClick={() => setActiveMenuItem(index)}
                        >
                            <div className={`menuItem ${activeMenuItem === index ? 'active' : ''}`}>
                                {t(`navbar.${item.link}`)}
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="language-switcher">
                    <button
                        className={`language-button ${activeLang === 'en' ? 'active' : ''}`}
                        onClick={() => changeLanguage('en')}
                    >
                        EN
                    </button>
                    <button
                        className={`language-button ${activeLang === 'ar' ? 'active' : ''}`}
                        onClick={() => changeLanguage('ar')}
                    >
                        AR
                    </button>
                </div>
            </div>
            <img src={logo} className="logo" alt="Logo" />
        </div>
    );
}

export default NavBar;
