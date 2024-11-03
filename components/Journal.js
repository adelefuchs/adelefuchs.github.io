// components/Journal.js
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import ScrapbookPage from './ScrapbookPage';
import ExperiencePage from './ExperiencePage';
import ProjectsPage from './ProjectsPage';

const Journal = () => {
  const pages = [<ScrapbookPage />, <ExperiencePage />, <ProjectsPage />];
  const [currentPage, setCurrentPage] = useState(0);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setCurrentPage((prev) => Math.min(prev + 1, pages.length - 1)),
    onSwipedRight: () => setCurrentPage((prev) => Math.max(prev - 1, 0)),
  });

  return (
    <div {...swipeHandlers} className="journal-container">
      {pages[currentPage]}
    </div>
  );
};

export default Journal;
