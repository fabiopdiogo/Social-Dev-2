import Joi from 'joi'

import createHandler from '../../../lib/midddlewares/readConnect'

import validate from '../../../lib/midddlewares/validation'

import { login } from '../../../modules/user/user.service'

const loginSchema = Joi.object({
  userOrEmail: Joi.string().required(),
  password: Joi.string().required()
})

const handler = createHandler()

handler.post(validate({ body: loginSchema }), async  (req, res) => {
  try{
    const user = await login(req.body)
    res.send(user)
  }catch (err){
    console.error(err)
    throw err
  }
})

export default handler