# Simppeteer: Seamless and Stealthy Web Automation

## Description

Simppeteer is a lightweight and easy-to-use TypeScript library that simplifies and enhances web automation using Puppeteer. It provides a straightforward API for interacting with web pages, extracting data, and performing various tasks, all while maintaining optimal stealthiness. Whether you're a seasoned developer or a curious newcomer, Simppeteer empowers you to effortlessly gather data from various web sources, all while maintaining an undetectable presence.

## Capabilities

Simppeteer offers a comprehensive set of features for web automation:

- **Effortless Data Extraction:** Simppeteer streamlines the process of extracting data from web pages, eliminating the complexities often associated with Puppeteer. With its straightforward API and intuitive methods, Simppeteer allows you to programmatically retrieve data from various elements, including text, images, and even dynamic content.

- **Unparalleled Stealthiness:** Maintain a low profile and evade detection with Simppeteer's stealth-enhancing features. It intelligently utilizes various techniques, such as randomizing user agents and emulating real user behavior, to ensure your automated interactions go unnoticed. This empowers you to collect data discreetly, even from websites that are wary of automated scripts.

- **Versatility beyond Data Extraction:** Simppeteer's versatility extends beyond data extraction. It enables you to perform a wide range of web automation tasks, from scraping product listings to conducting price comparisons. Whether you're a data analyst, e-commerce enthusiast, or web scraper connoisseur, Simppeteer is your go-to tool for simplifying and enhancing your web automation workflow.

## How to Use

Simppeteer is designed to be extremely easy to use, with a simple API. Here's a quick overview of how to get started:

1. **Install Simppeteer**

   ```bash
   yarn add simppeteer
   ```

2. **Import Simppeteer**

   ```ts
   import simppeteer from "simppeteer";
   ```

3. **Get sorurce of any page:**

   ```ts
   const source = await simppeteer.getPageSourceHtml(
     `http://yoururl.to/getsource`
   );
   ```

4. **Refresh the user agent**

   As the user agent is cached, you can refresh it calling the proper function when you want a new one.

   ```ts
   simppeteer.changeUserAgent();
   ```

## Contributing

If you have any feedback or want to contribute to Simppeteer, please feel free to open an issue or pull request on GitHub:

[GitHub Project Link]

We appreciate your contributions to making Simppeteer even more powerful and user-friendly.

## License

Simppeteer is licensed under the Attribution-NonCommercial-ShareAlike 4.0 International License. For more information, see the LICENSE file.

## Thank You

Thank you for using Simppeteer! We hope it helps you streamline your web automation tasks and achieve your goals.
