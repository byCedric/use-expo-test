import { useEffect, useState } from 'react';
import { Accelerometer, ThreeAxisMeasurement } from 'expo-sensors';

export function useAccelerometer(options: AccelerometerOptions = {}): UseAccelerometerSignature {
	const [data, setData] = useState(options.initial);
	const [available, setAvailable] = useState<boolean>();
	const { availability = true } = options;

	useEffect(() => {
		if (availability) {
			Accelerometer.isAvailableAsync().then(setAvailable);
		}

		if (options.interval !== undefined) {
			Accelerometer.setUpdateInterval(options.interval);
		}

		return Accelerometer.addListener(setData).remove;
	}, []);

	return [data, available];
}

type UseAccelerometerSignature = [
	ThreeAxisMeasurement | undefined,
	boolean | undefined,
];

export interface AccelerometerOptions {
	/** The initial data to use before the first update. */
	initial?: ThreeAxisMeasurement;
	/** If it should check the availability of the sensor, defaults to `true`. */
	availability?: boolean;
	/**
	 * The interval, in ms, to update the accelerometer data.
	 * Note, this is set globally through `Accelerometer.setUpdateInterval`.
	 * When used in 2 or more components, only the last rendered component's interval will be used for all.
	 */
	interval?: number;
}
