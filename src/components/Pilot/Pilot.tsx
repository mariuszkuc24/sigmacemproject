import React from "react";
import { useState } from "react";
import ShopListItem from "../ShopListItem/ShopListItem";
import ExternalLinkButton from "../ExternatLinkButton/ExternatLinkButton";
import "./pilot.scss";
const urlProcedures =
  "https://intelevospzoo.sharepoint.com/:w:/r/sites/CastoramaCommunicationCenter/Shared%20Documents/General/Piloty_Wroc%C5%82aw_Warszawa/Pilot_Wroc%C5%82aw_Warszawa_scenariusze_post%C4%99powania.docx?d=w654a3254fd804b0d830335e4733b5026&csf=1&web=1&e=s1p7vk";
const urlContactListSzczecin =
  "https://intelevospzoo.sharepoint.com/:x:/r/sites/CastoramaCommunicationCenter/Shared%20Documents/General/Piloty_Wroc%C5%82aw_Warszawa_Szczecin_Stargard/Kontakt_Szczecin_Stargard_fin.xlsx?d=w05a6c94df30549129cec74f144430942&csf=1&web=1&e=sNSptb";
const urlContactListWarszawa =
  "https://intelevospzoo.sharepoint.com/:x:/r/sites/CastoramaCommunicationCenter/Shared%20Documents/General/Piloty_Wroc%C5%82aw_Warszawa/Kontakt_Warszawa_Pilot_aktualizacja24.10.xlsx?d=wec54f71b218949e3977b82e03fbe1048&csf=1&web=1&e=1auWyg";
const urlContactListWroclaw =
  "https://intelevospzoo.sharepoint.com/:x:/r/sites/CastoramaCommunicationCenter/Shared%20Documents/General/Piloty_Wroc%C5%82aw_Warszawa/Kontakt%20ze%20sklepem-%20z%20kim%20si%C4%99%20kontaktowa%C4%87-%20Wroc%C5%82aw..xlsx?d=w08dc2cfa5241425a891ce2423b4f881b&csf=1&web=1&e=gCYptJ";
const urlContactToAll =
  "https://intelevospzoo.sharepoint.com/:x:/r/sites/CastoramaCommunicationCenter/Shared%20Documents/General/Aktualne_Zestawienie_Kontaktowe_Castorama%2027.06.2022.xlsx?d=w7daa371e51894b58aa0922af97f47971&csf=1&web=1&e=cKs0O8";
const urlServicesListSzczecin =
  "https://intelevospzoo.sharepoint.com/:x:/r/sites/CastoramaCommunicationCenter/Shared%20Documents/General/Piloty_Wroc%C5%82aw_Warszawa_Szczecin_Stargard/Szczecin_Stargard_us%C5%82ugi_fin2.xlsx?d=wfa892ccfca0e457d9d7c73c028464b07&csf=1&web=1&e=PsVUEc";
const urlServicesListWarszawa =
  "https://intelevospzoo.sharepoint.com/:x:/r/sites/CastoramaCommunicationCenter/Shared%20Documents/General/Piloty_Wroc%C5%82aw_Warszawa_Szczecin_Stargard/Kopia%20pliku%20Pilot%20Warszawa%20-%20Us%C5%82ugi_finalna_wersja.xlsx?d=wdcf17179ff394eecae44a1be24ab226f&csf=1&web=1&e=GAowoW";
const urlServicesListWroclaw =
  "https://intelevospzoo.sharepoint.com/:x:/r/sites/CastoramaCommunicationCenter/Shared%20Documents/General/Piloty_Wroc%C5%82aw_Warszawa/zestawienia_do%20uzupe%C5%82nienia%20sklepy_ca%C5%82o%C5%9B%C4%87%201.xlsx?d=w717b6aa3d15b4377a2dbff687b3063de&csf=1&web=1&e=hzYYLu";
// strony sklep??w

