const fs = require('fs');

function logToFile(message) {
  const logFilePath = 'logs.txt';

  // 获取当前日期和时间
  const now = new Date();
  const timestamp = now.toISOString();

  // 将消息格式化为日志行
  const logLine = `[${timestamp}] ${message}\n`;

  // 将日志行写入文件
  fs.appendFile(logFilePath, logLine, (err) => {
    if (err) throw err;
    console.log('日志已记录');
  });
}

// 示例用法
logToFile('这是一个日志消息');
