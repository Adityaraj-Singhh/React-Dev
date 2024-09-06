    import React from "react"; //importing react from node_modules
    import ReactDOM from "react-dom/client"; //importing react-dom from node_modules

    // const heading = React.createElement("h1",{id:"heading"},"Hello from React Self"); //This empty object is to give attributes to a class. //Here third argument is the children.
    // const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(heading); //It takes the object -> Creates the h1 tag which the browsers understands -> put that under the root element written just above.

    // console.log(heading); //we get a object -> react element

    /**
     * <div id="parent">
     *      <div id="child">
     *          <h1></h1>
     *      </div>
     *      <div id="child" >
     *          <h1></h1>
     *      </div>
     * </div>
     * 
     * 
     */

    const parent = React.createElement(
        "div",
        {id:"parent"}, //If we need to create two children, we again need to create an array of child
        [ React.createElement("div",{id:"child"},[  //If we need siblings, we need to create array of siblings
            React.createElement("h1",{},"I am h1 tag, Nested div applied"),
            React.createElement("h2",{},"I am h2 tag, Sibling created, BOOOOM"),
        ]), 
        React.createElement("div",{id:"child2"},[  //If we need siblings, we need to create array of siblings
            React.createElement("h1",{},"I am h1 tag, Nested div applied"),
            React.createElement("h2",{},"I am h2 tag, Sibling created"),
        ])]
        );


    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);
    console.log(parent); //we get a object -> react element -> While rendering into DOM it converts to HTML -> Becomes HTML(Browser understands)

//These React code looks very comples, thats why we have JSX.

//npm is a package manager which doesen't have any full from.

//*package.json is configration for npm

//There are two types of dependencies an app can have.
//1. Dev Dependency -> Required in development(-D) phase. Example: npm install -D parcel
//2. Normal Dependency -> These are used in productions.

//"parcel": "^2.12.0"/ "~2.12.0" here ^ or ~ means, when there is a upgrade in the parcel package, it wil automaticall gets upgraded.
//But ^(Caret) means, it will not get upgraded if the upgrade is breaking the code.(Minor Upgrade)
//~(tilde) means, it to upgrade to the major upgraded version, which may break the code, that's why it is prefarable to use ^ over ~.

//package-lock.json contains the exact version of the package installed. It keeps track of all the exact versions of dependencies.
//package.json gets upgraded

//node_modules are like database, it contains the actual data of dependencies that project needs.
//parcel as an dependency can have there own dependencies and those dependensies have there own dependies -> This is known as Transitive Dependensies.(That's why we have so much files and folders in node_modules)

//It is not important to push node_modules to github as it is bulky and it can be regerated by using the package and package-lock file -> npm install  

//npm -> installing a package, npx -> executing a package

//CDN links are not good way of bringing React into our projects beacause in cdn we need to make network call to unpkg.com and better we can have it in our node_modules.
//And, the version of react will always be changing, so every time we will have to change the cdn link.
//So, alike other dependencies managing react in npm will be much easier.

//Parcel features -> Parcel is a beast -> Read dociumentation for detail explanation.
//1. Dev Build
//2. Builds Local Server
//3. HMR -> Hot Module Replacement(Automatially refreshes the page and update the content)->{Hot Reloading}
//4. It does HMR as it has File watching Algorithm, written in c++.
//5. Parcel also does caching -> Fater build, as we re run the code(npx parcel index.html) it reduces the time.
//6. Parcel also does the image optimization of the images in the app.
//7. If we make create a production build -> I will minify our file also -> minification.
//8. Bundling
//9. Compressing
//10. Consistent Hashing
//11. Code Splitting
//12. Differential Bundling -> Support older browsers.
//13. Error Handling
//14. Diagonostics -> Beautiful Errors
//15. Tree Shaking -> Remove unused code
//16. We can also run on HTTPs
//17. It creates different dev and production bundles.

//It we want to run in production mode:
//npx parcel build index.html ->Only doing this will throw an error
//"main": "App.js", we need to remove this from package.json as npm starts considering this as teh entry point, but we want index.html as entry point.
//dev or production, when we execute both, file is made in dist folder and then executed.(parcel minimizes, compresses and performs all other features to the code)

//dist and parcel-cache are temorary files, if we delete it gets recreated when to create production or dev.

//If we want to run our program in older browsers
// We add the below in package.json file
//"browserslist": [ //parcel takes care of this along with browserslist
//     "last 2 versions", ->Max coverage
//     "last 10 firefox versions"
// ]
