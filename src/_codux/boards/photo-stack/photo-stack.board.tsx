import { createBoard } from '@wixc3/react-board';
import { PhotoStack } from '../../../components/photo-stack/photo-stack';

export default createBoard({
    name: 'PhotoStack',
    Board: () => <PhotoStack />,
    isSnippet: true,
});
