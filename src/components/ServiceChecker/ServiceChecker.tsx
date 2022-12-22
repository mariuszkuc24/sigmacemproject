import React from "react";
import { companies, services } from "../mock";
import "./SeviceChecker.scss";

const ServiceChecker = () => {
  const [companServicesAvailability, setCompanServicesAvailability] =
    React.useState<Array<{ id: string; name: string }>>([]);
  const [selectedServiceId, setSelectedServiceId] = React.useState<string>("");

  const handleCompanyChange = (companyId: string) => {
    const availableServices = companies.find(
      (company) => company.id === companyId
    ) || { availableServices: [] };
    setCompanServicesAvailability(availableServices.availableServices);
  };

  const handleServiceChange = (serviceId: string) =>
    setSelectedServiceId(serviceId);

  const selectedService = () => {
    if (selectedServiceId !== "") {
      return services.find((service) => service.id === selectedServiceId);
    }
  };

  const selectedCompanyService = selectedService();

  console.log(
    "Tu masz wybrany service selectedCompanyService",
    selectedCompanyService
  );

  return (
    <div className="panel">
      <div className="panel-header">
        <h2>Usługi - cennik/informacje</h2>
      </div>
      <div className="select-container">
        <div className="select">
          {/* <label htmlFor="companies-select1">Wybierz sklep:</label> */}
          <select
            name="companies"
            id="companies-select1"
            onChange={(e) => handleCompanyChange(e.target.value)}
          >
            <option value="">--Proszę wybrać sklep--</option>
            {companies.map((company) => (
              <option value={company.id} key={company.id}>
                {company.name}
              </option>
            ))}
          </select>
        </div>
        <div className="select">
          {/* <label htmlFor="services-select2">Wybierz usługę:</label> */}
          <select
            name="services"
            id="services-select2"
            onChange={(e) => handleServiceChange(e.target.value)}
          >
            <option value="">--Proszę wybrać usługę--</option>
            {companServicesAvailability.map((service) => (
              <option value={service.id} key={service.id}>
                {service.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="output-panel">
        <div className="output-panel-header--small">
          <h3>{`Sklep: ${
            selectedCompanyService ? selectedCompanyService?.id : "-"
          }`}</h3>
        </div>
        <div className="output-panel-content">
          <div>{`ServiceID: ${
            selectedCompanyService ? selectedCompanyService?.id : "-"
          }`}</div>
          <div>{`Service name: ${
            selectedCompanyService ? selectedCompanyService?.name : "-"
          }`}</div>
        </div>
      </div>
    </div>
  );
};

export default ServiceChecker;
