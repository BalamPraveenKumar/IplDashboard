import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
<BrowserRouter>
  <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route path="/team-matches/:id" element={<TeamMatches/>} />
    <Route component={<NotFound/>} />
  </Routes>
</BrowserRouter>
)

export default App
