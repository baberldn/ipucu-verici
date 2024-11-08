import React, { useState } from 'react';
import HintList from './HintList';
import topics from './topics';

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicChange = (event) => {
    const topic = topics.find(t => t.topic === event.target.value);
    setSelectedTopic(topic);
  };

  return (
    <div className="App">
      <h1>İpucu Verici</h1>
      <select onChange={handleTopicChange}>
        <option value="">Bir konu seçin</option>
        {topics.map((topic, index) => (
          <option key={index} value={topic.topic}>
            {topic.topic}
          </option>
        ))}
      </select>
      {selectedTopic && (
        <div className="hints-container">
          <HintList hints={selectedTopic.hints} />
        </div>
      )}
    </div>
  );
}

export default App;
