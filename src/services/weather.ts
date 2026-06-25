import axios from "axios";

export const getWeather = async () => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`,
  );

  return res.data;
};
