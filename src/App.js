import { BrowserRouter as Router, Route } from 'react-router-dom';
import SimpleReactLightbox from 'simple-react-lightbox';
import Beranda from './pages/Beranda/Beranda';
import Program from './pages/Program/Program';
import Struktur from './pages/Struktur/Struktur';
import Kontak from './pages/Kontak/Kontak';
import Galeri from './pages/Galeri/Galeri';
import Collection from './pages/Collection/Collection';
import Gallery from './pages/Gallery/Gallery';

function App() {
  return (
    <Router>
      <SimpleReactLightbox>
        <Route path='/' component={Beranda} exact />
        <Route path='/collection' component={Collection} exact />
        <Route path='/program' component={Program} exact />
        <Route path='/struktur' component={Struktur} exact />
        <Route path='/galeri' component={Galeri} exact />
        <Route path='/gallery' component={Gallery} exact />
        <Route path='/kontak' component={Kontak} exact />
      </SimpleReactLightbox>
    </Router>
  );
}

export default App;
