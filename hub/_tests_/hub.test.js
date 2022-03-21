'use strict';

const events = require('../../events');

let data={
    "store": 'Amazon',
    "orderId": '99999',
    "customer": 'name',
    "address": 'address',
}
let consoleSpy;
describe('test store',()=>{
  

    beforeAll(()=>{
        consoleSpy = jest.spyOn(console,'log').mockImplementation();
    });
    afterAll(()=>{
        consoleSpy.mockRestore();
    });

    it('test pickup event',()=>{
        events.emit('pickUp',data);
        consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    });
    it('test delivered event',()=>{
        events.emit('delivered',data);
        consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    });
    it('test in-transit event',()=>{
        events.emit('in-transit',data);
        consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    });
})