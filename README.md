# Getting Started with Create React App

## Desktop and Android releases

Push a version tag such as `v1.1.0` to build and attach Windows installers,
Linux AppImage/DEB packages, and an installable Android APK to the GitHub
release. The Android APK is a debug-signed build intended for direct testing
and installation; publishing on Google Play should use a separately
configured release signing key.

There is no iOS project or App Store build in the repository yet. iOS builds
require a Mac with Xcode; App Store/TestFlight distribution also requires an
Apple Developer account and signing credentials. Once those are available,
add Capacitor's iOS platform and configure signing in the macOS release
workflow. In the meantime, iPhone and iPad users can open https://stuxia.com
in Safari and choose Share > Add to Home Screen to install the web app without
the App Store; this is the website, not a native iOS app.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## News feeds

The built-in news feeds use the Vercel function in `api/news-feed.js` to fetch
and convert feeds server-side, returning up to 10 items per source. Deploy the
app to Vercel for the built-in feeds to work; static-only deployments do not
run this function.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---

---

## Ліцензія / License

### Українською

Код «Стихії» відкритий за ліцензією **[GNU AGPL-3.0](LICENSE)**.

- ✅ Код можна вільно використовувати, змінювати й поширювати.
- 🔓 **Ваш проєкт теж має лишатися відкритим.** Якщо ви використовуєте цей код, похідний проєкт треба відкрити за AGPL-3.0, навіть якщо це лише сайт чи сервіс, а не програма для завантаження.
- ✅ Зберігайте файли `LICENSE` і `NOTICE` та посилання на цей репозиторій.
- ❌ Назва **«Стихія» / Stuxia**, логотип та індики **Кейт** і **Доміно** під ліцензію **не підпадають**, усі права на них застережено. У форках їх треба прибрати або замінити.
- 🖼️ **Медіафайли інших авторів.** Частина зображень, музики та артів (наприклад, з Pixabay і Unsplash, обкладинки треків, фан-арти) створена не мною й належить їхнім авторам. Я не претендую на права на них. Якщо ви автор і хочете, щоб авторство вказали інакше або файл прибрали, напишіть мені.

🙏 **Прохання:** будь ласка, напишіть мені, якщо використовуєте мої розробки. Це не обов'язок, але мені буде дуже приємно знати. Відкрийте [issue на GitHub](https://github.com/TheTurkeyProgramist/stuxia/issues) або напишіть на пошту **theturkeystudio@gmail.com**.

Деталі: [LICENSE](LICENSE) (повний текст), [NOTICE](NOTICE) (застережені матеріали та сторонні компоненти).

### English

Stuxia's code is open source under the **[GNU AGPL-3.0](LICENSE)**.

- ✅ You may freely use, modify and distribute the code.
- 🔓 **Your project must stay open too.** If you use this code, your derived project must also be released under AGPL-3.0, even if it is only a website or online service.
- ✅ Keep the `LICENSE` and `NOTICE` files and a link to this repository.
- ❌ The **Stuxia / «Стихія»** name, logo and the turkeys **Kate** and **Domino** are **not** covered by the license. All rights to them are reserved, and forks must remove or replace them.
- 🖼️ **Third-party media.** Some images, music and artwork (for example from Pixabay and Unsplash, track covers, fan art) were not made by me and belong to their respective owners. I don't claim ownership of them. If you're the owner and want them credited differently or removed, please contact me.

🙏 **A request:** please let me know if you use my work. It's not required, but I'd love to hear about it. Open a [GitHub issue](https://github.com/TheTurkeyProgramist/stuxia/issues) or email **theturkeystudio@gmail.com**.

Details: [LICENSE](LICENSE) (full text), [NOTICE](NOTICE) (reserved materials and third-party components).
