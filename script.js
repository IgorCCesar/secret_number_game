// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

const calculateImc = (weight, height) => {
  const imc = weight / (height * height);
  const result = imc.toFixed()
  return result;
};

//console.log(calculateImc(92, 1.79));

// Calculo Fatorial

function factorialize(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}

//console.log(factorialize(5));

// Arrays

const liguagensDeProgramacao = ['javascript', 'c', 'c++', 'kotlin', 'python']
console.log(liguagensDeProgramacao)

liguagensDeProgramacao.push('java', 'ruby', 'golang')
console.log(liguagensDeProgramacao)

console.log(liguagensDeProgramacao[0])
console.log(liguagensDeProgramacao[liguagensDeProgramacao.length - 1])