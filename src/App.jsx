import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbardemo/Navbar'
import { BrowserRouter } from 'react-router-dom'
import ChairmainMessage from './Pages/Message/ChairmainMessage'
import Footer from './Components/Footer/Footer'
import MdMessage from './Pages/Message/MDmessage'
import Ourbuisness from './Pages/Ourbuisness/Ourbuisness'
import BusinessModel from './Pages/BuisnessModel/BuisnessModel'
import RiskManagement from './Pages/RiskManagement/RiskManagment'
import MAterialityAssessment from './MAterialityAssesment/MAterialityAssesment'
import EsgStrategy from './Pages/ESGstrategy/EsgStrategy'
import Stakeholder from './Pages/Stakeholders/Stakeholder'
import CapsTemplate from './Components/CapsTemplate/CapsTemplate'
import FinicalCapital from './Pages/Capitals/FinincalCapitals/FinincalCapital'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className=''>
    <BrowserRouter>
     <Navbar/>
     <ChairmainMessage/>
     <Ourbuisness/>
     <MdMessage/>
     <Ourbuisness/>
     <BusinessModel/>
     <RiskManagement/>
     <MAterialityAssessment/>
     <EsgStrategy/>
     <Stakeholder/>
    {/* <FinicalCapital/> */}
     <Footer/>
    </BrowserRouter>
   </div>
  )
}

export default App
