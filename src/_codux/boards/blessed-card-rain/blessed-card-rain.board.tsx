import { createBoard } from '@wixc3/react-board';
import { BlessedCardRain } from '../../../components/blessed-card-rain/blessed-card-rain';

export default createBoard({
    name: 'BlessedCardRain',
    Board: () => <BlessedCardRain />,
    isSnippet: true,
});
