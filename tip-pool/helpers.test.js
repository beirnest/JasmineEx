describe("Helpers test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      allPayments = {payment0: {billAmt: 20, tipAmt: 5}, payment1: {billAmt: 20, tipAmt: 5}, payment2: {billAmt: 20, tipAmt: 5}};
    });
  
    it('should check to make sure tipAmt is calculatored correctly', function() {
        expect(sumPaymentTotal('tipAmt')).toEqual(15);
    });

    it('should check to make sure tipPercent is calculated correctly', function(){
        expect(calculateTipPercent(allPayments.payment0.billAmt, allPayments.payment0.tipAmt)).toEqual(25);
    })
  
    afterEach(function() {
      allPayments = {};
    });
  });