/**
 * Calendar Picker Component
 *
 * Copyright 2016 Yahoo Inc.
 * Licensed under the terms of the MIT license. See LICENSE file in the project root for terms.
 */
import { Dimensions, PixelRatio } from "react-native";

const DEFAULT_SELECTED_BACKGROUND_COLOR = '#F6C134';
const DEFAULT_SELECTED_BACKGROUND_RANGE_COLOR = '#ACABB333';
const DEFAULT_SELECTED_TEXT_COLOR = '#ffffff';
// const DEFAULT_TODAY_BACKGROUND_COLOR = '#CCCCCC';

function getBorderRadiusByShape(scaler, dayShape) {
	if (dayShape === 'square') {
		return 0;
	} else {
		return Math.min(30, PixelRatio.roundToNearestPixel(30 * scaler))
	}
}

export function makeStyles(params) {
	const {
		containerWidth,
		containerHeight,
		scaleFactor,
		selectedDayColor,
		selectedDayTextColor,
		todayBackgroundColor,
		dayShape
	} = params;

	// const scaler = Math.min(containerWidth, containerHeight) / scaleFactor;
	const scaler = Math.min(Dimensions.get("window").width, Dimensions.get("window").height) / scaleFactor;
	const SELECTED_BG_COLOR = selectedDayColor || DEFAULT_SELECTED_BACKGROUND_COLOR;
	const SELECTED_TEXT_COLOR = selectedDayTextColor || DEFAULT_SELECTED_TEXT_COLOR;
	// const TODAY_BG_COLOR = todayBackgroundColor ? todayBackgroundColor : DEFAULT_TODAY_BACKGROUND_COLOR;
	const TODAY_BG_COLOR = todayBackgroundColor;

	const doScaler = (value) => Math.min(value, PixelRatio.roundToNearestPixel(value * scaler))
	const scaleFont = (value) => Math.floor(doScaler(value))

	const dayWidth = containerWidth / 7

	return {
		containerWidth,
		containerHeight,

		calendar: {
			// height: doScaler(320),
			// marginTop: doScaler(10),
		},

		dayButton: {
			// width: dayWidth,
			width: '100%',
			height: '100%',
			// height: doScaler(50),
			// borderRadius: getBorderRadiusByShape(scaler, dayShape),
			alignSelf: 'center',
			justifyContent: 'center',
		},

		dayLabel: {
			fontSize: scaleFont(15),
			color: '#fff',
			alignSelf: 'center',
		},

		selectedDayLabel: {
			color: SELECTED_TEXT_COLOR,
		},

		dayLabelsWrapper: {
			width: '100%',
			height: doScaler(54),
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-around',
			borderTopWidth: 0.4,
			borderBottomWidth: 0.4,
			borderColor: '#ACABB37F',
		},

		daysWrapper: {
			width: '100%',
			// alignSelf: 'center',
			// justifyContent: 'center',
		},

		dayLabels: {
			fontSize: scaleFont(15),
			color: '#ACABB3',
			textAlign: 'center',
		},

		selectedDay: {
			width: doScaler(32),
			height: doScaler(32),
			borderRadius: getBorderRadiusByShape(scaler, dayShape),
			// alignItems: 'center',
			justifyContent: 'center',
		},

		selectedDayBackground: {
			backgroundColor: SELECTED_BG_COLOR,
		},

		selectedToday: {
			width: doScaler(32),
			height: doScaler(32),
			backgroundColor: TODAY_BG_COLOR,
			borderRadius: getBorderRadiusByShape(scaler, dayShape),
			alignItems: 'center',
			justifyContent: 'center',
		},

		dayWrapper: {
			width: dayWidth,
			height: doScaler(50),
			alignItems: 'center',
			justifyContent: 'center',
		},

		startDayWrapper: {
			width: dayWidth,
			height: doScaler(32),
			borderTopLeftRadius: 20 * scaler,
			borderBottomLeftRadius: 20 * scaler,
			backgroundColor: SELECTED_BG_COLOR,
			alignSelf: 'center',
			justifyContent: 'center',
		},

		endDayWrapper: {
			width: dayWidth,
			height: doScaler(32),
			borderTopRightRadius: 20 * scaler,
			borderBottomRightRadius: 20 * scaler,
			backgroundColor: SELECTED_BG_COLOR,
			alignSelf: 'center',
			justifyContent: 'center'
		},

		inRangeDay: {
			width: dayWidth,
			height: doScaler(32),
			backgroundColor: DEFAULT_SELECTED_BACKGROUND_RANGE_COLOR,
			alignSelf: 'center',
			justifyContent: 'center'
		},

		headerWrapper: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			width: containerWidth,
			height: doScaler(53),
		},

		monthYearHeaderWrapper: {
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			paddingHorizontal: 3 * scaler,
		},

		previousContainer: {},
		nextContainer: {},
		navButtonText: {},

		weeks: {
			flexDirection: 'column'
		},

		weekRow: {
			flexDirection: 'row'
		},

		disabledText: {
			fontSize: scaleFont(15),
			color: '#acabb37f',
			alignSelf: 'center',
			justifyContent: 'center'
		},

		selectedDisabledText: {
			fontSize: scaleFont(15),
			color: '#DDDDDD',
			alignSelf: 'center',
			justifyContent: 'center'
		},

		monthHeaderMainText: {
			fontSize: scaleFont(15),
			textTransform: 'uppercase',
			color: '#fff',
			// textAlign: 'center',
			marginHorizontal: 3,
		},

		monthButton: {
			width: 30 * scaler,
			height: 30 * scaler,
			borderRadius: 30 * scaler,
			alignSelf: 'center',
			justifyContent: 'center',
		},

		monthsHeaderText: {
			flex: 1,
			fontSize: scaleFont(15),
			color: '#fff',
			textAlign: 'center'
		},

		monthContainer: {
			flex: 1,
			alignItems: 'center',
		},

		monthText: {
			fontSize: scaleFont(15),
			color: '#fff',
			alignSelf: 'center'
		},

		monthsWrapper: {
			alignSelf: 'center',
			justifyContent: 'center',
			width: containerWidth,
			borderTopWidth: 0.4,
			borderTopColor: '#acabb37f'
		},

		monthsRow: {
			flexDirection: 'row',
			padding: 20,
		},

		yearHeaderMainText: {
			fontSize: scaleFont(15),
			color: '#fff',
			marginHorizontal: 3,
		},

		yearContainer: {
			flex: 1,
			alignItems: 'center',
		},

		yearText: {
			fontSize: scaleFont(15),
			color: '#fff',
			alignSelf: 'center'
		},

		yearsHeaderText: {
			fontSize: scaleFont(15),
			color: '#fff',
			width: doScaler(180),
			textAlign: 'center'
		},

		yearsWrapper: {
			alignSelf: 'center',
			justifyContent: 'center',
			width: containerWidth,
		},

		yearsRow: {
			flexDirection: 'row',
			padding: doScaler(20),
		},

	};
}
