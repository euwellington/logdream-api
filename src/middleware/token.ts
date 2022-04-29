import { Response, Request, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { SECRET } from '../env';

function verifyJWT(req: Request, res: Response, next: NextFunction){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  
    // if (token == null) return res.status(401).json({message: 'Você não tem autorização pra acessar essa rota!'})
  
    // jwt.verify(token, SECRET.token, (err: any, user: any) => {
    //   console.log(err)
  
    //   if (err) return res.status(403);
  
    //   req.user = user
  
    //   next()
    // })
      next()

}

export { verifyJWT };