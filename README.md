# JS-Mini-Store

## Submission Instructions [Please note]

## Maximum Marks - 15

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ should be able to make the fetch request on page loads  2 marks
 ✅ should be able to fetch and append ten items to the DOM - 2 marks
 ✅ should be able to add items to the cart and the cart count in the navbar should be updated 2mark
 ✅ should be able to add items to the local storage - 2 marks
 ✅ check if previous and next buttons are working and prev button should be disabled on the first page and the next should be disabled on the last page -2 marks
 ✅ check if added items are reflected on the cart page - 2 mark
 ✅ check remove functionality is working - 1 mark
 ✅ Checkout page should work properly and get the alert - 1 mark
```

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path
- Run **npm install** to install the node modules

## Folder structure

- index.html
- cart.html
- src
  - scripts
    - index.js
    - cart.js
- styles
  - index.css
  - cart.css
- README.md
- package.json
- cypress (ignore the files under cypress)

### You haven't taught cypress to run the test cases locally , you can see the passed/ failed test cases and test errors on CP itself.

## Description

#### Problem

- Create a Mini Store where users can add the item to their cart and checkout.

#### Description

- On page loads make a fetch request to `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=10&page=1`
- the default page is `1` and the limit is 10 per page
- On index.html(Home Page), the user will be able to see a list of items with `add to cart` option.
- Maximum 10 items will be shown per page (**Implement Pagination**).
- There will be two buttons previous and next, to navigate between pages.
- The `previous` button should be disabled on page 1 and the next button should be disabled on the last page.
- on clicking the previous button decrement the current page by 1 and make a fetch request with the new page number and get the details.
- on clicking the next button increment the current page by 1 and make a fetch request and get the details.

- Navbar will have a link to the home page and cart page.
- It will also show the number of items added to the cart.
- the cart count is 0 by default.
- Both the home page and cart page will have the same navbar with the same functionality.
- Store the items added to the cart in the `local-storage` with the key as **cart**.
- The cart page will show the items added to the cart, with an option to remove them.
- On removing any item the item should be removed from local storage as well and the total count of cart items in the navbar should also update.

### Check out

- Checkout should have two input fields for name and address with
- one button with text as checkout
- On clicking the button get the alert with the following message.

```
{name}, your order is successful!
```

#### Things to follow :-

1.  Navbar

- The cart link should have `id = "cart"`
- The home or index page link should have `id = home`
- Cart count should have a div with `id = cart_count`

2.  Home page (index.html)

- The previous button should have an `id ="previous"`
- Next button should have an `id ="next"`
- All the items will be appended inside a parent `div` with an `id ="main_items"`
- Each item should be displayed as cards and the should have a `class ="item"`
- Add to cart button should have a `class = "add_to_cart"`

![](https://i.imgur.com/bCRPVr2.png)

3.  Cart Page (cart.html)

- All the cart items will be appended inside `div` with `id = "items"`
- Item card will have `class = "item"`
- Remove button will have `class ="remove"`

  ### checkout
- Name and Address input fields should have `id = "name"` and `id ="address"` respectively.
- The checkout button should have `id = "checkout"` and text `checkout`
  ![](https://i.imgur.com/MHoX0Mx.png)
- use the styles folder to style for index and cart pages

#### API:-

- https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=10&page=1
- Change the page number to implement pagination.

## Note:-

#### Strictly follow the template. Cross-check HTML Id's and classes.

#### Focus more on the functionality of your app. Avoid spending more time styling. You can do that once you finish the end-to-end flow of app. All the best!

**Note:- Do not use any other names for the methods other than those mentioned.**

####

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time
