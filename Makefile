setup: install
install: 
	npm install
lint:
	npx eslint .

lint-fix:
	npx eslint . --fix