/*
 * Copyright (c) 2015 Sylvain Peyrefitte
 *
 * This file is part of mstsc.js.
 *
 * mstsc.js is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

var express = require("express");
/* var http = require("http"); */
var https = require("https");

// 读取 ssl 证书内人
var fs = require("fs");
var path = require("path");
var ssl = {
  key: fs.readFileSync(path.join(__dirname, "/ssl/rdpweb.qiyandata.com.key")),
  cert: fs.readFileSync(path.join(__dirname, "/ssl/rdpweb.qiyandata.com.pem")),
};

var app = express();
app.use(express.static(__dirname + "/client"));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/client/html/index.html");
});
/* var server = http
  .createServer(app)
  .listen(process.env.PORT || 9250, function () {
    console.log("远程桌面连接 监听端口 =====> " + (process.env.PORT || 9250));
  }); */
// 创建 https 服务
var server = https
  .createServer(ssl, app)
  .listen(process.env.PORT || 9250, function () {
    console.log(
      "远程桌面连接 监听端口 =====> " + (process.env.PORT || 9250) + "(https)"
    );
  });

require("./server/mstsc")(server);
