import React, { useEffect, useState } from 'react';
import * as videoServices from './ExServices';

import { Video } from './Video'; // Interface
import VideoItem from './VideoItem'; // componente que usa cada each

const VideoList = () => {
	const [videos, setVideo] = useState<Video[]>([]);

	const loadVideos = async () => {
		const res = await videoServices.getVideos();

		const formatedVideos = res.data
			.map((eachVideo) => {
				return {
					...eachVideo, // copia del mismo video
					createdAt: eachVideo.createdAt
						? new Date(eachVideo.createdAt)
						: new Date(),
					updatedAt: eachVideo.updatedAt
						? new Date(eachVideo.updatedAt)
						: new Date(),
				};
			})
			.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

		setVideo(formatedVideos);
	};

	useEffect(() => {
		loadVideos();
	}, []); // para cargar la informacion incial al cargar el componente

	// a cada video se le coloca un key que viene desde video._id
	return (
		<div className='row'>
			{videos.map((eachvideo: Video) => {
				return (
					<VideoItem
						eachvideo={eachvideo}
						key={eachvideo._id}
						loadVideos={loadVideos}
					/>
				);
			})}
		</div>
	);
};

export default VideoList;
