import Game from '../models/game';

// Get all games sorted by postDate
const getGames = (req, res) => {
  Game.find(null, null, { sort: { postDate: 1 } }, (err, games) => {
    if (err) {
      res.send(err);
    }
    res.json(games); // Games sent as json
  })
}

// Get a single game filtered by ID
const getGame = (req, res) => {
  const { id } = req.params;
  Game.findById(id, (err, game) => {
    if (err) {
      res.send(err);
    }
    res.json(game);
  });
}

// Get body data and create a new Game
const postGame = (req, res) => {
  let game = Object.assign(new Game(), req.body);
  game.save(err => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'game created' }); // Simple answer to give the client
  });
}

const deleteGame = (req, res) => {
  Game.remove({
    _id: req.params.id
  }, (err) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'successfully deleted' });
  });
}

export { getGames, getGame, postGame, deleteGame };