class TestController {
  async test(req, res) {
    res.status(200).json({ message: "Test" });
  }
}   


module.exports = new TestController;