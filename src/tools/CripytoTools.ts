import { compare, hash } from "bcryptjs";

class CripytoTools
{
    public async Cripytor(payload: string)
    {
        return (await hash(payload, 10));
    }

    public async Decode(payload: string, password: string)
    {
        var authorizated = (await compare(payload, password))
        if(authorizated) return true;
        return false;
    }
}

export default new CripytoTools();