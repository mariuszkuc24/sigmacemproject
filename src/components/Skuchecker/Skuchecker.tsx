import React from "react";
import { useState } from "react";
import "./skuchecker.scss";

const ShowShopSection = ({ inputed }: any) => {
  let shopSection: any = '';
  let shopSectors: any = [];
  const firstNumAtEnteredSku = parseInt(inputed.charAt(0));

  console.log('inputed', inputed.length);

  if (inputed.length ===5 || inputed.length ===6) {
    switch (firstNumAtEnteredSku) {
      case 1:
        shopSection = "Metalowy";
        shopSectors = ["Techniczny", "Remontujesz"];
        break;
      case 2:
        shopSection = "Narzędzia";
        shopSectors = ["Techniczny", "Remontujesz"];
        break;
      case 3:
        shopSection = "Drewno";
        shopSectors = ["Budujesz"];
        break;
      case 4:
        shopSection = "Pokrycia podłogowe";
        shopSectors = ["Urządzasz"];
        break;
      case 5:
        shopSection = "Sanitarny";
        shopSectors = ["Techniczny", "Remontujesz", "Urządzasz"];
        break;
      case 6:
        shopSection = "Ogród";
        shopSectors = ["Ogród"];
        break;
      case 7:
        shopSection = "Dekorujesz";
        shopSectors = ["Dekoracje"];
        break;
      case 8:
        shopSection = "Elektryczny";
        shopSectors = ["Metalowy", "Remontujesz"];
        break;
      case 9:
        shopSection = "Budowlany";
        shopSectors = ["Budujesz"];
        break;
      default:
        shopSection = "Nie ta takiego działu, spróbuj ponownie!";
        shopSectors = ["Nie ta takiego sektoru, spróbuj ponownie!"];
        break;
    }
  } else if (inputed.length>6) {
    shopSection = "Podano za długi numer SKU, spróbuj ponownie!";
      shopSectors = ["Podano za długi numer SKU, spróbuj ponownie!"];
  }

  return (
    <div id="list-info">
      <strong>Dział:</strong>
      <ul id="list-section">{shopSection}</ul>
      <strong>Sektor/Sektory:</strong>
      <ul id="list-sectors">{shopSectors.map((shopSector: any) => (<li key={shopSector}>{shopSector}</li>))}</ul>
    </div>
  );
};

const Skuchecker = () => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <section className="sku-checker-container">
      <div className="sku-checker-header">
        <h2>SKU CHECKER</h2>
      </div>

      <div className="sku-checker-input-panel">
        <h4>
          Podaj numer SKU by sprawdzić z którego działu, lub sektora pochodzi
          produkt:{" "}
        </h4>
        <label htmlFor="inp" className="inp">
          <input
            type="text"
            id="inp"
            placeholder="&nbsp;"
            value={value}
            onChange={handleChange}
          />
          <span className="label">Numer SKU</span>
          <span className="focus-bg"></span>
        </label>
      </div>
      <div className="sku-checker-output-panel">
        <div className="sku-checker-header--small">
          <h3>Działy i sektory:</h3>
        </div>
        <div className="sku-checker-output-panel-content">
          <span>
            Numer SKU: <em id="log-number">{value}</em>
          </span>
          <ShowShopSection inputed={value} />
        </div>
      </div>
    </section>
  );
};

export default Skuchecker;
