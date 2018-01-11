import { browser, by, element } from 'protractor';

fdescribe("Products Page", () => {

    browser.get('/products/new');

    it('should have button disabled', () => {

        let btn = element(by.css(".btn.btn-success"));
        expect(btn.isEnabled()).toBe(false);
    });

    it('should enable button when validation passes', () => {
        let brand = element(by.css('input[name="brand"]'));
        brand.sendKeys("Apple");
        let btn = element(by.css(".btn.btn-success"));
        expect(btn.isEnabled()).toBe(true);
    });

    it('should enable button when validation passes', () => {
        let brand = element(by.css('input[name="brand"]'));
        let model = element(by.css('input[name="model"]'));
        let price = element(by.css('input[name="price"]'));
        brand.sendKeys("Apple");
        model.sendKeys("Automated Test");
        price.sendKeys("2000");
        let btn = element(by.css(".btn.btn-success"));
        btn.click();

        expect(browser.getCurrentUrl()).toBe("http://localhost:49152/products");
    });

    // it('should navigate', () => {
    //     let link = element(by.css('a[href="/products"]'));
    //     link.click();
    //     browser.waitForAngular();
    //     expect(browser.getCurrentUrl()).toBe("http://localhost:49152/products");
    // });

    // it('should navigate to products page', () => {
    //     let products = element.all(by.css('well'));
    //     let first = products.get(0);
    //     let link = first.element(by.css("a"));
    //     link.click();
    //     browser.sleep(2000);

    //     let h1 = element(by.css("h1"));
    //     expect(h1.getText()).toBe("Product Detail");
    // });
});