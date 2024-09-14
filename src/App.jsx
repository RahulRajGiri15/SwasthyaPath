// import React from 'react';
// import { Link, Route, Routes } from 'react-router-dom';
// import Dashboard from './components/Personalized Nutrition and Health Plans/Dashboard';
// import TelemedicineApp from './components/Telemedicine for Niche Specialists/TelemedicineApp';
// import PatientSymptomTracker from './components/Patient Symptom History Tracker/PatientSymptomTracker';
// import HealthTips from './components/Personalized Nutrition and Health Plans/HealthTips';
// import logo  from '../src/assets/logo.png'




// ///////// to install react router dom
// const App = () => {

//   return(
//     // <div className=' pt-[3%] flex  flex-col gap-5 '>

//     //   <nav className='flex justify-center gap-5 font-bold '>

//     //     <Link className='bg-blue-200 px-3 rounded-lg' to="/"> Health Plans </Link>
//     //     <Link className='bg-blue-200 px-3 rounded-lg' to="/dashboard">Niche Specialist</Link>
//     //     <Link className='bg-blue-200 px-3 rounded-lg' to="/about">History Tracker</Link>

//     //   </nav>
      
//     //   <Routes>
//     //     <Route path="/" element={<Dashboard/>}/>
//     //     <Route path="/dashboard" element={<TelemedicineApp/>}/>
//     //     <Route path="/about" element={<PatientSymptomTracker/>}/> 
        


//     //   </Routes>
      


//     // </div>


//     <div className="min-h-screen bg-gray-100">
//       <header >
//         <div className='w-full  bg-white  flex '>
//           <div className='ml-1 pl-2 w-48 min-h-10 rounded-lg bg-zinc-100 overflow-hidden'>
//             <img className="w-full h-full object-cover" src={logo} alt="" />
//           </div>
//           <div className="w-52  bg-white text-blue-600 p-2 text-center ">
//           <h1 className="text-5xl font-bold ">
//             SwasthyaPath
//           </h1>
//           </div>
          
//         </div>
        
      
//       </header>
//       <main className="container mx-auto px-2 py-4 ">
//       {/* style={{
//           backgroundImage: `url(${background})`,
//           backgroundSize: 'cover', // To cover the entire area
//           backgroundPosition: 'center', // Center the image
//           height: '100vh', // Full viewport height
//         }} */}
//         <div className=' pt-[3%] flex  flex-col gap-5 rounde'>

//         <nav className='flex justify-center gap-5 font-bold '>

//           <Link className='bg-blue-200 px-3 rounded-lg' to="/"> Health Plans </Link>
//           <Link className='bg-blue-200 px-3 rounded-lg' to="/dashboard">Niche Specialist</Link>
//           <Link className='bg-blue-200 px-3 rounded-lg' to="/about">History Tracker</Link>

//         </nav>

//       <Routes>
//         <Route path="/" element={<Dashboard/>}/>
//         <Route path="/dashboard" element={<TelemedicineApp/>}/>
//         <Route path="/about" element={<PatientSymptomTracker/>}/> 
  


//       </Routes>



//       </div>
//       </main>
//       <footer className="bg-gray-200 text-center p-4 mt-8">
//         <div className='m-4'>
          
//           <HealthTips/>
          
//         </div>
        
//         <p>
//           &copy; 2024 Personalized Nutrition and Health App. All rights
//           reserved.
//         </p>
//       </footer>
//     </div>
//   );




// }


// export default App




import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Personalized Nutrition and Health Plans/Dashboard';
import TelemedicineApp from './components/Telemedicine for Niche Specialists/TelemedicineApp';
import PatientSymptomTracker from './components/Patient Symptom History Tracker/PatientSymptomTracker';
import HealthTips from './components/Personalized Nutrition and Health Plans/HealthTips';
import logo from '../src/assets/logo.png';
//import bgImage from '../src/assets/health-bg.jpg'; // Add a background image for the main section

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="w-full bg-white shadow-md py-4 flex justify-between items-center px-4">
        <div className="flex items-center">
          <img className="w-16 h-16 object-cover rounded-full" src={logo} alt="Logo" />
          <h1 className="text-blue-600 text-4xl font-bold ml-4">SwasthyaPath</h1>
        </div>

        <nav className="flex gap-6">
          <Link className="text-blue-600 hover:bg-blue-100 hover:scale-105 px-4 py-2 rounded-lg transition-all duration-300" to="/">Health Plans</Link>
          <Link className="text-blue-600 hover:bg-blue-100 hover:scale-105 px-4 py-2 rounded-lg transition-all duration-300" to="/dashboard">Niche Specialist</Link>
          <Link className="text-blue-600 hover:bg-blue-100 hover:scale-105 px-4 py-2 rounded-lg transition-all duration-300" to="/about">History Tracker</Link>
        </nav>
      </header>

      {/* Main Section with a Background Image */}
      <main
        className="container mx-auto py-8 px-4 rounded-lg shadow-lg bg-blue-200"
        // style={{
        //   backgroundImage: `url(${bgImage})`,
        //   backgroundSize: 'cover',
        //   backgroundPosition: 'center',
        //   minHeight: '80vh',
        //   borderRadius: '10px',
        // }}
      >
        <div className="backdrop-blur-sm bg-white/50 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Welcome to SwasthyaPath</h2>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<TelemedicineApp />} />
            <Route path="/about" element={<PatientSymptomTracker />} />
          </Routes>
        </div>
      </main>

      <footer className="bg-blue-400 text-white text-center py-6">
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">Health Tips</h3>
          <HealthTips />
        </div>
        <p className="text-sm">
          &copy; 2024 Personalized Nutrition and Health App.
        </p>
      </footer>
    </div>
  );
};

export default App;
