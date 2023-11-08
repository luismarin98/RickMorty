import { Routes, Route } from 'react-router-dom';
import { All_Characters, ID_Character } from './routes';
import Navbar from './components/navbar';

export default function App() {

  return <div className='flex flex-col gap-2'>
    <Navbar />
    <Routes>
      <Route path='/all-characters' element={<All_Characters />} />
      <Route path='/id-characters' element={<ID_Character />} />
    </Routes>
  </div>
}