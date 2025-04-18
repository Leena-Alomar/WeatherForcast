import "./WeatherForecast.css"

const WeatherForecast = ({ forecast }) => {
  return (
    <div className="weather-card">
      <h3>{forecast.day}</h3>
      <img src={forecast.img} alt={forecast.imgAlt} width="60" />
      <p className="des">Conditions: {forecast.conditions}</p>
      <p className="des">Time: {forecast.time}</p>
    </div>
  );
};

export default WeatherForecast;


