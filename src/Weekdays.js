import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Utils } from './Utils';

export default function Weekdays(props) {
	const {
		styles,
		startFromMonday,
		currentMonth: month,
		currentYear: year,
		currentWeekday,
		weekdays,
		textStyle,
		dayLabelsWrapper,
		customDayHeaderStyles,
	} = props;

	// dayOfWeekNums: ISO week day numbers
	const dayOfWeekNums = startFromMonday ? [1, 2, 3, 4, 5, 6, 7] : [7, 1, 2, 3, 4, 5, 6];
	let wd = weekdays;
	if (!wd) {
		wd = startFromMonday ? Utils.WEEKDAYS_MON : Utils.WEEKDAYS; // English Week days Array
	}

	return (
		<View style={[styles.dayLabelsWrapper, dayLabelsWrapper]}>
			{ wd.map((day, key) => {
				const dayOfWeekTextStyle = [styles.dayLabels, textStyle];
				let customDayOfWeekStyles = {};
				const dayOfWeek = dayOfWeekNums[key];
				if (customDayHeaderStyles instanceof Function) {
					customDayOfWeekStyles = customDayHeaderStyles({ dayOfWeek, month, year }) || {};
					dayOfWeekTextStyle.push(customDayOfWeekStyles.textStyle);
				}

				if (dayOfWeek === currentWeekday) {
					//TODO make a props active weekday color
					dayOfWeekTextStyle.push({ color: '#F6C134' })
				}
				return (
					<View style={customDayOfWeekStyles.style} key={key}>
						<Text style={dayOfWeekTextStyle}>
							{day}
						</Text>
					</View>
				);
			})
			}
		</View>
	);
}

Weekdays.propTypes = {
	startFromMonday: PropTypes.bool,
	weekdays: PropTypes.array,
	customDayHeaderStyles: PropTypes.func,
};
