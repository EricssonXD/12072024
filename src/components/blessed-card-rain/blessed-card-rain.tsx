import classNames from 'classnames';
import styles from './blessed-card-rain.module.scss';

export interface BlessedCardRainProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const BlessedCardRain = ({ className }: BlessedCardRainProps) => {



    return <div className={classNames(styles.root, className)}>

    </div>;
};
