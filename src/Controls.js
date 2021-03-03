import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

export default function Controls(props) {
	const {
		styles,
		textStyles,
		label,
		component,
		onPressControl,
		disabled,
	} = props;

	return (
		<TouchableOpacity
			onPress={() => onPressControl()}
			style={[styles, { marginHorizontal: 15 }]}
			disabled={disabled}
			hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
		>
			<View style={{ opacity: disabled ? 0 : 1 }}>
				{component || <Text style={[textStyles, { color: 'white' }]}>{label}</Text>}
			</View>
		</TouchableOpacity>
	);
}

Controls.propTypes = {
	styles: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
	label: PropTypes.string,
	onPressControl: PropTypes.func.isRequired,
};
