import React from 'react';
import Button from './Button';

const buttonListItems = [
	'All',
	'Songs',
	'Gaming',
	'Cricket',
	'Soccer',
	'News',
	'Cooking',
	'Art',
];

const ButtonList = () => {
	return (
		<div className="flex">
			{buttonListItems.map((item, index) => (
				<Button key={index} name={item} />
			))}
		</div>
	);
};

export default ButtonList;
