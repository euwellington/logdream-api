import script from './scripts/UsuarioScript';
import util from 'util';
import { connection } from '../database';
import { Usuario } from '../interface/UsuarioInterface';

class UsuarioRepository
{

    query: any;

    constructor()
    {
        this.query = util.promisify(connection.query).bind(connection);
    }

    public async Login()
    {
        try {
            let retorno = await this.query(script.SelectBase());
            return retorno as Usuario[];
        } catch (err: any) {
            throw new Error(err.message)
        }
    }

    public async Listar()
    {
        try {
            let retorno = await this.query(script.SelectBase());
            return retorno as Usuario[];
        } catch (err: any) {
            throw new Error(err.message)
        }
    }

    public async ListarUsuariosPorEquipamentoId(equipamentoId: string)
    {
        try {
            let retorno = await this.query(script.ListarUsuariosPorEquipamentoId(equipamentoId));
            return retorno as Usuario[];
        } catch (err: any) {
            throw new Error(err.message)
        }
    }

    public async Cadastrar(usuario: Usuario)
    {
        try {
            let retorno = await this.query(script.CadastrarUsuario(usuario));
            if(retorno) 
            {
                return usuario;
            }
        } catch (err: any) {
            throw new Error(err.message)
        }
    }

    public async SelecionarUsuarioPorId(usuarioId: string)
    {
        try {
            let retorno = await this.query(script.SelecionarUsuarioPorId(usuarioId));
            return retorno;
        } catch (err: any) {
            throw new Error(err.message)
        }
    }

    public async Atualizar(usuario: Usuario)
    {
        try {
            let retorno = await this.query(script.AtualizarUsuario(usuario));
            return retorno;
        } catch (err: any) {
            throw new Error(err.message)
        }
    }

    public async Deletar(usuarioId: string)
    {
        try {
            let retorno = await this.query(script.DeletarUsuario(usuarioId));
            return retorno;
        } catch (err: any) {
            throw new Error(err.message)
        }
    }

}

export default new UsuarioRepository();