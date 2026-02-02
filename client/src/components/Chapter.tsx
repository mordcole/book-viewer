import type { ChapterData } from '../types';

const Chapter = ({chapter}: {chapter:ChapterData}) => {
  return (
    <div>
      {chapter.split('\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  )
}

export default Chapter;
