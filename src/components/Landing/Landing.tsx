import { url } from "inspector";
import React from "react";
import { useState } from "react";
import ExternalLinkButton from "../ExternatLinkButton/ExternatLinkButton";
import "./landing.scss";
const Landing = () => {
  const systemsAndProductComments = [
    {
      pageName: "Manago360",
      urlToPage: "https://manago360.com/pl/azure/sigmacem/login",
    },
    {
      pageName: "Magento",
      urlToPage:
        "https://admin.castorama.pl/index.php/magento/sales_order/index/key/b1e59173d955e2db295e60fb01126ca5b763d6c45c093482c28d4cb277a39a43/",
    },
    {
      pageName: "Magento 2",
      urlToPage:
        " https://admin.castorama.pl/magento2admin/sales/order/index/key/4bc0018a56c23cfd79b442caf5c9d852dd74c338ea00edc307d9ede049c70517/",
    },
    {
      pageName: "DTS",
      urlToPage: "http://platform.dts.pl/login",
    },
    {
      pageName: "OrderPanel",
      urlToPage: "https://admin.castorama.pl/phone-order-panel//",
    },
    {
      pageName: "Citrix",
      urlToPage: "https://myapps.kfplc.com/logon/LogonPoint/index.html",
    },
    {
      pageName: "Moduł Wyceny",
      urlToPage: "https://www.modulwyceny.tmsys.pl/products",
    },
    {
      pageName: "Produktowe",
      urlToPage:
        "https://intelevospzoo.sharepoint.com/:x:/r/sites/CastoramaCommunicationCenter/Shared%20Documents/General/Kopia%20pliku%20Produktowe3.xlsx?d=w432c89357ac243b1b6181b051a0f6019&csf=1&web=1&e=ncfmv7",
    },
  ];
  const usefullLinks = [
    {
      pageName: "Castorama",
      urlToPage: "https://www.castorama.pl/",
    },
    {
      pageName: "Znajdź sklep",
      urlToPage: "https://www.castorama.pl/informacje/sklepy",
    },
    {
      pageName: "Regulaminy",
      urlToPage: "https://www.castorama.pl/inne-regulaminy",
    },
    {
      pageName: "Najlepsze okazje",
      urlToPage:
        "https://oferty.castorama.pl/najlepsze-okazje/?gclid=EAIaIQobChMI3pHkp-Pp6AIViNWaCh0p0wIfEAEYASAAEgIOBPD_BwE#page_1",
    },
    {
      pageName: "Zaprojektuj własne Meble",
      urlToPage: "https://atomia.tmsys.pl/",
    },
    {
      pageName: "Meble Atomia",
      urlToPage: "https://mebleatomia.castorama.pl/",
    },
    {
      pageName: "Kuchnie",
      urlToPage: "https://kuchnie.castorama.pl/",
    },
    {
      pageName: "Montaż firmy",
      urlToPage:
        "https://kuchnie.castorama.pl/pl/zakup-i-montaz/usluga-montazu/",
    },
    {
      pageName: "CastoPro",
      urlToPage: "https://castopro.castorama.pl/pl/home",
    },
    {
      pageName: "Strefa Marek",
      urlToPage: "https://www.castorama.pl/lp/strefa-marek",
    },
    {
      pageName: "Zawiadomienia",
      urlToPage: "https://www.castorama.pl/informacje/erraty-i-zawiadomienia",
    },
    {
      pageName: "Zamów do Niemczech",
      urlToPage: "https://www.castorama.pl/deutschland-szczecin",
    },
    {
      pageName: "Fundacja Castorama",
      urlToPage: "https://www.castorama.pl/fundacja-castorama",
    },
    {
      pageName: "Znajdź fachowca",
      urlToPage: "https://www.needhelp.com/pl-pl",
    },
  ];
  const otherLinks = [
    {
      pageName: "Outlook",
      urlToPage: "https://outlook.office365.com/",
    },
    {
      pageName: "Office",
      urlToPage: "https://www.office.com/",
    },
    {
      pageName: "Moniti",
      urlToPage: "https://admin.moniti.app/#/login?r=%2Fpersonal",
    },
    {
      pageName: "Grafik",
      urlToPage:
        "https://intelevospzoo-my.sharepoint.com/:x:/g/personal/krzysztof_romanowski_sigmacem_com/EfDWMDQx_6BJu5RahIuOyzUBS3xzI9UPVe5nI4RsiQTqAw?e=4%3AOaquSM&at=9&CID=E4C11732-21FA-4974-9FEB-59AEBD0EF62E&wdLOR=c72776B2B-0819-430F-AAD9-EF743C86678A",
    },
  ];
  return (
    <div>
      <section className="section-container casto-color">
        <div className="section-container__header section-container__header--casto">
          <h2 className="text--gold">Castorama - Systemy & Produktowe</h2>
        </div>
        <section className="section-links__container">
          {systemsAndProductComments.map((d, idx) => {
            return (
              <ExternalLinkButton
                key={idx}
                urlToPage={d.urlToPage}
                namePage={d.pageName}
              ></ExternalLinkButton>
            );
          })}
        </section>
        <div className="section-container__header section-container__header--casto">
          <h2>Castorama - Poradniki do systemów</h2>
        </div>
        <section className="section-links__container">
          <a className="btn-link" rel="noopener noreferrer" href="#">
            Manago 360
          </a>
        </section>
      </section>
      <section className="section-container casto-color">
        <div className="section-container__header section-container__header--casto">
          <h2>Castorama - Przydatne Strony</h2>
        </div>
        <section className="section-links__container">
          {usefullLinks.map((d, idx) => {
            return (
              <ExternalLinkButton
                key={idx}
                urlToPage={d.urlToPage}
                namePage={d.pageName}
              ></ExternalLinkButton>
            );
          })}
        </section>
      </section>
      <section className="section-container sigma-color">
        <div className="section-container__header">
          <h2>SigmaCem</h2>
        </div>
        <section className="section-links__container">
          {otherLinks.map((d, idx) => {
            return (
              <ExternalLinkButton
                key={idx}
                urlToPage={d.urlToPage}
                namePage={d.pageName}
              ></ExternalLinkButton>
            );
          })}
        </section>
      </section>
    </div>
  );
};

export default Landing;
