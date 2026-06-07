import type { ProfileConfig } from "../types/config";

// 个人资料配置
export const profileConfig: ProfileConfig = {
  avatar: "/images/avatar.jpg", // 以 '/' 开头表示 public 目录下的路径
  name: "SonderXiaoming",
  bio: "Accept fate and stay ordinary. Defy it and become extraordinary.",
  typewriter: {
    enable: true, // 启用个人简介打字机效果
    speed: 80, // 打字速度（毫秒）
  },
  links: [
    {
      name: "GitHub",
      icon: "fa7-brands:github",
      url: "https://github.com/SonderXiaoming",
    },
    {
      name: "LinkedIn",
      icon: "fa7-brands:linkedin",
      url: "https://www.linkedin.com/in/jialeyu0608/",
    },
    {
      name: "Bilibili",
      icon: "fa7-brands:bilibili",
      url: "https://space.bilibili.com/33826828",
    },
  ],
};
