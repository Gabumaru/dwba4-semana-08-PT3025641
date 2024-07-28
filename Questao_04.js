class Aluno {
  constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
      this.primeiroNome = primeiroNome;
      this.segundoNome = segundoNome;
      this.primeiraNota = primeiraNota;
      this.segundaNota = segundaNota;
  }

  nomeCompleto() {
      return `${this.primeiroNome} ${this.segundoNome}`;
  }

  media() {
      return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
  }

  situacao() {
      return this.media() > 6 ? "Aprovado" : "Reprovado";
  }
}

const alunos = [
  new Aluno("João", "da Silva", 7, 8.5),
  new Aluno("Maria", "de Souza", 9, 7.5),
  new Aluno("Carlos", "Pereira", 6, 8),
  new Aluno("Ana", "Costa", 5, 6.5),
  new Aluno("Pedro", "Almeida", 8, 9)
];

alunos.forEach(aluno => {
  alert(`Nome Completo: ${aluno.nomeCompleto()}\nMédia: ${aluno.media()}\nSituação: ${aluno.situacao()}`);
});