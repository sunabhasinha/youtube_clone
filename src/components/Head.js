import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
	const dispatch = useDispatch();
	const toggleMenuHandler = () => {
		dispatch(toggleMenu());
	};

	return (
		<div className="grid grid-flow-col shadow-lg p-2">
			<div className="flex col-span-1">
				<img
					onClick={() => toggleMenuHandler()}
					className="h-12 cursor-pointer"
					alt="menu"
					src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"
				/>
				<img
					className="w-24 h-12"
					alt="logo"
					src="https://duet-cdn.vox-cdn.com/thumbor/0x0:1680x1050/2048x1365/filters:focal(840x525:841x526):no_upscale():format(webp)/cdn0.vox-cdn.com/uploads/chorus_asset/file/9130449/YTLogo_old_new_animation.gif"
				/>
			</div>
			<div className="col-span-10 px-10">
				<input
					className="w-1/2 p-1 border border-gray-400 rounded-l-full"
					type="text"
				/>
				<button className="border border-gray-400 px-4 p-1 rounded-r-full bg-gray-200">
					🔍
				</button>
			</div>
			<div className="col-span-1">
				<img
					className="h-8 py-2"
					alt="user"
					src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
				/>
			</div>
		</div>
	);
};

export default Head;
