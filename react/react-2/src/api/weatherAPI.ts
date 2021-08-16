import { openWeatherAPI } from '../config/config';

export async function getCurrentWeatherInfo(city: string): Promise<any> {
	const response = await fetch(`${openWeatherAPI.URL}/weather?q=${city}&appid=${openWeatherAPI.KEY}&units=metric&lang=ru`);

	return response.json();
};

export async function getForecastInfo(city: string): Promise<any> {
	const response = await fetch(`${openWeatherAPI.URL}/forecast?q=${city}&appid=${openWeatherAPI.KEY}&units=metric&lang=ru`);

	return response.json();
};