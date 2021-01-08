import User from '../models/user';

class UsersController {
  async index(req, res, next) {
    try {
      const users = await User.find().sort({ point: -1 }).limit(10);
      return res.json(users);
    } catch (error) {
      return next(error);
    }
  }
  async store(req, res, next) {
    try {
      const { name, email, telefone } = req.body;
      req.body.point = 1;

      if (!name) return res.json({ error: 'NAME_UNINFORMED' });
      if (!email) return res.json({ error: 'EMAIL_UNINFORMED' });
      if (!telefone) return res.json({ error: 'TELEFONE_UNINFORMED' });

      const newUser = await User.create(req.body);
      return res.json({
        newUser,
        url: `http://localhost:3334/share/${newUser._id}`,
      });
    } catch (error) {
      return next(error);
    }
  }
  async update(req, res, next) {
    try {
      const { id } = req.params;
      if (!id) return res.json({ error: 'id uninformed' });
      const user = await User.findOne({ _id: id });

      await User.findOneAndUpdate(
        { _id: id },
        { point: user.point + 1 },
        {
          new: true,
        }
      );
      return res.send('Ponto adicionado !');
    } catch (error) {
      return next(error);
    }
  }
}

export default new UsersController();
