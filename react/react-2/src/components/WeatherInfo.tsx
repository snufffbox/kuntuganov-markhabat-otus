import React, { Component, MouseEvent } from "react";
import { Link } from "react-router-dom";

import { CityWeather } from "../App";

export interface IWeatherInfoProps {
  weather: CityWeather;
  favourite: boolean;
  onToggleFavouriteCity: () => void;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export class WeatherInfo extends Component<IWeatherInfoProps> {
  render() {
    return (
      <>
        {this.props.weather.received ? (
          <div className="information">
            <div className="information_header">
              Информация о погоде в городе:
              <span className="information_city">
                {this.props.weather.city}
              </span>
            </div>
            <hr />
            <div className="information_item">
              Страна:
              <span className="information_item_bold">
                {this.props.weather.country}
              </span>
            </div>
            <div className="information_item">
              Описание:
              <span className="information_item_bold">
                {this.props.weather.description}
              </span>
            </div>
            <div className="information_item">
              Температура:
              <span className="information_item_bold">
                {this.props.weather.temperature}
              </span>
              &deg;C
            </div>
            <div className="information_item">
              Ощущается как:
              <span className="information_item_bold">
                {this.props.weather.feels_like}
              </span>
              &deg;C
            </div>
            <div className="information_item">
              Максимальная температура:
              <span className="information_item_bold">
                {this.props.weather.temperature_max}
              </span>
              &deg;C
            </div>
            <div className="information_item">
              Минимальная температура:
              <span className="information_item_bold">
                {this.props.weather.temperature_min}
              </span>
              &deg;C
            </div>
            <div className="information_item">
              Влажность:
              <span className="information_item_bold">
                {this.props.weather.humidity}
              </span>
              %
            </div>
            <div className="information_item">
              Давление:
              <span className="information_item_bold">
                {this.props.weather.pressure}
              </span>
              hPa
            </div>
            <div className="information_item">
              <label>В избранное</label>
              <input
                type="checkbox"
                checked={this.props.favourite}
                onChange={this.props.onToggleFavouriteCity}
              />
            </div>
            <div className="information_item">
              <Link to={`/forecast/${this.props.weather.city}`}>
                <button type="button" onClick={this.props.onClick}>
                  Подробнее
                </button>
              </Link>
            </div>
          </div>
        ) : this.props.weather.error_text ? (
          <div className="error">Ошибка: {this.props.weather.error_text}</div>
        ) : (
          <div className="no-data">Нет данных</div>
        )}
      </>
    );
  }
}
