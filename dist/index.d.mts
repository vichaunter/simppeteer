import * as puppeteer from 'puppeteer';

declare class Simppeteer {
    private instance;
    private userAgent;
    constructor();
    private init;
    getPage(): Promise<puppeteer.Page>;
    changeUserAgent(): void;
    getRandomAgent(): string;
    closeInstance(): void;
    getPageSourceHtml(url: string): Promise<string | undefined>;
}
declare const simppeteer: Simppeteer;

export { simppeteer as default };
