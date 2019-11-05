//无头浏览器
//软件自动化测试
//cnpm i puppeteer -S
const puppeteer=require('puppeteer');
run();
async function run(){
    const browser=await puppeteer.launch({
        headless:false
    })
    const page=await browser.newPage();
    //networkidle0 没有网络请求
    await page.goto('https://juejin.im/books',{
        waitUntil:'networkidle0'
    })
    await page.screenshot({
        path:'./books.png'
    })
}