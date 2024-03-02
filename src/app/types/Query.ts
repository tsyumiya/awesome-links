type Query = {
  links: [Link]
  link(id: number): Link
  user(id: number): User
  users: [User]
}
