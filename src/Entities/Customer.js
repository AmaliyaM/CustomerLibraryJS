import Person from './Person'

export default class Customer extends Person {
  constructor({
    firstName,
    lastName,
    addresses,
    phoneNumber,
    email,
    notes,
    totalPurchasesAmount,
    lastPurchaseDate,
  }) {
    super(firstName, lastName)
    this.FirstName = firstName
    this.LastName = lastName
    this.Addresses = addresses
    this.PhoneNumber = phoneNumber
    this.Email = email
    this.Notes = notes
    this.TotalPurchasesAmount = totalPurchasesAmount
    this.LastPurchaseDate = lastPurchaseDate
  }
}
