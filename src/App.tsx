import App_module from './App.module.scss';
import { Present } from './components/present/present';
import { PhotoCard } from './components/photo-card/photo-card';
import TestImgJpg from './assets/TestImg.jpg';
import { PhotoStack } from './components/photo-stack/photo-stack';

function App() {
    return (
        <div className={App_module.App} style={{ overflow: 'hidden' }}>
            <PhotoStack />
            <Present className={App_module.presentBox} />
        </div>
    );
}

export default App;
