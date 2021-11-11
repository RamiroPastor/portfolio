import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

import './i18n';
import { setCookieForever } from "./base/cookies";
import { LangSelector     } from "./core/LangSelector/LangSelector";
import { Routes           } from "./core/Routes/Routes";




function App() {

  const {t, i18n} = useTranslation(["translation"]);

  const changeLanguage = langCode => {
      setCookieForever("language-RamiroPastorSite", langCode);
      i18n.changeLanguage(langCode);
  }


  return (
    <Router>
      <div className="App">
        <LangSelector fnSetLang={changeLanguage}/>
        <Routes t={t}/>
      </div>
    </Router>
  );
}

export default App;
