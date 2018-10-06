## Prepare & start

```sh
git clone https://github.com/dkarmalita/template-react.git
npx ./scripts/app-init.sh
npm run dev # in-browser
npm start # in-electron
# npx ./scripts/app-clean.sh
```

### two-steps manual run 
(is useful to get cleare why electron is not started on `npm run start`)
```sh
npx webpack-dev-server --mode=development 
npx wait-on http://localhost:3000 && npx electron .
```

## Featured packages

* react@^16.5.2,
* webpack@4, 
* babel@7
* sass (scss) support
* jest@^23.6.0

## References

based on: https://getstream.io/blog/takeaways-on-building-a-react-based-app-with-electron/
