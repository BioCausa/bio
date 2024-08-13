import Home from '../../components/Pages/Home/home.jsx';
import VidaMarinhaPage from '../../components/Pages/VidaMarinha/vida_marinha.jsx';
import MeioAmbientePage from '../../components/Pages/MeioAmbiente/meio_ambiente.jsx';

const HomeRoute = () => {
    return <Home/>
}
const VidaMarinhaRoute = () => {
    return <VidaMarinhaPage/>
}
const MeioAmbienteRoute = () => {
    return <MeioAmbientePage/>
}

export {
        HomeRoute,
        VidaMarinhaRoute,
        MeioAmbienteRoute
    };