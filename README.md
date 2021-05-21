# [react-d3-electron](https://thibaudcolas.github.io/react-d3-electron/)

> :chart_with_downwards_trend::chart_with_upwards_trend: An example of using React with D3, Lunr.js and an autocomplete UI to build an accessible keyboard-centric search experience. Also – service workers for offline caching, and desktop app with Electron. [Demo](https://thibaudcolas.github.io/react-d3-electron/)

[![Screenshot](screenshot.png)](https://thibaudcolas.github.io/react-d3-electron/)

Head over to the [Releases](https://github.com/thibaudcolas/react-d3-electron/releases) to download the desktop version.

## Installation

> You first need to clone the project on your computer, and to install [Node](https://nodejs.org). This project also uses [nvm](https://github.com/creationix/nvm).

From the command-line:

```sh
cd ~/Development/sites/
git clone git@github.com:thibaudcolas/react-d3-electron.git
cd react-d3-electron
```

To install our dependencies:

```sh
nvm install
# Then, install all project dependencies.
yarn install
# Install the git hooks.
./.githooks/deploy
```

## Working on the project

> Everything mentioned in the installation process should already be done.

```sh
# Start the server and the development tools.
yarn run start
# Runs tests.
yarn run test
```

## Documentation

* Datasets taken from [https://github.com/vincentarelbundock/Rdatasets](https://github.com/vincentarelbundock/Rdatasets).
* Icon made with 📈 and 📉 from [Emoji One](http://emojione.com/).

This project relies on a modified version of `react-autosuggest` so that the suggestions are always displayed.
