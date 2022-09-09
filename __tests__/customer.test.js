import Customer from '../src/Entities/Customer'
import Address from '../src/Entities/Address'

const address = new Address({
  firstLine: 'gahd',
  secondLine: 'sae',
  type: 2,
  city: 'ghsg',
  postalCode: '123456',
  state: 'hdnd',
  country: 'Canada',
})
const customer = new Customer({
  firstName: 'John',
  lastName: 'Smith',
  addresses: [address],
  phoneNumber: '+11111111111',
  email: 'alej@gmail.com',
  notes: ['dvfsr'],
  totalPurchasesAmount: 45.6,
  lastPurchaseDate: new Date('2021-11-05'),
})

describe('right customer', () => {
  it('create customer', () => {
    expect(customer).toBeDefined()
  })
  it('create customer address field', () => {
    expect(customer.Addresses[0]).toBeDefined()
  })
})
