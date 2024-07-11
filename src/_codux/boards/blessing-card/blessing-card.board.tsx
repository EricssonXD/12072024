import { createBoard } from '@wixc3/react-board';
import { BlessingCard } from '../../../components/blessing-card/blessing-card';

export default createBoard({
    name: 'BlessingCard',
    Board: () => <BlessingCard />,
    isSnippet: true,
});
