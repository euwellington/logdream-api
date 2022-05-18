import UsuarioRepository from '../repository/UsuarioRepository';
import { Usuario } from '../interface/UsuarioInterface';
import TokenTools from '../tools/TokenTools';
import GenerateGuid from '../tools/GenerateGuid';
import CripytoTools from '../tools/CripytoTools';
import DateTimeTool from '../tools/DateTimeTool';

class UsuarioService
{

    public async Login(email: string, senha: string)
    {
        try {
            const retorno = await UsuarioRepository.Login();
            let user = retorno.find((usr) => usr.email === email);
            if(user && CripytoTools.Decode(senha, user.senha))
            {
                return TokenTools.Token(user);
            }
            throw 'Usuário náo encontrado!'
        } catch (err: any) {
            throw err.message;
        }
    }

    public async Listar()
    {
        try {
            const retorno = await UsuarioRepository.Listar();
            return retorno;
        } catch (err: any) {
            throw err.message;
        }
    }
        
    public async ListarPorEquipamento(equipamentoId: string)
    {
        try {     
            const retorno = await UsuarioRepository.ListarUsuariosPorEquipamentoId(equipamentoId);
            return retorno;
        } catch (err: any) {
            throw err.message;
        }
    }

    public async SelecionarPorId(usuarioId: string)
    {
        try {     
            const retorno = await UsuarioRepository.SelecionarUsuarioPorId(usuarioId);
            return retorno;
        } catch (err: any) {
            throw err.message;
        }
    }

    public async Cadastrar(usuario: Usuario)
    {
        try {      
            usuario.id = GenerateGuid.guid();
            usuario.cpf = usuario.cpf.replace(/[^0-9]/g, '');
            usuario.senha = (await CripytoTools.Cripytor(usuario.senha)).toString();
            usuario.dataCadastro = DateTimeTool.currentDateTime();
            const retorno = await UsuarioRepository.Cadastrar(usuario);
            return retorno;
        } catch (err: any) {
            throw err.message;
        }
    }

    public async Atualizar(usuario: Usuario)
    {
        try {     
            usuario.senha = (await CripytoTools.Cripytor(usuario.senha)).toString();
            const retorno = await UsuarioRepository.Atualizar(usuario);
            return retorno;
        } catch (err: any) {
            throw err.message;
        }
    }

    public async Deletar(usuarioId: string)
    {
        try {     
            const retorno = await UsuarioRepository.Deletar(usuarioId);
            return retorno;
        } catch (err: any) {
            throw err.message;
        }
    }

}

export default new UsuarioService();