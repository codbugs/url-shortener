export default (req, res) => {
    const shortenId = req.query.shortenId;

    res.statusCode = 200;
    res.json({ id: shortenId });
  }
  