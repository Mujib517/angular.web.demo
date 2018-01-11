// import { browser, element, by } from 'protractor';

// describe("Home Page", () => {

//     browser.get('/');

//     it('should have title "Angular.Web.Demo"', () => {
//         expect(browser.getTitle()).toBe("Angular.Web.Demo");
//     });

//     it("should have home page heading", () => {
//         let headings = element.all(by.css("h1"));
//         let h1 = headings.get(0);
//         expect(h1.getText()).toBe("Home Page");
//     });

//     it('should navigate to about page when i click on about link', () => {
//         let link = element(by.css('a[href="/about"]'));
//         link.click();
//         expect(browser.getCurrentUrl()).toBe("http://localhost:49152/about");
//     });

//     it("should have heading with content 'About Page'", () => {
//         let headings = element.all(by.css("h1"));
//         let h1 = headings.get(0);
//         //let h2 = headings.get(1);
//         expect(h1.getText()).toBe("About Page");
//         //expect(h2.getText()).toBe('100');
//     });
// });