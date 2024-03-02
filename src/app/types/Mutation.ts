type Mutation = {
  createLink(category: String, description: String, imageUrl: String, title: String, url: String): Link
  deleteLink(id: number): Link
  updateLink(category: String, description: String, id: String, imageUrl: String, title: String, url: String): Link
}
