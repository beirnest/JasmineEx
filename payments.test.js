describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = 50;
      tipAmtInput.value = 5;
    });
  
    it('check to ensure that paymentId increases correctly', function() {
        submitPaymentInfo();
        expect(paymentId).toEqual(1);
    });

    it('check to ensure that object is populated correctly', function() {
        expect(createCurPayment()).toEqual({billAmt: "50", tipAmt: "5", tipPercent: 10});
    });
  
    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
    });
  });