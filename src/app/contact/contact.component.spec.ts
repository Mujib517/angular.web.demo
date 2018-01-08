import { ContactComponent } from './contact.component';

describe("Contact Component", () => {
    let comp;

    beforeEach(() => {
        comp = new ContactComponent();
    });

    it("should have count defined", () => {
        expect(comp.count).toBeDefined();
    });

    it("should have count initialized to 10", () => {
        expect(comp.count).toBe(10);
    });

    it("should have counter undefined", () => {
        expect(comp.counter).toBeUndefined();
    });

    describe("Init()", () => {

        it("should increment count by 1", () => {
            comp.ngOnInit();
            expect(comp.count).toBe(11);
        });

        it("should set count to 100 when count is 11", () => {
            comp.count = 11;
            comp.ngOnInit();
            expect(comp.count).toBe(100);
        });
    });


    afterEach(() => {
        comp = null;
    });
});