class AppController {
  static getHomepage(_, res) {
    res.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
