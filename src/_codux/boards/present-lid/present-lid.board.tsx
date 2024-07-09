import { createBoard } from '@wixc3/react-board';
import { PresentLid } from '../../../components/present-lid/present-lid';

export default createBoard({
    name: 'PresentLid',
    Board: () => <PresentLid />,
    isSnippet: true,
});
