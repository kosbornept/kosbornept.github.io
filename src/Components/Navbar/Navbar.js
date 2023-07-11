import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const lngs = {
  en: { nativeName: 'English' },
  pt: { nativeName: 'Português' }
};

export default function Navbar() {
  const { i18n, t } = useTranslation();

  return (
    <nav>
      <ul>
      <li>
          <NavLink to='/home' className={ ({ isActive }) => `nav-link ${isActive? 'nav-link-active': ''}`}>
            {t('nav.home')}
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' className={ ({ isActive }) => `nav-link ${isActive? 'nav-link-active': ''}`}>
          {t('nav.about')}
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact' className={ ({ isActive }) => `nav-link ${isActive? 'nav-link-active': ''}`}>
          {t('nav.contact')}
          </NavLink>
        </li>
        <li>
        <div>
        <select
          defaultValue={i18n.resolvedLanguage}
          style={{ fontWeight: 'bold' }}
          onChange={e => {
            i18n.changeLanguage(e.target.value);
          }}
        >
          {Object.keys(lngs).map((lng) => (
              <option
                key={lng}
                value={lng}
                style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
              >
                {lngs[lng].nativeName}
              </option>
            )
          )}
        </select>

          
        </div>
        </li>
      </ul>
    </nav>
  )
}
