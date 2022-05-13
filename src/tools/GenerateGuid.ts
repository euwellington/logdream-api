import { v4 } from 'uuid';

class GenerateGuid
{
    public guid()
    {
        return v4();
    }
}

export default new GenerateGuid();