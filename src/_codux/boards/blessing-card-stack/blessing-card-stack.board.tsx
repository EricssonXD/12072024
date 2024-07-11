import { createBoard } from '@wixc3/react-board';
import { BlessingCardStack } from '../../../components/blessing-card-stack/blessing-card-stack';

export default createBoard({
    name: 'BlessingCardStack',
    Board: () => <BlessingCardStack />,
    isSnippet: true,
});
