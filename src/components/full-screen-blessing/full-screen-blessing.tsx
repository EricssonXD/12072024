import classNames from 'classnames';
import styles from './full-screen-blessing.module.scss';
import { observer } from 'mobx-react-lite';
import { appState } from '../../global/app-state/app-state';
import { motion } from 'framer-motion';

export interface FullScreenBlessingProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const FullScreenBlessing = ({ className }: FullScreenBlessingProps) => {

    const Observer = observer(() => {

        return (
            appState.openedBlessing != undefined ?
                <>
                    <div
                        onClick={() => appState.closeBlessing()}
                        style={
                            {
                                width: "100%",
                                height: "100%",
                                left: 0,
                                top: 0,
                                opacity: 0.7,
                                position: 'fixed',
                                backgroundColor: 'black',
                                zIndex: 100,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",

                            }
                        } >

                    </div >
                    <motion.div className={classNames(styles.root, className)}
                        onClick={() => appState.closeBlessing()}
                        style={{
                            zIndex: 150,
                        }}
                    >
                        {appState.openedBlessing.message}
                    </motion.div>
                </>

                : null
        );
    });

    return <Observer />
};
