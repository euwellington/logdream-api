import { Usuario } from "../../interface/UsuarioInterface";

export interface UsuarioEntities 
{
    login: (email: string, senha: string) => void;
    getAll: () => void;
    getByPk: (usuarioId: string) => void;
    getByEquipamentoFk: (equipamentoId: string) => void;
    create: (usuario: Usuario) => void;
    update: (usuario: Usuario) => void;
    delete: (usuarioId: string) => void;
}