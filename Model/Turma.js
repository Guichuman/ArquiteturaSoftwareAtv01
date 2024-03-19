class Turma{

    constructor(codigo, nota){
        this.codigo = codigo
        this.nota = nota
    }
    
    aprovado(nota){
        if(nota >= 6){
            return true
        }else{
            return false
        }
    }
}