import type { ChapterData } from '../types';

const Chapter = ({chapter}: {chapter:ChapterData}) => {
  return (
    <p>{chapter}</p>
  )
}

export default Chapter;
