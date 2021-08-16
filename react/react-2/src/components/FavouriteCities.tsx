import React, { Component, MouseEvent } from "react";
import { Link } from "react-router-dom";

export interface IFavouriteCitiesProps {
  cities: Array<string>;
  onClick: (event: MouseEvent<HTMLLIElement>) => void;
}

export class FavouriteCities extends Component<IFavouriteCitiesProps> {
  render() {
    return (
      <div className="favourite_list">
        <div className="favourite_list_header">Избранные города:</div>
        {this.props.cities.length > 0 ? (
          <ul>
            {this.props.cities.map((city, index) => (
              <li
                className="favourite_list_item"
                key={index}
                onClick={this.props.onClick}
              >
                <Link to={`/forecast/${city}`}>{city}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="favourite_list_empty">Список пуст</div>
        )}
      </div>
    );
  }
}
