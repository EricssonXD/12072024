import classNames from 'classnames';
import styles from './photo-card.module.scss';

export interface PhotoCardProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const PhotoCard = ({ className }: PhotoCardProps) => {
    return <div className={classNames(styles.root, className)}></div>;
};
