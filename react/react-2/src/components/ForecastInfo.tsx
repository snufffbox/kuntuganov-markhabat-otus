import React, { Component } from "react";
import { Link } from "react-router-dom";

import { CityForecast } from "../App";

export interface IForecastInfoProps {
  forecast: CityForecast;
}

export class ForecastInfo extends Component<IForecastInfoProps> {
  render() {
    return (
      <>
        <Link to="/">Назад</Link>
        {this.props.forecast.received ? (
          <div className="information">
            <div className="information_header">
              Подробная информация о погоде в городе:
              <span className="information_city">
                {this.props.forecast.city}
              </span>
            </div>
            <hr />
            <div>
              <table className="styled-table">
                <thead>
                  <tr>
                    <th>Дата</th>
                    <th>Описание</th>
                    <th>Температура</th>
                    <th>Влажность</th>
                    <th>Давление</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.forecast.list.map((data, index) => (
                    <tr key={index}>
                      <th>
                        {new Intl.DateTimeFormat("ru", {
                          year: "numeric",
                          month: "long",
                          day: "2-digit",
                          hour: "2-digit",
                          minute: "2-digit",
                        }).format(data.datetime)}
                      </th>
                      <td>{data.description}</td>
                      <td>{data.temperature} &deg;C</td>
                      <td>{data.humidity} %</td>
                      <td>{data.pressure} hPa</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : this.props.forecast.error_text ? (
          <div className="error">Ошибка: {this.props.forecast.error_text}</div>
        ) : (
          <div className="no-data">Нет данных</div>
        )}
      </>
    );
  }
}
