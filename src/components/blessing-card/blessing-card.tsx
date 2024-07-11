import classNames from 'classnames';
import styles from './blessing-card.module.scss';
import { motion } from 'framer-motion';
import { appState } from '../../global/app-state/app-state';
import { observer } from 'mobx-react-lite';

export interface BlessingCardProps {
    className?: string;
    rotation?: number;
    translate?: { x: number, y: number };
    blessing?: { name: string, message: string };
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const BlessingCard = ({ className, rotation, translate = { x: 0, y: 0 }, blessing }: BlessingCardProps) => {

    const Observer = observer(() => {
        return (
            <motion.div className={classNames(styles.root, className)}
                style={{
                    zIndex: -1,
                }}
                initial={{
                    scale: 0,
                    // x: 0,
                    y: 500,
                    // y: "calc(0% + 50px)",
                }}

                animate={appState.presentOpened ?
                    {
                        translateX: [0, 0, translate.x],
                        translateY: [0, -200, translate.y],
                        x: [600, "calc(50% + 150px)"],
                        y: [1000, "calc(50% - 300px)"],
                        scale: [0, 2],
                        opacity: [0, 0, 1],
                        rotate: [0, 0, rotation],
                        zIndex: 0,

                    } :
                    {
                        translateX: [0, 0, translate.x].reverse(),
                        translateY: [0, -200, translate.y].reverse(),
                        x: [600, "calc(50% + 150px)"].reverse(),
                        y: [1000, "calc(50% - 300px)"].reverse(),
                        scale: [0, 2].reverse(),
                        opacity: [0, 0, 1].reverse(),
                        rotate: [0, 0, rotation].reverse(),

                    }
                }
                transition={{
                    duration: 1, ease: "easeInOut",
                }}
            >
                <div className={styles.envelopeWrap}>
                    <div className={styles.envelope}>
                        <div className={styles.paper}>
                            <div className={styles.nameTag}>
                                {blessing?.name}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    });


    return <Observer />;
};
