import App_module from './App.module.scss';
import { Present } from './components/present/present';
function App() {
    return (
        <div className={App_module.App}>
            <Present />
        </div>
    );
}

export default App;
