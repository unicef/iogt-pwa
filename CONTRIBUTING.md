# Contributing to IOGT-PWA

Interested in contributing to IOGT-PWA? Thanks! There are plenty of ways you can help.

Thank you for helping us make this project great and being a part of the IOGT-PWA community. Here are a few guidelines that will help you along the way.

## Code of Conduct

IOGT-PWA has adopted the [Contributor Covenant](https://www.contributor-covenant.org/) as its Code of Conduct, and we expect project participants to adhere to it.
Please read [the full text](/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## What you need to know

In order to contribute you will need to have a basic understanding of [Drupal](https://www.drupal.org/documentation), [React](https://reactjs.org/docs/getting-started.html), and [JavaScript](https://www.javascript.com/resources). 
IoGT-PWA uses Drupal as the CMS and web services API provider, and React to to provide UX enhancements as well as PWA functionality.

## Issue tracking

IoGT-PWA uses GitHub’s tracker called [Issues](https://github.com/unicef/iogt-pwa/issues) to keep track of tasks, enhancements, and bugs as well as manage collaboration better for the project. A typical issue looks like this:
* A **title** and **description** describe what the issue is all about.
* Color-coded labels help you categorize and filter your issues (just like labels in email).
* A **milestone** acts like a container for issues. This is useful for associating a group of issues with specific features or time period (e.g. Weekly Sprint 9/7-7/20 or PWA 1.0). 
* One **assignee** is responsible for working on the issue at any given time.
* **Comments** allow anyone with access to the repository to provide feedback.

## Setting Up a Local Copy

1. Clone the repo with `git clone https://github.com/unicef/iogt-pwa.git`

2. Run `npm install` in the root `iogt-pwa` folder.

Once it is done, you can modify any file locally and run `npm start`, `npm test` or `npm run build`.

### Coding style

Please follow the coding style of the project. IOGT-PWA uses prettier and eslint, so if possible, enable linting in your editor to get real-time feedback.

- `npm prettier` reformats the code.
- `npm lint` runs manually the linting rules.

Finally, when you submit a Pull Request, they are run again by our continuous integration tools, but hopefully, your code is already clean!
## Submitting a Pull Request

Good pull requests, such as patches, improvements, and new features, are a fantastic help. They should remain focused in scope and avoid containing unrelated commits.

Please **ask first** if somebody else is already working on this or the core developers think your feature is in-scope for IOGT-PWA. Generally always have a related issue with discussions for whatever you are including.


## Continous Integration
We use [CircleCI](https://circleci.com/) for continuous integration to automatically run unit & integration tests and create releases for IoGT-PWA.

## License

By contributing your code to the unicef/iogt-pwa GitHub repository, you agree to license your contribution under the GNU Affero General Public License.



