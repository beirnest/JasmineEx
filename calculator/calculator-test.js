
it('should calculate the monthly rate correctly', function () {
  expect(Math.trunc(calculateMonthlyPayment({amount: 200000, years: 15, rate: 6}))).toBeCloseTo(1687)
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount: 200000, years: 15, rate: 6})).toBeCloseTo(1687.71)
});

/// etc
