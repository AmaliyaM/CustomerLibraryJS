import * as addressErrorList from '../Errors/AddressErrorList'

export default function validateAddress(address) {
  const errorList = []
  if (address.FirstLine?.length > 100) {
    errorList.push(addressErrorList.FirstAddressLineLengthError)
  }
  if (!address.FirstLine) errorList.push(addressErrorList.FirstAddressLineError)
  if (address.SecondLine.length > 100) {
    errorList.push(addressErrorList.SecondAddressLineLengthError)
  }
  if (address.Type !== 1 || address.Type !== 2) {
    errorList.push(addressErrorList.AddressTypeFormatError)
  }
  if (address.City.length > 50) errorList.push(addressErrorList.CityLengthError)
  if (!address.City.length) errorList.push(addressErrorList.CityExsistanceError)
  if (!address.PostalCode) errorList.push(addressErrorList.PostalCodeExsistanceError)
  if (address.PostalCode.length > 6) errorList.push(addressErrorList.PostalCodeError)
  if (!address.State) errorList.push(addressErrorList.StateExsistanceError)
  if (address.State.length > 50) errorList.push(addressErrorList.StateError)
  if (address.Country !== 'Canada' && address.Country !== 'United States') errorList.push(addressErrorList.CountryFormatLength)
  if (!address.Country) errorList.push(addressErrorList.CountryExsistanceError)
  return errorList
}
