import React, { Fragment } from 'react';
import { Header } from 'react-navigation';
import Constants from 'expo-constants';
import { startCase } from 'lodash';
import { Link, ListHeader, ListItem, Page, Space } from '../atoms';
import { repo } from '../providers/urls';

import * as Brightness from './brightness';
import * as Font from './font';
import * as Permissions from './permissions';
import * as ScreenOrientation from './screen-orientation';
import * as Sensors from './sensors';

export const molecules = {
	Brightness,
	Font,
	Permissions,
	ScreenOrientation,
	Sensors,
};

export const Overview: React.SFC = () => (
	<Page
		title='expo hooks'
		subtitle={<>Complementary hooks for <Link url={repo}>Expo</Link></>}
		header={<Space top={Constants.statusBarHeight + Header.HEIGHT} />}
	>
		{Object.entries(molecules).map(([moleculeName, molecule]) => (
			<Fragment key={`molecule-${moleculeName}`}>
				<ListHeader>{startCase(moleculeName)}</ListHeader>
				{Object.values(molecule).map((screen) => (
					<ListItem
						key={`screen-${screen.defaultProps!.name!}`}
						name={screen.defaultProps!.name!}
						description={screen.defaultProps!.description!}
					/>
				))}
			</Fragment>
		))}
	</Page>
);
