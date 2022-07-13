import awilix from 'awilix';

const container = awilix.createContainer({
	injectionMode: awilix.InjectionMode.PROXY,
});

//Use cases
container.register();

//Controllers
container.register();

//Repositories
container.register();

export default container;
