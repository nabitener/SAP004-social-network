// importamos as funções que iremos testar
import { welcome, errorMessage } from '../public/pages/login/data.js';
import { greeting } from '../public/pages/home/data.js';

describe('welcome', () => {
  it('Deveria retornar "Bem-vindo na_bitener@hotmail.com! Que bom ver você aqui!" quando passado "na_bitener@hotmail.com" como parêmetros', () => {
    const message = 'Bem-vindo na_bitener@hotmail.com! Que bom ver você aqui!';
    expect(welcome('na_bitener@hotmail.com')).toEqual(message);
  });
});

describe('errorMessage', () => {
  it('Deveria retornar "Falha: The password is invalid or the user does not have a password." quando passado "The password is invalid or the user does not have a password." como parêmetros', () => {
    const message = 'Falha: The password is invalid or the user does not have a password.';
    expect(errorMessage('The password is invalid or the user does not have a password.')).toEqual(message);
  });
});

describe('Greeting', () => {
  it('Deveria retornar "Oi Maria! Que bom ver você aqui!" quando passado "Maria" como parâmetros', () => {
    const message = 'Oi Maria! Que bom ver você aqui!';
    expect(greeting('Maria')).toEqual(message);
  });
});
