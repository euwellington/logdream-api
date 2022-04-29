export interface Usuario
{
    id: string;
    nome: string;
    equipamentoId: string;
    cpf: string;
    email: string;
    nascimento: Date;
    senha: string;
    dataCadastro: string;
};

export interface UsuarioRequest extends Partial<Usuario> {};