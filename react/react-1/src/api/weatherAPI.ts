import { openWeatherAPI } from '../config/config';

export async function getWeatherInfo(city: string): Promise<any> {
	const response = await fetch(`${openWeatherAPI.URL}?q=${city}&appid=${openWeatherAPI.KEY}&units=metric&lang=ru`);

	return response.json();
};