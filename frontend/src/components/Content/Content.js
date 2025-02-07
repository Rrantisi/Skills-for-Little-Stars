import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubjectDetails } from "../../store/subjectReducer";
import './Content.css';

function Content({ subjectId, selectedLevel }) {
  const dispatch = useDispatch();
  const content = useSelector(
    (state) => state.subjects.subjectDetails[subjectId]?.[0]?.content[selectedLevel]|| []
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  let parsedContent;
  if(content.content) {
    parsedContent = JSON.parse(content.content);
  }

  let totalSlides;

  if(parsedContent?.details.length > 0){
    totalSlides = parsedContent?.details.length;
  }

  const setNextSlideIdx = (currentIndex, totalSlides) => {
    return totalSlides > 0 ? (currentIndex + 1) % totalSlides : 0;
  };

  const setPrevSlideIdx = (currentIndex, totalSlides) => {
    return totalSlides > 0 ? (currentIndex - 1 + totalSlides) % totalSlides : 0;
  };

  const handleNext = () => {
    setCurrentIndex(setNextSlideIdx(currentIndex, totalSlides))
  }

  const handlePrev = () => {
    setCurrentIndex(setPrevSlideIdx(currentIndex, totalSlides))
  }

  const isValidColor = (color) => {
    const s = new Option().style;
    s.color = color;
    return s.color !== "";
  }

  const detail = parsedContent?.details[currentIndex] || "";

  const backgroundColor = isValidColor(detail) ? detail : "#2979FF";

  useEffect(() => {
    dispatch(fetchSubjectDetails(subjectId));
  }, [dispatch, subjectId]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [subjectId, selectedLevel]);

  if (!content || !content.content) return null;

  return (
    <>
      {content && (
        <div className="content-container">
          <h2>{parsedContent?.topic || ""}</h2>
          <h3>{parsedContent?.main || ""}</h3>
          <div className="carousel-wrapper">
            <button className="carousel-btn arrow-left" onClick={handlePrev}>
              &#10094;
            </button>
            <div className="detail-container" style={{ backgroundColor }}>
              <p>{detail}</p>
            </div>
            <button className="carousel-btn arrow-right" onClick={handleNext}>
              &#10095;
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Content;
