import classNames from 'classnames';
import styles from './blessing-card-stack.module.scss';
import { BlessingCard } from '../blessing-card/blessing-card';
import { Blessings } from '../../global/constants/blessings';

export interface BlessingCardStackProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const BlessingCardStack = ({ className }: BlessingCardStackProps) => {


    let blessingList = Blessings;
    const keyList = [...Array(blessingList.length).keys()]
    let rotateList: number[] = [];
    let translateList: { x: number, y: number }[] = [];

    for (let i = 0; i < keyList.length; i++) {
        let rotation;
        let sign = -1;
        let amplify = i;
        let translate = { x: 0, y: 0 };

        if (i % 2 === 0) sign = 1;

        amplify -= 5 * Math.floor(i / 2);

        translate.y = -230 * Math.floor(i / 2) + 400 + 230 * 3.5 * Math.floor(i / 8) + 60 * (i % 2);
        translate.x = (500 + Math.floor(i / 8) * 250) * sign;
        rotation = 20 * sign;

        rotateList.push(rotation);
        translateList.push(translate);
    }


    return <div className={classNames(styles.root, className)}>

        {keyList.map((key) => (
            <BlessingCard
                key={`Blessing${key}`}
                className={styles.child}
                blessing={blessingList[key]}
                translate={translateList[key]}
                rotation={rotateList[key]}
            />
        ))}


    </div>;
};
