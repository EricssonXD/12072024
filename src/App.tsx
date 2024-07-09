import App_module from './App.module.scss';
import { Present } from './components/present/present';
function App() {
    return (
        <div className={App_module.App}>
            <Present className={App_module.presentBox} />
        </div>
    );
}

export default App;
