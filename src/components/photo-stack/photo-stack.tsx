import classNames from 'classnames';
import styles from './photo-stack.module.scss';
import { PhotoCard, PhotoCardProps } from '../photo-card/photo-card';
import p1 from '../../assets/photos/p1.jpeg';
export interface PhotoStackProps {
    className?: string;
    presentCords?: { x: number, y: number };

}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const PhotoStack = ({ className, presentCords }: PhotoStackProps) => {


    const imgList = [p1,]
    const keyList = [...Array(imgList.length).keys()];


    return <div className={classNames(styles.root, className)}>
        {keyList.map((key) => (
            <PhotoCard
                className={styles.child}
                presentCords={presentCords}
                // translate={{ x: key * 30, y: 0 }}
                rotation={-10 * key} />
        ))}
    </div>;
};
