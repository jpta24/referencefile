import axios from 'axios';
import { Video } from './Video'; //Interface

const API = 'http://localhost:5000';

export const getVideos = async () => {
	return await axios.get<Video[]>(`${API}/videos`);
};

// <Video[]> le digo que devuelve un arreglo de videos para despues poder editar los datos que se reciban

export const createVideo = async (video: Video) => {
	return await axios.post(`${API}/videos`, video);
};

export const getVideo = async (id: string) => {
	return await axios.get<Video>(`${API}/videos/${id}`);
};

export const updateVideo = async (id: string, video: Video) => {
	return await axios.put<Video>(`${API}/videos/${id}`, video);
};

export const deleteVideo = async (id: string) => {
	return await axios.delete<Video>(`${API}/videos/${id}`);
};
