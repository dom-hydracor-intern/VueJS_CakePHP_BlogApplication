var userData = {
    "email":"fetch@user.com",
    "password":"password123"
};


const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEzLCJpYXQiOnsiZGF0ZSI6IjIwMjEtMDUtMTggMTc6MzU6MjguNDcwMTYwIiwidGltZXpvbmVfdHlwZSI6MywidGltZXpvbmUiOiJVVEMifSwiZXhwIjoxNjIxNzA0OTI4fQ.li0p7X4O8q3ElU1QvCVfsbBYLYiBVf8xSkDXGg0GDH0';


//get token

fetch('http://206.189.202.188:2593/api/users/token', {
    method: 'GET',
    headers:{
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`
      }
  })
    .then(response => {
        if (response.ok) {
            response.json().then(json => { console.log(json);
            });
        }
    });


// write JSON object for an article { id:, title, body, category_id}


/*

// use token to add article

let newArticle = {
    id: "",
    title: "",
    body: "",
    categpry_id: "",
    created: "",
    modified: ""
}


const getArticles = () => {
    fetch('http://206.189.202.188:2593/articles/add', {
    method: 'POST',
    headers: {
        "Accept": "application/json",
        "Authorization": "token ${token}", 
        "Content-Type": "application/json"
      },
    body: JSON.stringify(newArticle),
  });
};


// use token to delete article


fetch('http://206.189.202.188:2593/api/articles/add', {
    method: 'POST',
    headers: {
        "Accept": "application/json",
        "Authorization": "token ${token}", 
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


 use token to view article

fetch('http://206.189.202.188:2593/articles', {
    method: 'GET',
    headers: {
        "Accept": "application/json"
      },
    body: JSON.stringify(newArticle),
  })

*/

// use token to view article



