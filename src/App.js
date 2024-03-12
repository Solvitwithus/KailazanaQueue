import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './navigation';

import Services from './services';
import Staff from './staff';
import Appointent from './appointment';
import News from './news';
import Contact from './contact';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/services" element={ <Services />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/appointment" element={<Appointent />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;