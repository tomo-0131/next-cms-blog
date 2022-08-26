import { StaticImageData } from "next/image";

interface StaticRequire {
	default: StaticImageData;
}

declare type StaticImport = StaticRequire | StaticImageData;

export type Blog = {
	id?: string;
	title: string;
	subtitle?: string;
	slug?: string;
	publishDate: string;
	content?: string;
	eyecatch?: {
		url?: string;
		width: number | string;
		height: number | string;
	};
	categories?: Category[];
	prevPost?: string;
	nextPost?: string;
};

export type Category = {
	name: string;
	slug: string;
};
