import puppeteer from 'puppeteer';
import { promptSimShell } from 'readline-sync';

console.log('Scrapper is running...');

//teste de scrapper para um produto
async function scrapper() {
    const browser = await puppeteer.launch({headless : false});
    const page = await browser.newPage();
    const url = 'https://www.ze.delivery/';
    await page.goto(url);

    const [response] = await Promise.all([
        page.waitForSelector('.css-156akk6-WelcomeHeader'),
        page.click('.css-156akk6-WelcomeHeader'),
    ]);

    await page.waitForNavigation();

    const [response2] = await Promise.all([
        await page.type('#login-mail-input-email', 'iagosantiago55@gmail.com'),
        await page.type('#login-mail-input-password', 'ze@141722'),
        await page.click('#login-mail-button-sign-in'),
    ]);

    await page.waitForNavigation();
    console.log(response);
}

scrapper();