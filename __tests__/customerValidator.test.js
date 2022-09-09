import Customer from '../src/Entities/Customer'
import validateCustomer from '../src/Validators/CustomerValidator'
import * as customerErrorList from '../src/Errors/CustomerErrorList'

const customer = new Customer({
  firstName:
    'gahdaaaaqqqqqqqqqqqqfghthtdrgxgsefsefsefaefaewfaewfawefwaefaewfagahdaaaaqqqqqqqqqq',
  lastName: null,
  addresses: [],
  phoneNumber: '+111111',
  email: 'alejcm',
  notes: [],
  totalPurchasesAmount: -6,
  lastPurchaseDate: new Date('2000-11-05'),
})

describe('validate customer', () => {
  it('wrong length of first name', () => {
    expect(validateCustomer(customer)).toContain(
      customerErrorList.FirstNameError,
    )
  })

  it('empty last name', () => {
    expect(validateCustomer(customer)).toContain(
      customerErrorList.LastNameExsistanceError,
    )
  })

  it('empty address', () => {
    expect(validateCustomer(customer)).toContain(customerErrorList.AddressError)
  })

  it('wrong phone number', () => {
    expect(validateCustomer(customer)).toContain(
      customerErrorList.PhoneNumberError,
    )
  })

  it('wrong email ', () => {
    expect(validateCustomer(customer)).toContain(customerErrorList.EmailError)
  })

  it('empty notes ', () => {
    expect(validateCustomer(customer)).toContain(
      customerErrorList.NotesLengthError,
    )
  })

  it('invalid totalPurchasesAmount ', () => {
    expect(validateCustomer(customer)).toContain(
      customerErrorList.PurchaseError,
    )
  })

  it('low lastPurchaseDate ', () => {
    expect(validateCustomer(customer)).toContain(
      customerErrorList.LastPurchaseDateError,
    )
  })
})
