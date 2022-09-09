import * as customerErrorList from '../Errors/CustomerErrorList'

export default function validateCustomer(customer) {
  const errorList = []
  const borderDate = new Date('2020-01-01')
  const phoneNumberRule = /.+[1-9]{11}/gm
  const emailRule = /([a-z]|[0-9])+@([a-z]|[0-9])+\.[a-z]+/gm
  if (customer.FirstName?.length > 50) {
    errorList.push(customerErrorList.FirstNameError)
  }
  if (customer.LastName?.length > 50) {
    errorList.push(customerErrorList.LastNameErrorLength)
  }
  if (!customer.LastName) {
    errorList.push(customerErrorList.LastNameExsistanceError)
  }
  if (!customer.Addresses.length) errorList.push(customerErrorList.AddressError)
  if (!phoneNumberRule.test(customer.PhoneNumberError)) {
    errorList.push(customerErrorList.PhoneNumberError)
  }
  if (!emailRule.test(customer.Email)) errorList.push(customerErrorList.EmailError)
  if (!customer.Notes.length) errorList.push(customerErrorList.NotesLengthError)
  if (customer.TotalPurchasesAmount < 0) errorList.push(customerErrorList.PurchaseError)
  if (customer.LastPurchaseDate < borderDate) {
    errorList.push(customerErrorList.LastPurchaseDateError)
  }
  return errorList
}
