export type AIToolCategory =
	| "chat"
	| "coding"
	| "image"
	| "audio"
	| "video"
	| "writing"
	| "search"
	| "other";

export type AIToolFrequency =
	| "daily"
	| "weekly"
	| "occasional"
	| "experimental";

export type LocaleString = Partial<
	Record<"en" | "zh_CN" | "zh_TW" | "ja", string>
>;

export function getLocaleString(value: LocaleString, lang: string): string {
	return value[lang as keyof LocaleString] ?? value.en ?? "";
}

export interface AITool {
	id: string;
	name: string;
	description: LocaleString;
	icon: string;
	categories: AIToolCategory[];
	frequency: AIToolFrequency;
	url?: string;
	usage?: LocaleString;
	tags?: string[];
	color?: string;
}

export const aiToolsData: AITool[] = [
	{
		id: "chatgpt",
		name: "ChatGPT",
		description: {
			en: "My main all-purpose AI assistant for building things, creating images, and everyday conversations.",
			zh_CN: "我的主力全能 AI 助手，用于写代码、生成图片和日常聊天。",
			zh_TW: "我的主力全能 AI 助手，用於寫程式、生成圖片和日常聊天。",
			ja: "コーディング、画像生成、日常会話に使っているメインの万能 AI アシスタント。",
		},
		icon: "simple-icons:openai",
		categories: ["chat", "coding", "image", "writing"],
		frequency: "daily",
		url: "https://chatgpt.com/",
		usage: {
			en: "Daily: coding, image generation, and chatting",
			zh_CN: "每天：编程、图像生成与聊天",
			zh_TW: "每天：程式設計、圖像生成與聊天",
			ja: "毎日：コーディング、画像生成、チャット",
		},
		tags: ["Coding", "Image", "Chat", "Writing"],
		color: "#10A37F",
	},
	{
		id: "grok",
		name: "Grok",
		description: {
			en: "A secondary assistant I use when I want a less constrained, more open-ended perspective for conversation and creative exploration.",
			zh_CN: "当我想要限制更少、视角更开放的对话与创意探索时使用的辅助 AI。",
			zh_TW: "當我想要限制更少、視角更開放的對話與創意探索時使用的輔助 AI。",
			ja: "制約が少なく、より自由な視点で会話や創作を広げたいときに使うサブ AI。",
		},
		icon: "simple-icons:x",
		categories: ["chat", "other"],
		frequency: "occasional",
		url: "https://grok.com/",
		usage: {
			en: "Occasional: open-ended conversations and a second perspective",
			zh_CN: "偶尔：更自由的对话与不同视角",
			zh_TW: "偶爾：更自由的對話與不同視角",
			ja: "時々：自由な会話と別の視点",
		},
		tags: ["Chat", "Open-ended", "Second Perspective"],
		color: "#111111",
	},
];
