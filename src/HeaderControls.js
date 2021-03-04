import React from 'react';
import {
	View,
	Text,
	Platform,
	TouchableOpacity,
	Pressable
} from 'react-native';
import PropTypes from 'prop-types';
import { Utils } from './Utils';
import Controls from './Controls';

export default function HeaderControls(props) {
	const {
		styles,
		currentMonth,
		currentYear,
		onPressNext,
		onPressPrevious,
		onPressMonth,
		onPressYear,
		months,
		previousComponent,
		nextComponent,
		previousTitle,
		nextTitle,
		previousTitleStyle,
		nextTitleStyle,
		monthTitleStyle,
		yearTitleStyle,
		textStyle,
		restrictMonthNavigation,
		maxDate,
		minDate,
		headingLevel,
		monthYearHeaderWrapperStyle,
		headerWrapperStyle,
		cancelText,
		onCalendarCancel
	} = props;
	const MONTHS = months || Utils.MONTHS; // English Month Array
	const monthName = MONTHS[currentMonth];
	const year = currentYear;

	const disablePreviousMonth = restrictMonthNavigation && Utils.isSameMonthAndYear(minDate, currentMonth, currentYear);
	const disableNextMonth = restrictMonthNavigation && Utils.isSameMonthAndYear(maxDate, currentMonth, currentYear);

	const accessibilityProps = { accessibilityRole: 'header' };
	if (Platform.OS === 'web') {
		accessibilityProps['aria-level'] = headingLevel;
	}

	return (
		<View style={[styles.headerWrapper, headerWrapperStyle]}>
			<View style={{
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
				height: '100%',
				flex: 1, //TODO do something
			}}>
				<Controls
					disabled={disablePreviousMonth}
					label={previousTitle}
					component={previousComponent}
					onPressControl={onPressPrevious}
					styles={styles.previousContainer}
					textStyles={[styles.navButtonText, textStyle, previousTitleStyle]}
				/>
				<View style={[styles.monthYearHeaderWrapper, monthYearHeaderWrapperStyle]}>
					<TouchableOpacity onPress={onPressMonth}>
						<Text style={[styles.monthHeaderMainText, textStyle, monthTitleStyle]} {...accessibilityProps}>
							{monthName}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={onPressYear}>
						<Text style={[styles.yearHeaderMainText, textStyle, yearTitleStyle]}>
							{year}
						</Text>
					</TouchableOpacity>
				</View>
				<Controls
					disabled={disableNextMonth}
					label={nextTitle}
					component={nextComponent}
					onPressControl={onPressNext}
					styles={styles.nextContainer}
					textStyles={[styles.navButtonText, textStyle, nextTitleStyle]}
				/>
			</View>

			{/* TODO: removed that, make as props */}
			<Pressable
				onPress={onCalendarCancel}
				style={{
					height: '100%',
					alignItems: 'center',
					justifyContent: 'center',
					paddingHorizontal: 20,
					marginLeft: 25
				}}>
				<Text style={[textStyle, { color: '#ACABB3' }]}>{cancelText || 'Cancel'}</Text>
			</Pressable>
		</View>
	);
}

HeaderControls.propTypes = {
	currentMonth: PropTypes.number,
	currentYear: PropTypes.number,
	onPressNext: PropTypes.func,
	onPressPrevious: PropTypes.func,
	onPressMonth: PropTypes.func,
	onPressYear: PropTypes.func,
	onCalendarCancel: PropTypes.func,
};
