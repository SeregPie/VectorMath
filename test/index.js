let units = require('./units/index');

(() => {
	for (let unit of units) {
		unit();
	}
})();
