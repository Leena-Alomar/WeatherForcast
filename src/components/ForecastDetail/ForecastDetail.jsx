import { useParams, Link } from 'react-router-dom';
import ActivityForm from '../ActivityForm/ActivityForm';

const ForecastDetail = ({ forecasts, addActivity }) => {
  const { id } = useParams();
  const forecast = forecasts.find(f => f.id === id);

  if (!forecast) return <p>Forecast not found.</p>;

  const handleAddActivity = (activity) => {
    addActivity(id, activity);
  };

  return (
    <div className="forecast-detail">
      <Link to="/">← Back to Weather</Link>
      <h2>{forecast.day} Forecast</h2>
      <img src={forecast.img} alt={forecast.imgAlt} width="80" />
      <p>Conditions: {forecast.conditions}</p>
      <p>Time: {forecast.time}</p>

      <h3>Activities</h3>
      <ul>
        {forecast.activities.length === 0 ? (
          <li>No activities yet.</li>
        ) : (
          forecast.activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))
        )}
      </ul>

      <ActivityForm onAddActivity={handleAddActivity} />
    </div>
  );
};

export default ForecastDetail;
