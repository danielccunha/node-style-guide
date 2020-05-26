const users = [{ name: "Daniel", role: "Developer" }];

class UserController {
  async index(request, response) {
    return response.json(users);
  }
}

module.exports = new UserController();
