import './App.css';
import { useState } from 'react';
import WeatherForecast from './components/WeatherForecast/WeatherForecast';
import ActivityForm from './components/ActivityForm/ActivityForm';


function App() {
  const weatherForecasts = [
    {
      day: 'Mon',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/day.svg',
      imgAlt: 'sun icon',
      conditions: 'sunny',
      time: 'Morning',
    },
    {
      day: 'Tue',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/night.svg',
      imgAlt: 'moon icon',
      conditions: 'clear',
      time: 'Night',
    },
    {
      day: 'Wed',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/stormy.svg',
      imgAlt: 'clouds with lightning icon',
      conditions: 'stormy',
      time: 'All Day',
    },
    {
      day: 'Thu',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-day.svg',
      imgAlt: 'sun overcast by clouds icon',
      conditions: 'overcast',
      time: 'Evening',
    },
    {
      day: 'Fri',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-night.svg',
      imgAlt: 'moon overcast by clouds icon',
      conditions: 'cloudy',
      time: 'Night',
    },
  ];

  const [activities, setActivities] = useState([]);

  // Corrected function to add activities
  function addActivity(activity) {
    setActivities((prevActivities) => [...prevActivities, activity]);
  }

  return (
    <div className="weather-div">
      <h1>Local Weather</h1>
      
      <section className="weather-section">
        {weatherForecasts.map((forecast, index) => (
          <WeatherForecast key={index} forecast={forecast} />
        ))}
      </section>

      <section className="activity-form-section" id="add">
        <h2>Add Activity</h2>
        <ActivityForm onAddActivity={addActivity} />
      </section>

      <section className="activity-list">
        <h2>Activities</h2>
        <ul>
          {activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
