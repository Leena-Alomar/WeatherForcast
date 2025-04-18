import { useState } from 'react';
import './ActivityForm.css';

const ActivityForm = ({ onAddActivity }) => {
  const [activity, setActivity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!activity.trim()) return;
    onAddActivity(activity);
    setActivity('');
  };

  return (
    <form onSubmit={handleSubmit} className="activity-form">
      <input
        type="text"
        placeholder="Enter an activity..."
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      />
      <button type="submit" id="btn">Add</button>
    </form>
  );
};

export default ActivityForm;
