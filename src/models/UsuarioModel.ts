import { UsuarioEntities } from './entites/Usuario';
import UsuarioRepository from '../repository/UsuarioRepository';
import { compare, hash } from 'bcryptjs';
import { v4 } from 'uuid';
import jwt from 'jsonwebtoken';
import { SECRET } from '../env';
import { Usuario, UsuarioRequest } from '../interface/UsuarioInterface';
import { converterDataHora } from '../utils/masks';

var UsuarioModel = {} as UsuarioEntities;

UsuarioModel.login = async (email: string, senha: string) =>
{
    try {
        const retorno = await UsuarioRepository.Login();
        let user = retorno.find((usr) => usr.email === email);
        if(user && (await compare(senha, user.senha)))
        {
            const token = jwt.sign(
                { user: user },
                SECRET.token
            );
            return token;
        }
        throw 'Usuário náo encontrado!'
    } catch (err: any) {
        throw err.message;
    }
}

UsuarioModel.getAll = async () =>
{
    try {
        const retorno = await UsuarioRepository.Listar();
        return retorno;
    } catch (err: any) {
        throw err.message;
    }
}

UsuarioModel.getByPk = async (usuarioId: string): Promise<Usuario> =>
{
    try {     
        const retorno = await UsuarioRepository.SelecionarUsuarioPorId(usuarioId);
        return retorno;
    } catch (err: any) {
        throw err.message;
    }
}

UsuarioModel.getByEquipamentoFk = async (equipamentoId: string): Promise<Usuario[]> =>
{
    try {     
        const retorno = await UsuarioRepository.ListarUsuariosPorEquipamentoId(equipamentoId);
        return retorno;
    } catch (err: any) {
        throw err.message;
    }
}

UsuarioModel.create = async (usuario: Usuario) =>
{
    try {
        let generetePassword = await hash(usuario.senha, 5);
        let newUser: UsuarioRequest = 
        {
            id: v4(),
            equipamentoId: usuario.equipamentoId,
            nome: usuario.nome,
            cpf: usuario.cpf.replace(/[^0-9]/g, ''),
            email: usuario.email,
            nascimento: usuario.nascimento,
            senha: generetePassword,
            dataCadastro: converterDataHora(new Date())
        }        
        const retorno = await UsuarioRepository.Cadastrar(newUser as Usuario);
        return retorno;
    } catch (err: any) {
        throw err.message;
    }
}

UsuarioModel.update = async (usuario: Usuario) =>
{
    try {
        let genereteNewPassword = await hash(usuario.senha, 5);
        let updateUser: UsuarioRequest = 
        {
            id: usuario.id,
            nome: usuario.nome,
            cpf: usuario.cpf.replace(/[^0-9]/g, ''),
            email: usuario.email,
            nascimento: usuario.nascimento,
            senha: genereteNewPassword
        }        
        const retorno = await UsuarioRepository.Atualizar(updateUser as Usuario);
        return retorno;
    } catch (err: any) {
        throw err.message;
    }
}

UsuarioModel.delete = async (usuarioId: string) =>
{
    try {     
        const retorno = await UsuarioRepository.Deletar(usuarioId);
        return retorno;
    } catch (err: any) {
        throw err.message;
    }
}

export default UsuarioModel;