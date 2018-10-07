## Prepare & start

```sh
git clone https://github.com/dkarmalita/template-react.git
npx ./scripts/app-init.sh
npm run dev # in-browser
npm start # in-electron
# npx ./scripts/app-clean.sh
# npx ./scripts/commit-all.sh
```

## Scripts

`dev` - start webpack-dev-server for in-browser development (localhost:3000)

`start` - start electron application in developmant mode

`pack` - ...

`dist` - ...

`test` - run jest

## Featured packages

* react@16.5.2,
* electron@3.0.2
* electron-builder@20.28.4
* webpack@4, 
* babel@7
* node-sass@4.9.3
* jest@23.6.0

## Useful commands

### clean-commit-push-install

```sh
npx ./scripts/app-clean.sh && git add -A && git commit -m [Progress] && git push && npx ./scripts/app-init.sh
```

### two-steps manual run

It's useful to get cleare why electron is not started on `npm run start`
```sh
npx webpack-dev-server --mode=development 
npx wait-on http://localhost:3000 && npx electron .
```

## References

based on: https://getstream.io/blog/takeaways-on-building-a-react-based-app-with-electron/
