# AAO Long Practice: Intro to React Forms

For this project, I have created a user registration form using React.  Please note, I had no knowledge of UseContext at the time of finising this project.

https://my.appacademy.io/lessons/react-forms-project/8d38cfd5/practices/long-practice-intro-to-react-forms/1ce0737a

## The Input Fields
- Name
- Email
- Phone number
- Phone type: Home, Work, or Mobile (dropdown menu)
- Staff: Instructor or Student (radio buttons)
- Bio (text area)
- Sign up for email notifications (checkbox)
- On submit, the form should validate the input in each field and either inform the user of any errors or, if the input has no errors, send the data off as JSON. (Since there is no backend, the form has correctly captured the input by printing the form data with console.log() instead.)

## Validations
- Name must be present
- Email must be present and should be properly formatted
- Phone number should be properly formatted
- Phone type should be selected if a phone number is present
- Bio should have a character limit of 280 characters
- The name and bio field can be validated in vanilla JS but validating email and phone numbers is a bit more complex.
- The form should block submission and display a descriptive error message whenever validations fail.

## Bonus
- Store the time of submission as another key-value pair in the JSON object you console.log.  Hint: Use Date
- Disable the phoneType dropdown menu if the Phone field is empty
- Add a placeholder to show the proper format for inputting a phone number
- On submit, make sure the phoneType is blank in your JSON object if no phone is given (even if there is a phoneType selected)
- Highlight fields that fail validation in red
- Associate each error message with its field on the form instead of printing them all at the top
- Render errors without shifting the form fields up or down.  Hint: Reserve space for the error messages even when they are not present
- After a user has submitted a form with errors, validate the updates on keystroke instead of waiting for submit so the errors clear as soon as they are fixed
- If you have accomplished all of the above, your Form component has likely grown quite large. It also probably has some repeated lines of code. Remember that shorter, more modular code that does not repeat itself is easier to understand and maintain. With that in mind, refactor your code to clean up your Form component! In particular, look to see if any code blocks could be refactored into their own React components.
- Suggestion: Consider rendering each input type (text, select, textarea, radio, checkbox) as a React component. To help keep your code manageable and modularized, define each new component in its own file.
- Try adding the validations to their respective input components. (You will need to create separate validation functions for each field.)
- Add CSS styling

## Create React App Template

A no-frills template from which to create React applications with
[Create React App](https://github.com/facebook/create-react-app).

```sh
npx create-react-app my-app --template @appacademy/simple --use-npm
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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
