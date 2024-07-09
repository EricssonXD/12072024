import classNames from 'classnames';
import styles from './present-lid.module.scss';

export interface PresentLidProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const PresentLid = ({ className }: PresentLidProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.giftWrap} />
        </div>
    );
};
