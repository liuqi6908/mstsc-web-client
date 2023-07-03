# mstsc-demo

基于 [mstsc.js](https://github.com/citronneur/mstsc.js) 二次开发的 web 端远程桌面连接

## 功能

- 连接远程桌面
- 记住凭证
- 高性能（禁用壁纸等）

## 依赖

该项目使用了一些开源项目才能正常工作：

- [node.js] - 后端的事件 I/O
- [Express] - 快速的 node.js 网络应用框架
- [node-rdpjs-2] - 是 Microsoft RDP（远程桌面协议）协议（客户端和服务器端）的纯实现，仅支持 SSL 安全层
- [socket.io] - 基于事件的实时双向通信

## 部署网址

[远程桌面连接](https://cloud.qiyandata.com:6443/rdp/)

## 下载运行

```plaintext
git clone https://github.com/liuqi6908/mstsc-demo.git
cd mstsc-demo
npm install
npm start 或 node server.js
```

## 注意事项

### node-rdpjs

node-rdpjs 更新于多年之前，在新版本的 node.js 中可能会出现许多意想不到的报错，需使用针对新版本 node.js 升级的 `node-rapjs-2`
