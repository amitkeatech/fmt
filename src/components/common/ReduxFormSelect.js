import React from 'react';
import SelectSearch from 'react-select';

class ReduxFormSelect extends React.Component {
	state = {
		selectedOption: null,
	};

	handleChange = selectedOption => {
		this.setState({ selectedOption });
	};

	render() {
		const { selectedOption } = this.state;
		const {input, options, placeholder} = this.props;
		return (
			<SelectSearch
				{...input}
				value={input.value}
				onInputChange={(value) => {this.props.onInputChange(value)}}
				onBlur={() => {input.onBlur(input.value)}}
				options={options}
				placeholder={placeholder}
			/>
		);
	}
}

export default ReduxFormSelect;