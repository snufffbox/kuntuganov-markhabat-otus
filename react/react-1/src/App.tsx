import React, { Component, FormEvent, MouseEvent } from 'react'

import { FavouriteCities } from './components/FavouriteCities'
import { CityInputForm } from './components/CityInputForm'
import { WeatherInfo } from './components/WeatherInfo'
import { getWeatherInfo } from './api/weatherAPI'
import { FAVOURITES_STORAGE } from './config/config'

import './styles/styles.css'

export interface CityWeather {
	city: string
	received: boolean
	description: string
	temperature: number
  feels_like: number
	temperature_min: number
	temperature_max: number
	country: string
	humidity: number
	pressure: number
	error_text: string
};

interface IAppState {
	currentCity: string
	favouriteCities: Array<string>
	weather: CityWeather
};

export class App extends Component<{}, IAppState> {
	state = {
		currentCity: '',
		favouriteCities: new Array<string>(),
		weather: {
			city: '',
			received: false,
			description: '',
			temperature: 0,
      feels_like: 0,
			temperature_min: 0,
			temperature_max: 0,
			country: '',
			humidity: 0,
			pressure: 0,
			error_text: '',
		},
	};

	searchCityClick = (): void => {
		this.loadWeather(this.state.currentCity)
	};

	inputCity = (event: FormEvent<HTMLInputElement>): void => {
		const currentCity = event.currentTarget.value.toUpperCase();

		this.setState({ currentCity })
	};

	favouriteClick = (event: MouseEvent<HTMLDivElement>): void => {
		const currentCity = event.currentTarget.innerText;

		this.setState({ currentCity })

		this.loadWeather(currentCity)
	};

	isFavourite = (city: string): boolean => {
		return this.state.favouriteCities.indexOf(city) >= 0
	};

	toggleFavourite = (): void => {
		const idx = this.state.favouriteCities.indexOf(this.state.currentCity.toUpperCase());

		if (idx >= 0) {
			const len = this.state.favouriteCities.length;

			const newFavourites = [...this.state.favouriteCities.slice(0, idx), ...this.state.favouriteCities.slice(idx + 1, len)];

			this.setState({
				favouriteCities: newFavourites,
			});

			localStorage.setItem(FAVOURITES_STORAGE, JSON.stringify(newFavourites));
		} else {
			const newCity = this.state.currentCity.toUpperCase();

			const newFavourites = [...this.state.favouriteCities, newCity];

			this.setState({
				favouriteCities: newFavourites,
			});

			localStorage.setItem(FAVOURITES_STORAGE, JSON.stringify(newFavourites))
		}
	};

	loadWeather = (city: string): void => {
		try {
			getWeatherInfo(city).then(data => {
				if (data.cod === 200) {
					this.setState({
						weather: {
							received: true,
							city,
							description: data.weather[0].description,
							temperature: data.main.temp,
              feels_like: data.main.feels_like,
							temperature_max: data.main.temp_max,
							temperature_min: data.main.temp_min,
							humidity: data.main.humidity,
							pressure: data.main.pressure,
							country: data.sys.country,
							error_text: '',
						},
					})
				} else {
					this.setState({
						weather: {
							...this.state.weather,
							received: false,
							error_text: data.message,
						},
					})
				}
			})
		} catch (error_text) {
			this.setState({
				weather: {
					...this.state.weather,
					received: false,
					error_text,
				},
			})
		};
	};

	componentDidMount() {
		const favourites = localStorage.getItem(FAVOURITES_STORAGE);

		this.setState({
			favouriteCities: favourites ? JSON.parse(favourites) : [],
		});
	};

	render() {
		return (
			<div className="container">
				<h1>Приложение погоды</h1>
				<div className="left_panel">
					<FavouriteCities cities={this.state.favouriteCities} onClick={this.favouriteClick} />
				</div>
				<div className="right_panel">
					<CityInputForm currentCity={this.state.currentCity} onSearchCity={this.searchCityClick} onChange={this.inputCity} />
					<WeatherInfo
						weather={this.state.weather}
						onToggleFavouriteCity={this.toggleFavourite}
						favourite={this.isFavourite(this.state.currentCity)}
					/>
				</div>
			</div>
		)
	};
};
