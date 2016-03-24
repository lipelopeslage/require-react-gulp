# Require+React+Gulp

##### Extensão do meu [outro repositório] (http://github.com/lipelopeslage/require-react), que permite a utilização de JSX fora de servidores nodeJS, graças à conversão de arquivos .jsx em .js via gulp.

Versões de módulos NPM utilizadas neste exemplo:

 * React-addons/React-DOM: ~0.14.7
 * RequireJS: 2.2.0

Outros pacotes utilizados:

 * Gulp
 * Gulp-react

Este exemplo, diferente [do anterior] (http://github.com/lipelopeslage/require-react) mostra como utilizar arquivos jsx compilados em js via gulp. Dessa maneira, não é mais necessário utilizar plugin [jsx-requirejs-plugin](https://github.com/philix/jsx-requirejs-plugin/).

###  [Clique aqui](http://lipelopeslage.com.br/jobs/github/require-react-gulp/) e veja o exemplo.


Os componentes ReactJS são escritos de acordo com o formato JSX.
Veja um exemplo de componente abaixo:

```javascript
var Component = React.createClass({
		render: function(){
			return (
				<div>
					Este é um componente React =)
				</div>
			);
		}
	});
	ReactDOM.render(
		<Component/>, document.querySelector('main')
	);
```

Nem todo servidor aceita arquivos do tipo .jsx, então se faz necessário a conversão deste tipo de arquivo em js para melhor interpretação do servidor.

Veja abaixo um exemplo de arquivo gulpfile.js, que busca os arquivos .jsx do meu projeto e os compila em arquivos .js:
```javascript
var gulp = require('gulp');
var react = require('gulp-react');
 
gulp.task('default', function () {
	return gulp.src('js/components/*.jsx')//src('js/**/*.jsx')
		.pipe(react())
		.pipe(gulp.dest('js/components/js'));
});
```

Desta maneira, na hora da definição dos módulos, deve-se apontar os arquivos compilados (.js), e na hora de carregá-los via require(), eliminar o prefixo 'jsx!' antes dos módulos.

Para testar seus componentes React, vá ao terminal e digite 'gulp'. Este comando executará o script dentro do arquivo gulpfile.js, que buscará os arquivos .jsx e os enviarão - convertidos em .js - para um diretório de sua escolha.


### Referências:

* [npm](https://www.npmjs.com/) para dependências (package.json)
* [require.js](http://requirejs.org/docs/download.html) para carregar os módulos
* [react](https://facebook.github.io/react/) para criação de componentes em JSX
* [gulp-react](https://www.npmjs.com/package/gulp-react/) torna possível a compilação de arquivos JSX para serem lidos via requirejs