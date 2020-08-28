import { mensaje } from './string';


describe('Pruebas de strings', () =>{

	it('Debe de regresar un string',() => {

		const resp = mensaje('Engelber');

		expect( typeof resp).toBe('string');

	})

	// debe recibir algo

	it('Debe de retornar un saludo con el nombre enviado',() => {

		const nombre = 'Juan';
		const resp = mensaje(nombre);

		expect(resp).toContain('Saludos ' + nombre);

	})

}); // sirve para agrupar las pruebas


//it(); // una prueba en especifico
