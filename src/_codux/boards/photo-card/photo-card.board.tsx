import { createBoard } from '@wixc3/react-board';
import { PhotoCard } from '../../../components/photo-card/photo-card';

export default createBoard({
    name: 'PhotoCard',
    Board: () => <PhotoCard />,
    isSnippet: true,
});
