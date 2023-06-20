const shortId = require('shortid');
const ShortURL = require('../models/shotURLModel');

exports.encurtarURL = async (req, res) => {
  const { fullURL } = req.body;

  try {
    let url = await ShortURL.findOne({ full: fullURL });

    if (url) {
      res.json(url);
    } else {
      const short = shortId.generate();
      url = new ShortURL({ full: fullURL, short });
      await url.save();
      res.json(url);
    }
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao encurtar a URL.' });
  }
};

exports.redirecionarURL = async (req, res) => {
  const { shortURL } = req.params;

  try {
    const url = await ShortURL.findOne({ short: shortURL });

    if (url) {
      res.redirect(url.full);
    } else {
      res.status(404).json({ error: 'URL não encontrada.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao redirecionar a URL.' });
  }
};
