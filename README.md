# FreeApp 项目简介

基于Vue打造的渐进式娱乐应用，主要目的是为了稳固所学知识，体验新技术

目前涉及技术栈：Vue全家桶，
              nes.css //  像素风格，
              jquery，
              elementUI，
              better-scroll，
              tone.js
为了学习所以引入的依赖比较多，但只用到部分技术功能

项目功能在持续开发中

## 开发环境要求

需要 NodeJS 环境

## 开发&运行 

``` bash
# install dependencies//安装依赖
npm install

# serve with hot reload at localhost:8080//开发环境下运行，端口号为8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 应用--Piano

在线钢琴应用，支持键盘按键和鼠标点击播放，同时琴键上会有按键提示，随机歌词轮播

灵感来源：https://www.autopiano.cn/

参考项目：https://github.com/AutoPiano/AutoPiano/projects/

琴键效果纯用CSS实现

钢琴音效主要思路：根据音频数量循环生成 ``audio`` 标签，根据方法调用``audio`` 的play和pause方法，实现对音频的控制
                此实现有个缺陷：无法正常控制音效长度，因为音频长度固定
                后期考虑用tone.js改写

tone.js 实现音频控制的主要思路

[文档地址]https://tonejs.github.io/
~~~js
// new出乐器实例
const synth = new Tone.Synth().toDestination()

// 选择音名，设置点击方式和点击时间   实现对音频的有效控制
synth.triggerAttack("C4", now)

synth.triggerRelease("C4", now+2)
~~~

## 应用--沙雕聊天室

基于人工智能聊天API开发的小聊天室应用

实现功能：关键词过滤功能(逐字过滤)  聊天列表的拖动 橡皮筋效果 better-scroll

感谢无私的API提供者 http://api.qingyunke.com/api.php 

## 应用--网抑云音乐（开发中）

使用网易云API开发的H5音乐播放器

灵感来源： 网易云API开源项目：https://github.com/Binaryify/NeteaseCloudMusicApi

## 应用--游戏（预开发）

各种用JS打造的小游戏

three.js--一款运行在浏览器中的 3D 引擎，你可以用它创建各种三维场景，包括了摄影机、光影、材质等各种对象

