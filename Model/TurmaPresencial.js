const frequenciaTotal = 70
class TurmaPresencial extends Turma{

    constructor(codigo, nota, frequencia){
        super(codigo, nota)
        this.frequencia = frequencia
    }
    aprovado(nota, frequencia){
        if(nota >= 6 && (frequenciaTotal/frequencia) < 1.33){
            return true;
        }else{
            return false
        }
    
    }
}