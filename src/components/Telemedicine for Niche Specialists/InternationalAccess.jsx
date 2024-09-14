
import React, { useState, useEffect } from "react";

const InternationalAccess = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [specialists, setSpecialists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("/api/countries");
        if (!response.ok) {
          throw new Error("Failed to fetch countries");
        }
        const data = await response.json();
        setCountries(data);
      } catch (err) {
        setError("Failed to load countries. Please try again later.");
      }
    };

    fetchCountries();
  }, []);

  const handleCountryChange = async (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/specialists?country=${country}`);
      if (!response.ok) {
        throw new Error("Failed to fetch specialists");
      }
      const data = await response.json();
      setSpecialists(data);
    } catch (err) {
      setError("Failed to load specialists. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">International Specialists</h2>
      <div className="mb-4">
        <label htmlFor="country-select" className="block mb-2">
          Select a country:
        </label>
        <select
          id="country-select"
          value={selectedCountry}
          onChange={handleCountryChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Choose a country</option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      {loading && <p>Loading specialists...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && specialists.length > 0 && (
        <ul className="space-y-4">
          {specialists.map((specialist) => (
            <li key={specialist.id} className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold">{specialist.name}</h3>
              <p className="text-gray-600">{specialist.specialty}</p>
              <p className="mt-2">{specialist.description}</p>
              <p className="text-sm text-gray-500 mt-1">
                Location: {specialist.country}
              </p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Book International Consultation
              </button>
            </li>
          ))}
        </ul>
      )}

      {!loading && !error && specialists.length === 0 && selectedCountry && (
        <p>No specialists found in the selected country.</p>
      )}
    </div>
  );
};

export default InternationalAccess;
