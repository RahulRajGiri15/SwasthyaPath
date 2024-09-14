
// import React, { useState, useEffect } from "react";

// const SpecialistFinder = () => {
//   const [specialists, setSpecialists] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchSpecialists = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch("/api/specialists");
//         if (!response.ok) {
//           throw new Error("Failed to fetch specialists");
//         }
//         const data = await response.json();
//         setSpecialists(data);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchSpecialists();
//   }, []);

//   const filteredSpecialists = specialists.filter((specialist) =>
//     specialist.specialty.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="max-w-4xl mx-auto mt-10">
//       <h2 className="text-2xl font-bold mb-5">Find a Specialist</h2>
//       <input
//         type="text"
//         placeholder="Search by specialty..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="w-full p-2 mb-4 border rounded"
//         aria-label="Search specialists"
//       />
//       {loading && <p>Loading specialists...</p>}
//       {error && <p className="text-red-500">Error: {error}</p>}
//       {!loading && !error && (
//         <ul className="space-y-4">
//           {filteredSpecialists.map((specialist) => (
//             <li key={specialist.id} className="bg-white p-4 rounded shadow">
//               <h3 className="text-xl font-semibold">{specialist.name}</h3>
//               <p className="text-gray-600">{specialist.specialty}</p>
//               <p className="mt-2">{specialist.description}</p>
//               <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
//                 Book Consultation
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default SpecialistFinder;


import React, { useState, useEffect } from "react";

const SpecialistFinder = () => {
  const [specialists, setSpecialists] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSpecialists = async () => {
      try {
        setLoading(true);
        // Change this URL to the correct API endpoint
        const response = await fetch("/api/specialists"); 

        if (!response.ok) {
          throw new Error("Failed to fetch specialists");
        }

        const data = await response.json();
        setSpecialists(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSpecialists();
  }, []);

  const filteredSpecialists = specialists.filter((specialist) =>
    specialist.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">Find a Specialist</h2>
      <input
        type="text"
        placeholder="Search by specialty..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
        aria-label="Search specialists"
      />
      {loading && <p>Loading specialists...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {!loading && !error && (
        <ul className="space-y-4">
          {filteredSpecialists.map((specialist) => (
            <li key={specialist.id} className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold">{specialist.name}</h3>
              <p className="text-gray-600">{specialist.specialty}</p>
              <p className="mt-2">{specialist.description}</p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Book Consultation
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SpecialistFinder;
