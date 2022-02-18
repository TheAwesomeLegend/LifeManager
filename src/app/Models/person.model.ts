export class Person {
  constructor(
    public profilePictureUrl: string,
    public firstName: string,
    public lastName: string,
    public phoneNumber: string,
    public emailAddress: string,
    public AddressLine1: string,
    public AddressLine2: string,
    public AddressCity: string,
    public AddressProvice: string,
    public AddressPostalCode: string,
    public relationship: string,
    public relationshipRating: number
  ) {}
}
