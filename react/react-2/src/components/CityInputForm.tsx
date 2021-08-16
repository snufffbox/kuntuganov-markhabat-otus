import React, { Component, FormEvent, KeyboardEvent } from "react";

export interface ICityInputFormProps {
  currentCity: string;
  onChange: (event: FormEvent<HTMLInputElement>) => void;
  onSearchCity: () => void;
}

export class CityInputForm extends Component<ICityInputFormProps> {
  gotCity = () => {
    this.props.onSearchCity();
  };

  checkKey = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") this.gotCity();
  };

  render() {
    return (
      <div className="form">
        <label className="form_label">
          Введите название города
          <input
            className="form_input"
            name="cityInput"
            autoCapitalize="true"
            value={this.props.currentCity}
            onChange={this.props.onChange}
            onKeyPress={this.checkKey}
          />
        </label>
        <button className="form_button" onClick={this.gotCity}>
          Поиск
        </button>
      </div>
    );
  }
}
