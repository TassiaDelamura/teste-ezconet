import { Guid } from "guid-typescript";

export class UsuarioModel {
    constructor(
        public nome: string,
        public dataNascimento: Date,
        public email: string,
        public senha: string,
        public sexo: string
    ) {
        this.id = Guid.create().toString();
        this.ativo = true;
    }

    public id: string;
    public ativo: boolean;
}
