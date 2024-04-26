import React from 'react';

function Article({ title, date, preview }) {
  // Set default date value if not provided
  const formattedDate = date || "January 1, 1970";

  // Calculate minutes to read
  const wordsPerMinute = 200; // Average reading speed
  const wordCount = preview.split(" ").length;
  const minutesToRead = Math.ceil(wordCount / wordsPerMinute);

  // Define emoji for coffee cup and bento box
  const coffeeCupEmoji = "☕️";
  const bentoBoxEmoji = "🍱";

  // Display appropriate emojis based on minutes to read
  let emoji = "";
  if (minutesToRead < 30) {
    const coffeeCups = Math.ceil(minutesToRead / 5);
    emoji = coffeeCupEmoji.repeat(coffeeCups);
  } else {
    const bentoBoxes = Math.ceil(minutesToRead / 10);
    emoji = bentoBoxEmoji.repeat(bentoBoxes);
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{formattedDate} - {emoji} {minutesToRead} min read</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;


