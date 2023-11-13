import { Routes, Route } from 'react-router-dom';
import Users from './features/Users';
import RickMorty from './features/RickMorty';

function App() {
  return (
    <Routes>
      <Route path='/usuarios' element={<Users />} />
      <Route path='/rick' element={<RickMorty />} />
    </Routes>
  )
}

export default App