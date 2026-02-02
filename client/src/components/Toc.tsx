import type { TocData } from "../types";

const Toc = ({toc, onSelect}: { toc: TocData; onSelect: (chapter: string) => void }) => {
  return (
    <>
    <h1>{toc.book}</h1>
    <h3>Table of Contents</h3>
    <ul>{toc.chapters.map((chapter, index) => (
      <li
        key={index}
        onClick={() => onSelect(chapter)}
      >
      {chapter}</li>
    ))}</ul>
    </>
  )
}

export default Toc;
