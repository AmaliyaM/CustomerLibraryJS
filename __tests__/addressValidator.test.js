import Address from '../src/Entities/Address'
import validateAddress from '../src/Validators/AddressValidator'
import * as addressErrorList from '../src/Errors/AddressErrorList'

const address = new Address({
  firstLine: null,
  secondLine:
    'gahdaaaaqqqqqqqqqqqqfghthtdrgxgsefsefsefaefaewfaewfawefwaefaewfagahdaaaaqqqqqqqqqqqwsedrftgyhujikolpvb',
  type: 'dvds',
  city: 'gahdaaaaqqqqqqqqqqqqfghthtdrgxgsefsefsefaefaewfaewfawefwaefaewfagahdaaaaqqqqqqqqqqqw',
  postalCode: '1111111111',
  state: 'gahdaaaaqqqqqqqqqqqqfghthtdrgxgsefsefsefaefaewfaewfawefwaefaewfagahdaaaaqqqqqqqqqqqw',
  country: 'NotCanada',
})

describe('validate address', () => {
  it('empty first line', () => {
    expect(validateAddress(address)).toContain(
      addressErrorList.FirstAddressLineError,
    )
  })
  it('wrong length of second line', () => {
    expect(validateAddress(address)).toContain(
      addressErrorList.SecondAddressLineLengthError,
    )
  })

  it('wrong type', () => {
    expect(validateAddress(address)).toContain(
      addressErrorList.AddressTypeFormatError,
    )
  })

  it('too long city', () => {
    expect(validateAddress(address)).toContain(
      addressErrorList.CityLengthError,
    )
  })

  it('too long postal code', () => {
    expect(validateAddress(address)).toContain(
      addressErrorList.PostalCodeError,
    )
  })

  it('too long state ', () => {
    expect(validateAddress(address)).toContain(
      addressErrorList.StateError,
    )
  })

  it('wrong country', () => {
    expect(validateAddress(address)).toContain(
      addressErrorList.CountryFormatLength,
    )
  })
})
