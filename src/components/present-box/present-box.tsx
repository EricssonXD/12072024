import classNames from 'classnames';
import styles from './present-box.module.scss';

export interface PresentBoxProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const PresentBox = ({ className }: PresentBoxProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.giftWrap}></div>
            <div className={styles.giftWrapShadow} />
        </div>
    );
};
