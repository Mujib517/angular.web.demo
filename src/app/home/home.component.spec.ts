import { HomeComponent } from './home.component';

describe("Home Component", () => {

    let comp;
    let logger;

    beforeEach(() => {
        //fake mock
        logger = jasmine.createSpyObj(["warn"]);
        logger.warn = jasmine.createSpy("warn");

        comp = new HomeComponent(logger);
    });

    it("should have show set to true", () => {
        expect(comp.show).toBe(true);
    });

    it("should call warn method of logger service", () => {
        comp.ngOnInit();

        expect(logger.warn).toHaveBeenCalledWith("COmponent took long time to load");
    });

    afterEach(() => {
        comp = null;
    });

});