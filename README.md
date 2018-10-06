```sh
git clone https://github.com/dkarmalita/template-react.git
npx ./scripts/app-init.sh
# npx ./scripts/app-clean.sh
```

* react@^16.5.2,
* webpack@4, 
* babel@7
* sass (scss) support
* jest@^23.6.0

npx webpack-dev-server --mode=development 
npx wait-on http://localhost:3000 && npx electron .