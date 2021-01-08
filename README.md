<p align="center">
   <img alt="INB" title="Instituto Nicolas Bueno" src="https://secureservercdn.net/50.62.89.138/072.751.myftpupload.com/wp-content/uploads/2017/04/inb-logo.png">
</p>

<h2 align="center">
  Technical logic test
</h2>
The idea is to build a really simple competition webpage that encourages people to spread the news about carbon compensations. Users arrive at the page and sign up a form. After a successful sign up, they get a point for the competition. At this moment they have an option to share the sign up link. Each successful sign up referred via the link will give extra competition points to the original link poster. There is no limit to the number of points a person can get. At the end of the competition, the 10 people with the most points win.


## Requirements

* The sign up form consists of a name, email and phone numbers;
* When the form is submitted, the user gets a point and will be directed to a page with an option to share the special link;
* When people arrive to the competition page via the special link, the original poster will get an extra point;
* After the competition is over, generate a table of the winners;
* You can use any language, framework or technology you want;


## :information_source: How to start
1. Before start, we should install the dependencies - Client:

```
$ cd client
$ yarn 

or

$ cd client
$ npm install
```

2. Before start, we should install the dependencies - Server:

```
$ cd server
$ yarn 

or 

$ cd server
$ npm install
```


3. start - server: 

```
$ cd server
$ yarn start

or 

$ cd server
$ npm start
```

4. start - client: 

```
$ cd server
$ yarn start

or 

$ cd server
$ npm start
```

## :information_source: Endpoints - Client

### `/` Form
### `/winners` winning users

## :information_source: Endpoints - Server

### POST `/users`
This method must receive a new user and insert it in a database to be consumed by the API itself.

```json
body
{
   "name": "joedyson",
   "email": "joedysonbezerra@gmail.com",
   "telefone": "5587991646569",
}
```

### GET `/users`
This method should return winning users


### GET `/share/:id`
This method should  add +1 point to the user


## :wrench: Technologies

-  [Node.js](https://nodejs.org/en/)
-  [React.js](https://reactjs.org/)
-  [Axios](https://github.com/axios/axios)
-  [Styled Components](https://styled-components.com/)
-  [Mongoose](https://mongoosejs.com/)
-  [VS Code][vc]

---

Made with ♥ by Joédyson Bezerra :wave: [Get in touch!](https://www.linkedin.com/in/joedyson-bezerra/)

[vc]: https://code.visualstudio.com/
