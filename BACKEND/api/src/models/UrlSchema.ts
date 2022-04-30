import { Schema, model } from 'mongoose';

const urlSchema = new Schema(
	{
		url: {
			type: String,
			require: true,
			trim: true,
			unique: true,
		},
		keyword: {
			type: String,
			trim: true,
		},
		checked: {
			type: String,
			require: true,
			trim: true,
		},
	},
	{
		versionKey: false,
		timestamps: true, 
	}
);

export default model('UrlSchema', urlSchema);

