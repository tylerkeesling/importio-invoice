## import.io tech challenge

The requirements were to utilize React, Redux, Webpack, and ES6/ES7 JS to build an invoice component that updated in real-time, add items, delete items, and edit items.

[Deployed site](http://tylerkeesling.xyz).\
To run locally, use `npm start`.

### Technologies/libraries used
- React
- Redux
- Prop Types
- Classnames (the library)
- React-number-format
- CircleCi
- AWS S3
- AWS Route 53

### Afterthoughts
**Money in JavaScript.**\
In hindsight, I would've started out using a currency library to handle all aspects of money. JavaScript likes floating point math that likes extra decimals. Also, not strictly typing numbers string or an integer was not ideal. There were some moments where I didn't know what type I was going to get. Also, trying to mask the input field for currency was kind of funky, but I didn't want to spend too much time on the formatting (I did).

**Redux added a lot more code.**\
Using Redux in a project this size is basically half the project. That is a given though. But at least I was able to use some patterns I am familiar with which helped organize folder structure.

**Using a CI/CD pipeline.**\
In this project, I set up the pipeline via CircleCi to deploy to a AWS S3 bucket using one of my domain names from Route 53. This was actually my first time setting up a CI/CD pipeline to do continuous deployment. This was moreso done for my own curiosity and I learned a lot. Excuse my excessive, do-nothing commits.

**Reusable components.**\
I spent a lot of time trying to make components reusuable, utilizing patterns I have learned over the last year. The NumberInput component ended up doing a lot more work than I initially intended. In retrospect, I would've made it own do one thing, "input field of type currency", and not handle currency as text.\
Also, there could've been a discussion on whether the the entire thing was *one* component or not. I made two, the invoice table and the totals table for the sake demonstrating components interacting with the Redux store..

**CSS needs work.**\
My design work could definitely improve. My CSS isn't beautiful and I know that is an area I lack in.

**Testing**\
I was experimenting a lot and for the lack of time, it wasn't a focus unfortunately.

### Limitations
- `Quantity` is limited to 3 digts. I didn't want the form to get overloaded too many numbers *everywhere.*
- When the numbers get too big, the formatting doesn't quite adjust work. I wasn't sure where to stop and it could've been a talking point.
- The `New Item` button/row is not the same as the mock up. I was too far in (timewise) to readjust my approach. I wasn't sure how it was supposed to behave, but didn't come across that question until Friday evening. What I would've done differently was to make a component with the fields (item, qty, etc) that had local state and when the user hit 'enter' or a submit button that would appear, it would then persist it to the store and clear the component.
- There is no validation on the fields. Typically, I would have liked to use something like Formik or Redux Forms in conjunction with a library like Yup. Bringing in those libraries would be like bringing a bazooka to a fist fight (especially redux forms).
- It's not responsive. I do not advise opening on mobile.

### Contributions
- Tyler Keesling
