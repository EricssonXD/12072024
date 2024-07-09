import classNames from 'classnames';
import styles from './present.module.scss';
import { PresentBox } from '../present-box/present-box';
import { PresentLid } from '../present-lid/present-lid';
import { motion } from 'framer-motion';

export interface PresentProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Present = ({ className }: PresentProps) => {
    return (
        <motion.div className={classNames(styles.root, className)}
            initial={{ y: 0 }}
            animate={{
                y: [
                    0, // Start position
                    -20, // Mid-point of the animation
                    0, // End position
                ],
            }}
            transition={{
                duration: 1, // Duration of the animation cycle
                ease: "easeInOut", // Easing function for smoother motion
                repeat: Infinity, // Repeat the animation indefinitely
                repeatType: "loop", // Type of repetition
            }}
        >
            <PresentLid className={styles.lid} />
            <PresentBox className={styles.box} />
        </motion.div>
    );
};
