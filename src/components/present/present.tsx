import classNames from 'classnames';
import styles from './present.module.scss';
import { PresentBox } from '../present-box/present-box';
import { PresentLid } from '../present-lid/present-lid';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { appState } from '../../global/app-state/app-state';
import { observer } from 'mobx-react-lite';

export interface PresentProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Present = ({ className }: PresentProps) => {

    const Observer = observer(() => {
        const controls = useAnimation();

        useEffect(() => {
            if (appState.presentOpened === false) {
                controls.start({
                    y: [
                        0, // Start position
                        -20, // Mid-point of the animation
                    ],
                    transition: {
                        duration: 0.5, // Duration of the animation cycle
                        ease: "easeInOut", // Easing function for smoother motion
                        repeat: Infinity, // Repeat the animation indefinitely
                        repeatType: "reverse", // Type of repetition
                    },
                });
            } else {
                controls.start({
                    y: 0,
                    transition: {
                        ease: "easeInOut", // Easing function for smoother motion
                    },
                }); // Smoothly return to original position
            }
        }, [appState.presentOpened, controls]);

        return (
            <motion.div
                className={classNames(styles.root, className)}
                initial={{ y: 0 }}
                animate={controls}
                onClick={() => appState.openPresent()} // Toggle the state on click
            >
                <motion.div
                    key={"lid"}
                    animate={appState.presentOpened ?
                        {
                            // transform: "translateY(-240px)",
                            rotate: 180,
                            x: [0, 500],
                            y: [0, -100, 200],
                        }
                        : {}}
                    transition={{
                        duration: 0.5, ease: "easeInOut",
                    }}
                ><PresentLid className={styles.lid} /></motion.div>
                <PresentBox className={styles.box} />
            </motion.div>
        );
    });

    return (<Observer />);
};


