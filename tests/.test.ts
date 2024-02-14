import Store from '../src/store';

describe('Store', () => {
  let myStore: Store;

  beforeEach(() => {
    myStore = new Store('Takeaway', 50000, ['pizza', 'beef', 'salad', 'pork', 'burger']);
  });

  it('should buy a product', () => {
    myStore.storeBuyProduct('chicken', 2.50);
    expect(myStore.budget).toBe(49997.5);
    expect(myStore.inventory).toEqual(['pizza', 'beef', 'salad', 'pork', 'burger', 'chicken']);
  });

  it('should sell a product', () => {
    myStore.storeSellProduct('pizza', 10.00);
    expect(myStore.budget).toBe(50010);
    expect(myStore.inventory).toEqual(['beef', 'salad', 'pork', 'burger']);
  });

  it('should print the budget of the store', () => {
    const result = myStore.printBudget();
    expect(result).toBe('The budget of the store is: 50000');
  });
});