const shopWithHibrid = [
  {
    shopName: "Stargard ul. Tadeusza Ko??ciuszki 73a",
    urlToShop: "https://www.castorama.pl/sklepy/szczecin-struga.html",
  },
  {
    shopName: "??winouj??cie - Castorama Smart ul. Wojska Polskiego 96",
    urlToShop: "https://www.castorama.pl/sklepy/swinoujscie.html",
  },
  {
    shopName: "Szczecin Ku S??o??cu ul. Ku S??o??cu 67b",
    urlToShop: "https://www.castorama.pl/sklepy/szczecin-ku-sloncu.html",
  },
  {
    shopName: "Szczecin Po??udniowa ul. Po??udniowa 21",
    urlToShop: "https://www.castorama.pl/sklepy/szczecin-poludniowa.htmll",
  },
  {
    shopName: "Szczecin Struga ul. Wiosenna 80",
    urlToShop: "https://www.castorama.pl/sklepy/szczecin-struga.html",
  },
  {
    shopName: "Warszawa Grochowska ul. Grochowska 21",
    urlToShop: "https://www.castorama.pl/sklepy/warszawa-grochowska.html",
  },
  {
    shopName: "Warszawa Ok??cie Al. Krakowska 75",
    urlToShop: "https://www.castorama.pl/sklepy/warszawa-okecie.html",
  },
  {
    shopName: "Warszawa Targ??wek ul. G????bocka 15a",
    urlToShop: "https://www.castorama.pl/sklepy/warszawa-targowek.html",
  },
  {
    shopName: "Warszawa W??ochy ul. Popularna 71",
    urlToShop: "https://www.castorama.pl/sklepy/warszawa-wlochy.html",
  },
  {
    shopName: "Warszawa Wola Park ul. G??rczewska 124",
    urlToShop: "https://www.castorama.pl/sklepy/warszawa-wola-park.html",
  },

  {
    shopName: "Wroc??aw Bielany Wroc??awskie ul. Czekoladowa 3",
    urlToShop: "https://www.castorama.pl/sklepy/bielany-wroclawskie.html",
  },
  {
    shopName: "Wroc??aw Graniczna ul. Graniczna 2a",
    urlToShop: "https://www.castorama.pl/sklepy/wroclaw-graniczna.html",
  },
  {
    shopName: "Wroc??aw Korona ul. B. Krzywoustego 126a",
    urlToShop: "https://www.castorama.pl/sklepy/wroclaw-korona.html",
  },
  {
    shopName: "Wroc??aw Magnolia ul. Legnicka 58",
    urlToShop: "https://www.castorama.pl/sklepy/wroclaw-magnolia.html",
  },
];
const shopWithnoutHibrid = [
  {
    shopName: "August??w Castorama Smart ul. Mazurska 10",
    urlToShop: "https://www.castorama.pl/sklepy/augustow.html",
  },
  {
    shopName: "??om??a Castorama Smart al. Marsza??ka J??zefa Pi??sudskiego 137",
    urlToShop: "https://www.castorama.pl/sklepy/lomza.html",
  },
  {
    shopName: "M??awa Castorama Smart Al. ??wi??tego Wojciecha 17",
    urlToShop: "https://www.castorama.pl/sklepy/mlawa.html",
  },
  {
    shopName:
      "Ostr??w Wielkopolski Castorama Smart ul. Ks. Pra??ata Czes??awa Majorka 2",
    urlToShop: "https://www.castorama.pl/sklepy/ostrow-wielkopolski.html",
  },
  {
    shopName: "Warszawa Ursus Express ul. Herbu Oksza 24",
    urlToShop: "https://www.castorama.pl/sklepy/warszawa-ursus.html",
  },
];
const Pilot = () => {
  return (
    <div>
      <section className="section-container casto-color">
        <div className="section-container__header section-container__header--casto">
          <h2>Przydatne pliki</h2>
        </div>
        <section className="section-links__container">
        <div style={{textAlign: "center"}}>
            <h1>Poradniki</h1>
            <ExternalLinkButton
              namePage="Procedury"
              urlToPage={urlProcedures}
            ></ExternalLinkButton>
          </div>
          <div style={{textAlign: "center"}}>
            <h1>Szczecin</h1>
            <ExternalLinkButton
              namePage="Kontakt"
              urlToPage={urlContactListSzczecin}
            ></ExternalLinkButton>
            <ExternalLinkButton
              namePage="Us??ugi Cennik"
              urlToPage={urlServicesListSzczecin}
            ></ExternalLinkButton>
          </div>
          <div style={{textAlign: "center"}}>
            <h1>Warszawa</h1>
            <ExternalLinkButton
              namePage="Kontakt"
              urlToPage={urlContactListWarszawa}
            ></ExternalLinkButton>
            <ExternalLinkButton
              namePage="Us??ugi Cennik"
              urlToPage={urlServicesListWarszawa}
            ></ExternalLinkButton>
          </div>
          <div style={{textAlign: "center"}}>
            <h1>Wroc??aw</h1>
            <ExternalLinkButton
              namePage="Kontakt"
              urlToPage={urlContactListWroclaw}
            ></ExternalLinkButton>
            <ExternalLinkButton
              namePage="Us??ugi Cennik"
              urlToPage={urlServicesListWroclaw}
            ></ExternalLinkButton>
          </div>
          <div style={{textAlign: "center"}}>
            <h1>Kontakt inne</h1>
            <ExternalLinkButton
              namePage="Smarty/Expess"
              urlToPage="#"
            ></ExternalLinkButton>
            <ExternalLinkButton
              namePage="Zestawienie"
              urlToPage={urlContactToAll}
            ></ExternalLinkButton>   
          </div>
        </section>
      </section>
      <section className="task" id="sklepy_lista-obslugiwanych-sklepow">
        <div className="task__header">
          <h2>Sklepy obj??te programem pilota??owym</h2>
        </div>
        <section className="task__description">
          <div className="task-content-divide-half">
            <div className="half">
              <div className="task__description-header">
                <h3>
                  W przypadku kontaktu z tym sklepem dodajemy kategorie "Hybryda"
                </h3>
              </div>
              <div className="task__description-more">
                <ul>
                  {shopWithHibrid.map((d, idx) => {
                    return (
                      <ShopListItem
                        key={idx}
                        urlToShop={d.urlToShop}
                        shopName={d.shopName}
                      ></ShopListItem>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="half">
              <div className="task__description-header">
                <h3>Pozosta??e</h3>
              </div>
              <div className="task__description-more">
                <ul>
                  {shopWithnoutHibrid.map((d, idx) => {
                    return (
                      <ShopListItem
                        key={idx}
                        urlToShop={d.urlToShop}
                        shopName={d.shopName}
                      ></ShopListItem>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="task" id="sklepy_kontakt-do-sklepu">
        <div className="task__header">
          <h2>Zasady kontaktu ze sklepami w przypadku kt??rych dodajemy kategorie "Hybryda"</h2>
        </div>
        <section className="task__description">
          <div className="task__description-header">
            <h3>Og??lne zasady kontaktu:</h3>
          </div>
          <div className="task__description-more">
            <p>
              W przypadku, w kt??rym b??dziesz potrzebowa??/a konsultacji ze
              sklepem (czyli przydarzy Ci si?? kategoria zwana hybryd??)
              skontaktujesz si?? z jednym z wprowadzonych do Manago numer??w.
            </p>
            <ol>
              <li>SOK (Sektor Obs??ugi Klienta)</li>
              <li>KD (kierownik Dy??urny)</li>
              <li>Logistyka</li>
            </ol>
            <p>
              W pliku, kt??ry znajduje si?? na teams (lub poni??ej) znajdziesz
              kategorie, kt??re przypisane s?? do poszczeg??lnych numer??w i
              zdarze??. Bardzo wa??ne! Ka??dy ze sklep??w mo??e mie?? przypisany inny
              proces do wskazanego numeru. Z tego powodu, prosz?? Was o
              szczeg??ln?? uwag??. Je??li nie znajdziecie jakiej?? kategorii, mo??ecie
              podej???? do Pauliny lub do Magdy, kolejno do seniora, wska??emy pod
              jaki numer powinni??cie si?? kontaktowa??.
            </p>
            <span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={urlContactListSzczecin}
                style={{ color: "red" }}
              >
                Szczecin (kliknij!)
              </a>{" "}
              /
            </span>
            <span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={urlContactListWarszawa}
                style={{ color: "red" }}
              >
                Warszawa (kliknij!)
              </a>{" "}
              /
            </span>
            <span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={urlContactListWroclaw}
                style={{ color: "red" }}
              >
                Wroc??aw (kliknij!)
              </a>
            </span>
          </div>
          <div className="task__description-header">
            <h3>Co w przypadku gdy nie uda nam si?? po????czy???</h3>
          </div>
          <div className="task__description-more">
            <h4 style={{ color: "#0078d7" }}>SOK/LOGISTYKA</h4>
            <ol>
              <li>SOK/Logistyka - max. Dwie pr??by po????czenia</li>
              <li>
                KD - Gdy nie uda nam si?? po????czy?? pod SOK/Logistyka kierujemy
                zapytanie do KD. Jedna pr??ba max.
              </li>
              <li>
                Wiadomo???? mailowa - Gdy nie uda nam si?? po????czy?? do KD, piszemy
                maila do sklepu
              </li>
            </ol>
            <h4 style={{ color: "#0078d7" }}>KD (Kierownik Dy??urny)</h4>
            <ol>
              <li>
                KD - max. Trzy pr??by po????czenia
              </li>
              <li>
                Wiadomo???? mailowa - Gdy nie uda nam si?? po????czy?? do KD, piszemy
                maila do sklepu
              </li>
            </ol>
            <h4 style={{ color: "red" }}>
              Za ka??dym razem zapisuj w tasku liczb?? pr??b, oraz informacje
              Udana/Nieudana
            </h4>
          </div>
        </section>
      </section>
      <section className="task" id="sklepy_kontakt-do-sklepu">
        <div className="task__header">
          <h2>Smarty, i Express czym si?? r????ni?? od standardowych sklep??w?</h2>
        </div>
        <section className="task__description">
          <div className="task__description-header">
            <h3>SMARTY:</h3>
          </div>
          <div className="task__description-more">

          </div>
        </section>
      </section>
    </div>
  );
};

export default Pilot;
