import { MathService } from './math';

describe("Math Service", () => {
    let svc;

    beforeEach(function () {
        svc = new MathService();
    });

    //Red Green Refactoring
    // simple,unit,fast,independent
    describe("Add()", () => {
        it("should add two numbers", () => {
            //Arrange
            var result = svc.add(20, 30); //Act
            expect(result).toBe(50); //Assert
        });

        it("should return zero when first parameter is zero", () => {
            let result = svc.add(0, 100);
            expect(result).toBe(0);
        });

        it("should return -1 when second parameter is zero", () => {
            let result = svc.add(100, -1);
            expect(result).toBe(-1);
        });
    });

    describe("Sub()", () => {
        it("should subtract two numbers", () => {
            var result = svc.sub(30, 20);
            expect(result).toBe(10);
        });
    });


    afterEach(function () {
        svc = null;
    });
});