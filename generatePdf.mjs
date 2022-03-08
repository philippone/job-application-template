#!/usr/bin/node
import puppeteer from "puppeteer";

const getPDF = async (html = "http://localhost:1337/", path = 'output/output.pdf') => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:1337/', {
      waitUntil: 'networkidle2',
    });
    await page.pdf({ path, format: 'a4' });
  
    await browser.close();
};


getPDF();