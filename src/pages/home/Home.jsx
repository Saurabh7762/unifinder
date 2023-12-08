import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";
import fetchUniversities from "../../API/universityApi";
import "./home.css";

const Home = () => {
  const [allUniversities, setAllUniversities] = useState([]);
  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [countryCounts, setCountryCounts] = useState({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const itemsPerPage = 50;
  const [maxCountry, setMaxCountry] = useState("");
  const [minCountry, setMinCountry] = useState("");

  useEffect(() => {
    handleFetchUniversities();
  }, []);

  const handleFetchUniversities = async () => {
    try {
      const data = await fetchUniversities("");
      setAllUniversities(data);

      const counts = data.reduce((acc, uni) => {
        acc[uni.country] = (acc[uni.country] || 0) + 1;
        return acc;
      }, {});
      setCountryCounts(counts);

      setFilteredUniversities(data);

    } catch (error) {
      console.error("Error fetching universities:", error);
    }
  };

  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredUniversities.slice(startIndex, endIndex);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleCountryChange = (country) => {
    const updatedCountries = selectedCountries.includes(country)
      ? selectedCountries.filter((c) => c !== country)
      : [...selectedCountries, country];

    setSelectedCountries(updatedCountries);

    const filtered = allUniversities.filter(
      (uni) =>
        updatedCountries.length === 0 || updatedCountries.includes(uni.country)
    );

    setFilteredUniversities(filtered);
  };

  const handleFilterButtonClick = (e) => {
    e.preventDefault();
    setIsPopupOpen(!isPopupOpen);
  };

  const handlePopupClick = (e) => {
    if (e.target.id === "home-left-popup") {
      setIsPopupOpen(false);
    }
  };


   const handleMaxButtonClick = () => {
     const maxCountry = Object.keys(countryCounts).reduce((a, b) =>
       countryCounts[a] > countryCounts[b] ? a : b
     );
     setMaxCountry(maxCountry);
     setMinCountry(""); // Reset minCountry when max button is clicked
   };

   const handleMinButtonClick = () => {
     const minCountry = Object.keys(countryCounts).reduce((a, b) =>
       countryCounts[a] < countryCounts[b] ? a : b
     );
     setMinCountry(minCountry);
     setMaxCountry(""); // Reset maxCountry when min button is clicked
   };

  return (
        <Container>
          <Row>
            <Col
              lg="3"
              className={isPopupOpen ? "home-left show" : "home-left"}
            >
              <HomeLeft
                countries={getUniqueCountries(allUniversities)}
                onCountryChange={handleCountryChange}
                countryCounts={countryCounts}
              />
            </Col>
            <Col>
              <div className="d-flex justify-content-between gap-2">
                <button className="max-button" onClick={handleMaxButtonClick}>
                  Highest number of universities
                </button>
                <button className="min-button" onClick={handleMinButtonClick}>
                  Least number of universities
                </button>
                <button
                  className="filter-button "
                  onClick={(e) => handleFilterButtonClick(e)}
                >
                  Filter
                </button>
              </div>

              {isPopupOpen && (
                <div
                  id="home-left-popup"
                  className="home-left-popup"
                  onClick={handlePopupClick}
                >
                  <HomeLeft
                    countries={getUniqueCountries(allUniversities)}
                    onCountryChange={handleCountryChange}
                    countryCounts={countryCounts}
                  />
                </div>
              )}
              {maxCountry && (
                <p className="text-center">
                  Country with the highest number of universities:
                  <span className="fw-bold"> {maxCountry}</span>{" "}
                </p>
              )}
              {minCountry && (
                <p className="text-center">
                  Country with the least number of universities:
                  <span className="fw-bold"> {minCountry}</span>
                </p>
              )}
              <HomeRight
                universities={getCurrentPageData()}
                onPageChange={handlePageChange}
                currentPage={currentPage}
                totalPages={Math.ceil(
                  filteredUniversities.length / itemsPerPage
                )}
                totalCount={filteredUniversities.length}
              />
            </Col>
          </Row>
        </Container>
  );
};

const getUniqueCountries = (universities) => {
  return [...new Set(universities.map((uni) => uni.country))];
};

export default Home;
