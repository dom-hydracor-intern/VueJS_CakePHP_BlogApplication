var userData = {
    "email":"fetch@user.com",
    "password":"password123"
};


var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEzLCJpYXQiOnsiZGF0ZSI6IjIwMjEtMDUtMTggMTc6MzU6MjguNDcwMTYwIiwidGltZXpvbmVfdHlwZSI6MywidGltZXpvbmUiOiJVVEMifSwiZXhwIjoxNjIxNzA0OTI4fQ.li0p7X4O8q3ElU1QvCVfsbBYLYiBVf8xSkDXGg0GDH0';

/*
//get token
let token;

fetch('http://206.189.202.188:2593/api/users/token', {
    method: 'GET',
    headers:{
        "Accept": "application/json"
      }
  }) .then(
    function(u) { return u.json();}
  ) .then(
      function(json) {
          token = json;
      }
  );
*/

// get token

fetch('http://206.189.202.188:2593/api/users/token')
      .then(response => response.json())
      .then(token => console.log(token))

// get articles

fetch('http://206.189.202.188:2593/api/articles/index')
      .then(response => response.json())
      .then(data => console.log(data))

// add article

fetch('http://206.189.202.188:2593/api/articles/add', {
    method: 'POST',
    headers: {
        "Accept": "application/json",
        "Authorization": `token ${token}`, 
     "Content-Type": "application/json"
      },
    body: JSON.stringify(newArticle),
  })
  .then(response => {
    if (response.ok) {
        response.json().then(json => { console.log(json);
        });
    }
});


/* delete article -- include w form so request can have correct id

fetch('http://206.189.202.188:2593/api/articles/delete?id=')
      .then(response => response.json())
      .then(data => console.log(data))
*/