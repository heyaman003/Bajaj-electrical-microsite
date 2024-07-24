import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ChairmainMessage from './Pages/Message/ChairmainMessage'
import Footer from './Components/Footer/Footer'
import MdMessage from './Pages/Message/MDmessage'
import Ourbuisness from './Pages/Ourbuisness/Ourbuisness'
import BusinessModel from './Pages/BuisnessModel/BuisnessModel'
import RiskManagement from './Pages/RiskManagement/RiskManagment'
import MAterialityAssessment from './MAterialityAssesment/MAterialityAssesment'
import EsgStrategy from './Pages/ESGstrategy/EsgStrategy'
import Stakeholder from './Pages/Stakeholders/Stakeholder'
import FinicalCapital from './Pages/Capitals/FinincalCapitals/FinincalCapital'
import ManufactureCapitals from './Pages/Capitals/Manufacturecapital/ManufactureCapitals'
import Landingpage from './Pages/LandingPage/Landingpage'
import { Navbar } from './Components/Demonav/Navbar';
import Builtinbajaj from './Pages/Ourbuisness/Builtinbajaj';
import Nex from './Pages/Ourbuisness/Nex';
import MorphyRichards from './Pages/Ourbuisness/MorphyRichards';
import Nerlip from './Pages/Ourbuisness/Nerlip';
import ProfessionalLightning from './Pages/Ourbuisness/ProfessionalLightning'
import ConsumerLightining from './Pages/Ourbuisness/ConsumerLightining';
import IntellectualCapital from './Pages/IntellectualCapital/IntellectualCapital'
import HumanCapital from './Pages/HumanCapital/HumanCapital'
import SRcapital from './Pages/SRcapital/SRcapital'
import NaturalCapital from './Pages/NaturalCapital/NaturalCapital'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className=''>
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Landingpage/>} />
      <Route path='/Chairman-message' element={<ChairmainMessage/>} />
      <Route path='/Our-business' element={ <Ourbuisness/>} />
      <Route path='/Ourbusiness/BAJAJ' element={ <Builtinbajaj/>} />
      <Route path='/Ourbusiness/Nex' element={ <Nex/>} />
      <Route path='/Ourbusiness/Morphy-Richards' element={ <MorphyRichards/>} />
      <Route path='/Ourbusiness/Nirlep' element={ <Nerlip/>} />
      <Route path='/Ourbusiness/Professional-lighting' element={ <ProfessionalLightning/>} />
      <Route path='/Ourbusiness/Consumer-lighting' element={ <ConsumerLightining/>} />
      <Route path='/Md-Message' element={<MdMessage/> } />
      <Route path='/Business-Model' element={<BusinessModel/>} />
      <Route path='/Risk-Management' element={<RiskManagement/>} />
      <Route path='/Materiality-assessment' element={<MAterialityAssessment/>} />
      <Route path='/Esg-strategy' element={<EsgStrategy/>} />
      <Route path='/Stakeholder' element={<Stakeholder/>} />
      <Route path='/Finical-capital' element={<FinicalCapital/>} />
      <Route path='/Manufacture-capitals' element={ <ManufactureCapitals/>} />
      <Route path='/Human-Capital' element={ <HumanCapital/>} />
      <Route path='/Social-and-Relationship-Capital' element={ <SRcapital/>} />
      <Route path='/Intellectual-Capital' element={ <IntellectualCapital/>} />
      <Route path='/Natural-Capital' element={ <NaturalCapital/>} />
    </Routes>
     <Footer/>
    </BrowserRouter>
   </div>
  )
}

export default App
