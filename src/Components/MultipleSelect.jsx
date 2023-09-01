import React, { Component } from "react";
import Select from "react-select";
import './../App.css';

class MultipleSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
    };
  }

  handleChange = (value) => {
    this.setState({ value });
    this.props.onChange(this.props.index, value.label);
  };

  render() {
    const { options, placeholder } = this.props;
    return (
      <div className="select-container">
        <Select
          multiple
          value={this.state.value}
          onChange={this.handleChange}
          options={options}
          placeholder={placeholder}
        />
      </div>
    );
  }
}

export default MultipleSelect;
