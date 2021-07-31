import React, { Component, MouseEvent } from 'react'

export interface IFavouriteCitiesProps {
	cities: Array<string>
	onClick: (event: MouseEvent<HTMLDivElement>) => void
};

export class FavouriteCities extends Component<IFavouriteCitiesProps, any> {
	render() {
		return (
			<div className="favourite_list">
				<div className="favourite_list_header">Избранные города:</div>
				{this.props.cities.length > 0 ? (
					<div>
						{this.props.cities.map((city, index) => (
							<div className="favourite_list_item" key={index} onClick={this.props.onClick}>
								{city}
							</div>
						))}
					</div>
				) : (
					<div className="favourite_list_empty">Список пуст</div>
				)}
			</div>
		)
	};
};