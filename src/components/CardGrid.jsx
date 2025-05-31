import { Card } from "./Card";
import { useEffect, useState } from "react";

const staticCards = [
  {
    id: 1,
    image:
      "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmFqbnZwNnd1YnJzcHU2NGt6cXVhODhhZmw1cWxjOW1hZHdpZmg4YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fGzLJLnSUcWjiPAmkp/giphy.gif",
    text: "Karl Anthony Towns",
  },
  {
    id: 2,
    image:
      "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGYxZ3Q0eHlqN3VhOG1qdjBoM3RibnB1aXlid2Y1a3FoNTY5dmRycyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MuAAo2M2IHbTYFK2VP/giphy.gif",
    text: "Draymond Green",
  },
  {
    id: 3,
    image:
      "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWhhaWR3ZTR6MDhyeDZ2cXk5aG9pa2V0eXhnbHV3OWp0dGU4MjZvZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kv60iCegPFNqVaT4Tw/giphy.gif",
    text: "Lonnie Walker",
  },
  {
    id: 4,
    image:
      "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDNnaTh4ZWdvbTJpcGUzejJhamxidXRjdTZpNTdiM2tycTBzNWIxMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/02HCsYHFD0sToc8Glq/giphy.gif",
    text: "Anthony Davis",
  },
  {
    id: 5,
    image:
      "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHZoZnRob2E1OHN5dWZoeTNsbWdubmo0M2pxbGkydm5zeHVkZXJpayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cdyC02oKD9kWrd2Fdn/giphy.gif",
    text: "Lebron James",
  },
  {
    id: 6,
    image:
      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMW9rdzIyeXQ1ajNxbHRtZ2U0ZHJ3NjdyNDkxM2ZqNmRwZjJqY3Z4dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/e610QnTOAnTZPriJug/giphy.gif",
    text: "Kevin Durant",
  },
  {
    id: 7,
    image:
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWUzbDRscHNzeWE3YWRweXo4cHNibmo4eGNjamIyeWw1NDRhbHY0biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT8qBrii0JvonQY2wU/giphy.gif",
    text: "Stephen Curry",
  },
  {
    id: 8,
    image:
      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXpibmh1eTEzazl3dm5zNGtkd2x0ZnJkOG93aHh2Z3RrdDZ1YmFibiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UrKBgeGgrk6YcTuLUg/giphy.gif",
    text: "Russell Westbrook",
  },
  {
    id: 9,
    image:
      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExamFxa3RkZ243cmcxMnpmOXhlOGd3bDN0NjN5cXJpNHVkYmQ0aDI5aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aP92lqNc7JIL0ZEs3P/giphy.gif",
    text: "James Harden",
  },
];

export const CardGrid = ({
  clickedCards,
  updateClickedCards,
  updateCurrentScore,
  updateBestScore,
  bestScore,
}) => {
  const [shuffledCards, setShuffledCards] = useState([]);
  const shuffleCards = () => {
    const shuffled = [...staticCards].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
      shuffleCards();
  }, [clickedCards])
  const handleCardClick = (cardId) => {
    const alreadyClicked = clickedCards.includes(cardId);
    if (alreadyClicked) {
      updateCurrentScore(0);
      updateClickedCards([]);
    } else {
      const newScore = clickedCards.length + 1;
      updateClickedCards((prevClickedCards) => [...prevClickedCards, cardId]);
      updateCurrentScore(newScore);
      if (newScore > bestScore) {
        updateBestScore(newScore);
      }
    }
  };
  return (
    <div className="card-grid">
      {shuffledCards.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          text={card.text}
          onClick={() => handleCardClick(card.id)}
        />
      ))}
    </div>
  );
};
