export interface Endereco
{
    id: string;
    equipamentoId: string;
    estado: string;
    cidade: string;
    endereco: string;
    bairro: string;
    obs: string;
};

export interface EnderecoRequest extends Partial<Endereco> {};