import { getAllAPIAcionamento } from './getAll';
import { getByPkAPIAcionamento } from './getByPk';
import { getByFkEquipamentoAPIAcionamento } from './getByEquipamentoFk';
import { acionarAPIAcionamento } from './acionar';
import { postAPIAcionamento } from './post';
import { updateAPIAcionamento } from './update';
import { deleteAPIAcionamento} from './delete';


export { 
    getAllAPIAcionamento,
    getByPkAPIAcionamento,
    acionarAPIAcionamento,
    postAPIAcionamento,
    updateAPIAcionamento,
    deleteAPIAcionamento,
    getByFkEquipamentoAPIAcionamento
};