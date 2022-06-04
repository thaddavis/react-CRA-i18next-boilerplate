import React, { useEffect } from 'react';
import './App.css';

import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [])

  const lng = navigator.language;
  
  return (
    <div id="app-wrapper">
      <h2>
        {t('ns1:to_the_front')}
        {/* {t('public:hello_world')} */}
      </h2>
      <span>
        Browser Language: {lng}
      </span>
    </div>
  );
  
}

export default App;
