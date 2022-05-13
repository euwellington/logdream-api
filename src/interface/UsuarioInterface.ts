export interface Usuario
{
    id: string;
    nome: string;
    equipamentoId: string;
    cpf: string;
    email: string;
    nascimento: Date;
    senha: string;
    dataCadastro: Date;
};

export interface UsuarioRequest extends Partial<Usuario> {};