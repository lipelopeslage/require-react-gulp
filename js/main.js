requirejs.config({
	baseUrl: "js",
	paths: {
		index: 'sections/index',
		about: 'sections/about',
		contact: 'sections/contact',
		indexComponent: 'components/js/IndexComponent',
		aboutComponent: 'components/js/AboutComponent',
		contactComponent: 'components/js/ContactComponent'
	}
});


require(["index"]);