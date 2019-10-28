//无头浏览器
//软件自动化测试
//cnom i puppeteer -S
const puppeteer = require('puppeteer');
run();
async function run(){
  const browser = await puppeteer.launch({
    headless:false
  })
  const page = await browser.newPage();
  await page.goto('https://juejin.im/books',{
    //0 没有网络请求
    waitUntil:'networkidle0'
  })
  await page.screenshot({
    path:'./book.png'
  })
}
