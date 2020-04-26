# nuxt-ssr-firebase

To demonstrate nuxt js can deploy by using firebase hosting and firebase functions

## Package Installation

```bash
yarn setup
```

## Start app on local

```bash
yarn dev
```

## Build app package

```bash
yarn build
```

## Firebase deployment

1. Install firebase cli globally on your machine using npm command and set up your firebase project on the web console:
In detail: https://firebase.google.com/docs/cli?authuser=0#install_the_firebase_cli

```bash
npm install -g firebase-tools
```

2. List your current firebase projects

```bash
firebase projects:list
```

3. Select your firebase project

```bash
firebase use <Your_Project_ID>
```

4. Test serving firebase hosting and function on your local

```bash
yarn serve
```

5. Deploy app to your firebase

```bash
yarn deploy
```

6. You can test to access your app on your firebase domain: https://<Your_Project_ID>.firebaseapp.com/

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)