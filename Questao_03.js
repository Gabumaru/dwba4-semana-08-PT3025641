const alunos = [
  { nome: "João da Silva", nota1: 7, nota2: 8.5 },
  { nome: "Maria de Souza", nota1: 9, nota2: 7.5 },
  { nome: "Carlos Pereira", nota1: 6, nota2: 8 }
];

alunos.forEach(aluno => {
  let nota1Peso = aluno.nota1 * 0.6;
  let nota2Peso = aluno.nota2 * 0.4;
  let notaTotal = nota1Peso + nota2Peso;
  alert(`Aluno: ${aluno.nome}\nNota 1: ${aluno.nota1}\nNota 2: ${aluno.nota2}`);
  alert(`Nota Total: ${notaTotal}`);
});