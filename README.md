# React E-commerce cart

## Submission Instructions [Please note]

## Maximum Marks - 16

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ Able to submit the app - 1 mark ( minimum score )
 ✅ Should have only get products button visible - 1 mark
 ✅ Should make GET request to API endpoint /products - 2 marks
 ✅ Products container should be visible and the get products button should not - 1 mark
 ✅ Cart should be visible with the correct message - 1 marks
 ✅ Correct products information should be visible in the dom - 3 marks
 ✅ Quantity should be updated in the dom when product is added to cart - 1 mark
 ✅ If quantity goes to zero then the button should have the text Out of Stock - 1 mark
 ✅ Out of Stock buttons should be disabled - 1 mark
 ✅ Table should have correct information related to products and quantity - 3 marks
 ✅ Total price should be calculated correctly and visible in the table - 1 mark
```

## Installation

- Use node version 16.16.0
- please make sure you do not push package-lock.json

- Download and unzip the boilerplate file and then copy the "**contents**" of the unzipped file in the Masai Folder.
- Navigate to the Masai Folder, in VS Code.
- Run the following commands inside,
  - `npm install --engine-strict`
  - `npm start`
  - `npm run server` -> to start the json-server
- **_Note_**:

1. Make sure that the json-server is up and running at port `8080`
2. Create a .env file. Include `REACT_APP_JSON_SERVER_PORT=8080` in it and restart the react server
3. Use `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}` as the json-server url where ever you use `http://localhost:8080`

### Not following the above instructions will lead your test cases to fail

## Problem

**_Note_**: Make sure you start `json-server` on `8080` port with provided `db.json` file, then only you will be able to fetch data on this website.

## Understanding Component Structure

- App.jsx

- Components
  - CartComponent.jsx
  - Products.jsx
  - ProductCard.jsx

## Products.jsx

- create a button `Get Products`
- on clicking the button make an API request to "/products" and map data inside Products.jsx
- once the data is fetched button should be removed and products and cart should be visible (use Conditional rendering)

<img width="1719" alt="Screenshot 2022-11-25 at 12 05 27 PM" src="https://user-images.githubusercontent.com/103956933/225884140-985c6db3-61f6-43f0-917a-3dabcd0d5a93.png">

## ProductCard.jsx

- show name, price, and available quantity information in given elements
- if quantity is zero then show button text `Out of Stock` else `Add to cart`
- if the product is out of stock then the button should be in the `disabled` state
- onClicking add to cart button add product to the cart with quantity
- if button is clicked multiple times product should not added multiple times only update quantity in same
- update product available quantity locally do not make any api request

<img width="1719" alt="Screenshot 2022-11-25 at 12 05 27 PM" src="https://user-images.githubusercontent.com/103956933/225884148-a59d9ea0-258b-434e-be9d-d2073e59c6fc.png">

## CartComponent.jsx

- if there is nothing in the cart then show the text `The cart is empty!`
- the basic structure of the table is given to show `name`, `quantity`, and `price` in the table
- write logic to calculate the total value of the cart
- fix cart total to two decimal points (hint: use toFixed())
<img width="1719" alt="Screenshot 2022-11-25 at 12 05 27 PM" src="https://user-images.githubusercontent.com/103956933/225884156-fba1476d-f886-4b56-b6d2-84c103eb6c13.png">

**Note** - `Make sure you use only the given components and don't create new files and folders. Changing the component name, and structures might result in giving you zero marks.`

## Understanding Data Structure

- [db.json](./db.json)
  - Initial Products should be fetched using json-server only after the application opens.

**Note** - `Make sure you use only the given data and do not create new data. Changing data might result in giving you zero marks`

## Features to build (use Fetch)

1. Create a react application for the e-commerce cart application

2. Use a mock json server to maintain the data of products

3. use fetch for getting data

## General Instructions (**_IMPORTANT_**)

1. Do not use Global CSS, instead use `<componentName>.module.css` convention for Css in that file.
2. Do Not Remove `data-testid="xxxx"` from anywhere, this is used by testing tools to test your code, and removal of this will lead to a low score.
3. Make sure you use only the given components and don't create new files and folders as changing component name, structures might result in giving you zero marks
4. Make sure you use only the given data and don't create new data, as changing data might result in giving you zero marks.

**Note** - This might not be all the things, you are free to use other components.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time
