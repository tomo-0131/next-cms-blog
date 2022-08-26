export interface ISiteMeta {
	siteTitle: string;
	siteDesc: string;
	siteUrl: string;
	siteLang: string;
	siteLocale: string;
	siteType: string;
	siteIcon: string;
}

export const siteMeta: ISiteMeta = {
	siteTitle: "BearDev",
	siteDesc: "日々の勉強ブログ",
	siteUrl: "http://localhost:3000",
	siteLang: "ja",
	siteLocale: "ja_JP",
	siteType: "website",
	siteIcon: "/favicon.png",
};
