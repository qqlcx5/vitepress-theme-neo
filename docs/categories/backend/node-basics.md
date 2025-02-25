# Node.js 基础教程

<ArticleInfo
  date="2024-03-21"
  category="后端"
  :tags="['Node.js', 'JavaScript', '教程']"
/>

## Node.js 简介

Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时环境。

### 特点

- 非阻塞 I/O
- 事件驱动
- 轻量高效

## 示例代码

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
});

server.listen(3000);
```