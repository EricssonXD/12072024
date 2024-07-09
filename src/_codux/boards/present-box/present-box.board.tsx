import { createBoard } from '@wixc3/react-board';
import { PresentBox } from '../../../components/present-box/present-box';

export default createBoard({
    name: 'PresentBox',
    Board: () => <PresentBox />,
    isSnippet: true,
});
