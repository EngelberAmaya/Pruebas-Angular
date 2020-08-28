import { usuarioIngresado } from './booleanos';

describe('Pruebas de Booleanos', () =>{

	it('Debe de regresar true',() => {

		const resp = usuarioIngresado();

		expect(resp).toBeTruthy();

	})


});