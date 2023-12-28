"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const picocolors_1 = __importDefault(require("picocolors"));
const puppeteer_extra_1 = __importDefault(require("puppeteer-extra"));
const puppeteer_extra_plugin_stealth_1 = __importDefault(require("puppeteer-extra-plugin-stealth"));
const system_locale_1 = __importDefault(require("system-locale"));
const userAgents_1 = require("./userAgents");
class Simppeteer {
    instance;
    userAgent;
    constructor() {
        process.env.MODE === "services" && this.init();
    }
    async init() {
        if (!this.instance) {
            this.changeUserAgent();
            const locale = await (0, system_locale_1.default)();
            puppeteer_extra_1.default.use((0, puppeteer_extra_plugin_stealth_1.default)());
            this.instance = await puppeteer_extra_1.default.launch({
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
        return userAgents_1.USER_AGENTS[Math.floor(Math.random() * userAgents_1.USER_AGENTS.length) - 1];
    }
    closeInstance() {
        this.instance.close();
    }
    async getPageSourceHtml(url) {
        const page = await this.getPage();
        let pageSource = "";
        try {
            await page.goto(url, { waitUntil: "networkidle0" });
            pageSource = await page.content();
        }
        catch (error) {
            const errorMessage = `Error fetching page ${url}: ${error.message}`;
            console.log(`${picocolors_1.default.red("!!!:")} ${errorMessage}`);
        }
        finally {
            page.close();
        }
        return pageSource;
    }
}
const simppeteer = new Simppeteer();
exports.default = simppeteer;
