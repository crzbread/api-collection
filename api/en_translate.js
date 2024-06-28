const translate = require("@iamtraction/google-translate");

module.exports = async (req, res) => {
  const text = req.query.text || "";
  let result = "";
  await translate(text, { to: "en" })
    .then((res) => {
      result = res.text;
    })
    .catch((err) => {
      res.status(500).send(err);
    });
  // await res.status(200).send(req.query.text + " => " + result);
  await res.status(200).json({ translation: result });
};
