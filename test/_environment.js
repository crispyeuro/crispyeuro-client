import * as fs from 'fs';

import { Builder } from 'selenium-webdriver';

export default async function createTest(testFileName) {
    const test = (await import('ava')).default;

    const coverage_reports = [];

    test.before(async t => {
        t.context.driver = new Builder().forBrowser('firefox').build();
        const NYC_DIR = '.nyc_output';
        if (!fs.existsSync(NYC_DIR)) {
            fs.rmdirSync(NYC_DIR)
            fs.mkdirSync(NYC_DIR);
        }
    });

    test.after(async t => {
        await t.context.driver.quit();
        coverage_reports.forEach((report, index) => {
            fs.writeFileSync(`.nyc_output/${testFileName}_coverage_${index}.json`, JSON.stringify(report));
        });
    });

    test.afterEach(async t => {
        const coverage = await t.context.driver.executeScript('return window.__coverage__;');
        coverage_reports.push(coverage);
    });

    return test;
}
