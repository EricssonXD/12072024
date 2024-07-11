import classNames from 'classnames';
import styles from './photo-stack.module.scss';
import { PhotoCard, PhotoCardProps } from '../photo-card/photo-card';
import p1 from '../../assets/photos/p1.jpeg';
import p2 from '../../assets/photos/p2.jpeg';
import p3 from '../../assets/photos/p3.jpeg';
import p4 from '../../assets/photos/p4.jpeg';
import p5 from '../../assets/photos/p5.jpeg';
import p6 from '../../assets/photos/p6.jpeg';
import p7 from '../../assets/photos/p7.jpeg';
import p8 from '../../assets/photos/p8.jpeg';
import p9 from '../../assets/photos/p9.jpeg';
import p10 from '../../assets/photos/p10.jpeg';
import p11 from '../../assets/photos/p11.jpeg';
import p12 from '../../assets/photos/p12.jpeg';
import p13 from '../../assets/photos/p13.jpeg';
import p14 from '../../assets/photos/p14.jpeg';
import p15 from '../../assets/photos/p15.jpeg';

export interface PhotoStackProps {
    className?: string;
    presentCords?: { x: number, y: number };

}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const PhotoStack = ({ className, presentCords }: PhotoStackProps) => {


    // const imgList = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10]
    const imgList = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15]
    const keyList = [...Array(imgList.length).keys()];
    let rotateList: number[] = [];
    let translateList: { x: number, y: number }[] = [];
    const zIndexList = keyList.sort(() => Math.random() - 0.5);

    for (let i = 0; i < keyList.length; i++) {
        let rotation;
        let sign = -1;
        let amplify = i;
        let translate = { x: 0, y: 0 };

        if (i % 2 === 0) sign = 1;

        amplify -= 5 * Math.floor(i / 5);

        translate.y = -130 * Math.floor(i / 5);
        translate.x = 50 * sign * amplify;
        rotation = 10 * sign * amplify;

        rotateList.push(rotation);
        translateList.push(translate);
    }



    return <div className={classNames(styles.root, className)}>
        {keyList.map((key) => (
            <PhotoCard
                key={`Photo${key}`}
                className={styles.child}
                presentCords={presentCords}
                translate={translateList[key]}
                zIndex={zIndexList[key]}
                img={imgList[key]}
                rotation={rotateList[key]} />
        ))}
    </div>;
};
