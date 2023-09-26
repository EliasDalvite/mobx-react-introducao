import {makeObservable, observable, computed, action} from "mobx"

class MobxObj {
    usuarios = []
    id = 0
    nome = ""
    sobrenome = ""
    email = ""

    constructor() {
        makeObservable(this, {
            usuarios: observable,
            nome: observable,
            sobrenome: observable,
            email: observable,
            nomeCompleto: computed,
            cadastraUsuario: action,
            atualizaNome: action,
            atualizaSobrenome: action,
            atualizaEmail: action,
        })
    }

    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    }
    
    cadastraUsuario() {
        this.id++
        const novoUsuario = {
            "id": this.id,
            "nomeCompleto": this.nomeCompleto,
            "email": this.email
        }
        this.usuarios.push(novoUsuario)    
    }

    atualizaNome(nome) {
        this.nome = nome
    }

    atualizaSobrenome(sobrenome) {
        this.sobrenome = sobrenome
    }

    atualizaEmail(email) {
        this.email = email
    }    
}

export default new MobxObj