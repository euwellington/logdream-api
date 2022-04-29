import { servers } from './servers';
import { basciInfo } from './basicInfo';
import { Endpoints } from './endpoints';
import { Components } from './components';

let docs = 
{
    ...servers,
    ...basciInfo,
    ...Endpoints,
    ...Components
}

export { 
    docs
}