import { ProductService } from "./product.service";
import { Observable } from "rxjs/Observable";


describe("Product Service", () => {

    let svc: ProductService;
    let http;

    beforeEach(() => {
        http = jasmine.createSpyObj(["get"]);
        let obs = new Observable(o => o.next(10));
        http.get = jasmine.createSpy("get").and.returnValue(obs);
        svc = new ProductService(http);
    });

    it("should call get of http", () => {
        svc.getById(10);

        expect(http.get).toHaveBeenCalledWith('https://express-api.herokuapp.com/api/products/10');
    });

    it("should call get of http", () => {
        let obs = svc.getById(10);

        expect(obs).toBeDefined();
    });
})