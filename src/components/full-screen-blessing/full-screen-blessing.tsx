import classNames from 'classnames';
import styles from './full-screen-blessing.module.scss';

export interface FullScreenBlessingProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const FullScreenBlessing = ({ className }: FullScreenBlessingProps) => {
    return <div className={classNames(styles.root, className)}>FullScreenBlessing</div>;
};
