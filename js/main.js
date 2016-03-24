requirejs.config({
	baseUrl: "js",
	paths: {
		index: 'sections/index',
		about: 'sections/about',
		contact: 'sections/contact',
		indexComponent: 'components/js/indexComponent',
		aboutComponent: 'components/js/aboutComponent',
		contactComponent: 'components/js/contactComponent'
	}
});


require(["index"]);