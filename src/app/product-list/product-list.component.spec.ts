import { ProductListComponent } from './product-list.component';
import { Observable } from 'rxjs/Observable';

describe("Product List Component", () => {

    let comp;
    let activatedRoute;
    let svc;

    beforeEach(() => {

        activatedRoute = jasmine.createSpyObj(["snapshot"]);
        activatedRoute.snapshot = {
            data: {
                response: [1, 2, 3]
            }
        };

        let obs = new Observable(o => o.next(1));

        svc = jasmine.createSpyObj(["get"]);
        svc.get = jasmine.createSpy("get").and.returnValue(obs);
        comp = new ProductListComponent(svc, activatedRoute);
    });

    it("should have products undefined", () => {
        expect(comp.products).toBeUndefined();
    });

    it("Should get data from route snapshot", () => {
        comp.ngOnInit();

        expect(comp.products).toBeDefined();
    });


    it("Should set products information from route snapshot", () => {
        comp.ngOnInit();

        expect(comp.products).toEqual([1, 2, 3]);
    });

    describe("init", () => {

        it('should call get of product service', () => {
            comp.init();

            expect(svc.get).toHaveBeenCalled();
        });
    });

    afterEach(() => {
        comp = null;
    });
});