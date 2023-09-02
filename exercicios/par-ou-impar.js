const usersChoice = process.argv[2]
const usersNumber = parseInt(process.argv[3])
const pcsChoice = Math.floor(Math.random() * 20)

const numbersSum = usersNumber + pcsChoice

if (usersChoice === 'par' && numbersSum %2 === 0){
console.log(`Parabéns, você ganhou o par ou impar, o resultado da soma é ${numbersSum}` );
} else {
    console.log(`Não foi dessa vez, você perdeu no par ou impar, o resultado da soma é ${numbersSum}`);
}
