import React, { useState } from "react";
import { FormGroup, Label, Input } from "reactstrap";

const HomeLeft = ({ countries, onCountryChange, countryCounts }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleCountryChange = (country) => {
    onCountryChange(country);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div
        style={{
          position: "sticky",
          background: "#fff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "20px"
        }}
      >
        <h4>Filter by Country</h4>
        <input
          type="text"
          placeholder="Search country"
          value={searchTerm}
          onChange={handleSearchChange}
          style={{ marginBottom: "10px", padding: "5px" }}
        />
      </div>
      <div
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          maxHeight: "500px",
          overflowY: "auto",
          padding: "20px",
          background: "#fff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <FormGroup check className="d-flex flex-column">
          {filteredCountries.map((country) => (
            <Label check key={country}>
              <Input
                type="checkbox"
                onChange={() => handleCountryChange(country)}
              />
              {country} ({countryCounts[country]})
            </Label>
          ))}
        </FormGroup>
      </div>
    </>
  );
};

export default HomeLeft;
