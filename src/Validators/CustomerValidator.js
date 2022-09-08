import * as customerErrorList from '../Errors/CustomerErrorList'

export default function validateCustomer(customer) {
  const errorList = []
  const borderDate = new Date('2020-01-01')
  const phoneNumberRule = '^+[1-9]d{1,14}$'
  const emailRule = '^([w.-]+)@([w-]+)((.(w){2,3})+)$'
  if (customer.FirstName.lenth > 50) {
    errorList.push(customerErrorList.FirstNameError)
  }
  if (customer.LastName.lenth > 50) {
    errorList.push(customerErrorList.LastNameErrorLength)
  }
  if (!customer.LastName) {
    errorList.push(customerErrorList.LastNameExsistanceError)
  }
  if (!customer.Addresses) errorList.push(customerErrorList.AddressError)
  if (!phoneNumberRule.test(customer.PhoneNumberError)) {
    errorList.push(customerErrorList.PhoneNumber)
  }
  if (!emailRule.test(customer.Email)) errorList.push(customerErrorList.EmailError)
  if (customer.Notes) errorList.push(customerErrorList.NotesLengthError)
  if (customer.TotalPurchasesAmount < 0) errorList.push(customerErrorList.PurchaseError)
  if (customer.LastPurchaseDate < borderDate) {
    errorList.push(customerErrorList.LastPurchaseDateError)
  }
  return errorList
}
