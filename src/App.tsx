import App_module from './App.module.scss';
import { Present } from './components/present/present';
import { PhotoCard } from './components/photo-card/photo-card';
import TestImgJpg from './assets/TestImg.jpg';
import { PhotoStack } from './components/photo-stack/photo-stack';
import { enableScreenScaler } from "screen-scaler/react";

const { ScreenScalerOutOfRangeFallbackProvider } = enableScreenScaler({
    rootDivId: "root",
    targetWindowInnerWidth: ({ zoomFactor, isPortraitOrientation }) =>
        isPortraitOrientation ? undefined : 1920 * zoomFactor
});

function App() {
    return (
        <ScreenScalerOutOfRangeFallbackProvider
            fallback={<h1>Please Rotate your phone, this app does not render well in portrait mode.</h1>}
        >
            <div className={App_module.App} >
                <PhotoStack />
                <Present className={App_module.presentBox} />
            </div>
        </ScreenScalerOutOfRangeFallbackProvider>

    );
}

export default App;
