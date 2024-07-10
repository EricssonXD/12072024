import classNames from 'classnames';
import styles from './photo-card.module.scss';
import TestImgJpg from '../../assets/TestImg.jpg';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { getImageSize } from 'react-image-size';
import { appState } from '../../global/app-state/app-state';
import { observer } from 'mobx-react-lite';

export interface PhotoCardProps {
    className?: string;
    img?: string;
    dimension?: number;
    orientation?: 'landscape' | 'portrait';
    presentCords?: { x: number, y: number };
    zIndex?: number;
    rotation?: number;
    translate?: { x: number, y: number };

}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const PhotoCard = ({
    className,
    dimension = 200,
    img = TestImgJpg,
    orientation = 'landscape',
    zIndex = 1,
    rotation = 0,
    translate = { x: 0, y: 0 }
}: PhotoCardProps) => {
    var width: number | undefined;
    var height: number | undefined;

    if (orientation === 'landscape') {
        width = dimension;
    } else {
        height = dimension;
    }


    const Observer = observer(() => {
        return (
            <motion.div className={classNames(styles.root, className)}
                style={{
                    overflow: "hidden",
                    padding: dimension / 20,
                    // transform: "translate(-50%, -50%)",
                    zIndex: zIndex,
                }}
                initial={{
                    scale: 0,
                    x: "calc(50vw - 100px)",
                    y: "80vh",
                }}
                animate={appState.presentOpened ?
                    {
                        translateX: [0, 0, translate.x],
                        translateY: [0, -200, translate.y],
                        x: "calc(50vw - 80px)",
                        y: "calc(100vh - 600px)",
                        scale: 1,
                        rotate: rotation,
                    }
                    : {}}
                transition={{
                    duration: 1, ease: "easeInOut",
                }}
            >
                <img src={img} className={styles.image}
                    style={{
                        width: width,
                        height: height,
                    }} />
            </motion.div>
        );
    });


    return <Observer />;
};
