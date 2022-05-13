import { compare, hash } from "bcryptjs";
import jwt from 'jsonwebtoken';
import { SECRET } from "../env";
import { Usuario } from "../interface/UsuarioInterface";

class TokenTools
{
    public async Token(payload: Usuario)
    {
        const token = jwt.sign(
            { user: payload },
            SECRET.token
        );
        return token;
    }
}

export default new TokenTools();