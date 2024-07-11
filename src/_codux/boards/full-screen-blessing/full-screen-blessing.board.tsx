import { createBoard } from '@wixc3/react-board';
import { FullScreenBlessing } from '../../../components/full-screen-blessing/full-screen-blessing';

export default createBoard({
    name: 'FullScreenBlessing',
    Board: () => <FullScreenBlessing />,
    isSnippet: true,
});
