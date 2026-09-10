import type { AnnouncementConfig } from "../types/config";

// 公告栏配置
export const announcementConfig: AnnouncementConfig = {
  title: "", // 公告标题，填空使用i18n字符串Key.announcement
  content:
    "Current quest: research data systems, open-source tools, and new ideas for Princess Connect communities.", // 公告内容
  closable: true, // 允许用户关闭公告
  link: {
    enable: true, // 启用链接
    text: "See what I'm building", // 链接文本
    url: "/about/", // 链接 URL
    external: false, // 内部链接
  },
};
