import pc from "picocolors";
import { Browser } from "puppeteer";
import pp from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import getSystemLocale from "system-locale";
import { USER_AGENTS } from "./userAgents";

class Simppeteer {
  private instance: Browser;
  private userAgent: string;

  constructor() {
    process.env.MODE === "services" && this.init();
  }

  private async init() {
    if (!this.instance) {
      this.changeUserAgent();
      const locale = await getSystemLocale();
      pp.use(StealthPlugin());
      this.instance = await pp.launch({
        headless: "new",
        args: ["--no-sandbox", `--lang=${locale}`],
      });
    }
  }

  async getPage() {
    if (!this.instance) {
      await this.init();
    }
    const page = await this.instance.newPage();
    const userAgent = this.userAgent;
    await page.setUserAgent(userAgent);

    return page;
  }

  changeUserAgent() {
    this.userAgent = this.getRandomAgent();
  }

  getRandomAgent() {
    return USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length) - 1];
  }

  closeInstance() {
    this.instance.close();
  }

  async getPageSourceHtml(url: string): Promise<string | undefined> {
    const page = await this.getPage();
    let pageSource = "";

    try {
      await page.goto(url, { waitUntil: "networkidle0" });

      pageSource = await page.content();
    } catch (error) {
      const errorMessage = `Error fetching page ${url}: ${error.message}`;
      console.log(`${pc.red("!!!:")} ${errorMessage}`);
    } finally {
      page.close();
    }

    return pageSource;
  }
}

const simppeteer = new Simppeteer();

export default simppeteer;
