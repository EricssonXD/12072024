import { createBoard } from '@wixc3/react-board';
import { Present } from '../../../components/present/present';

export default createBoard({
    name: 'Present',
    Board: () => <Present />,
    isSnippet: true,
});
