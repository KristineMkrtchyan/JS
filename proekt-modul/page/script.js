
isLogined();

let form = document.forms['login'];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  login({
    email: form['email'].value,
    password: form['password'].value,
  })
})


function login(value) {
  let req = new XMLHttpRequest();
  req.open('POST', 'https://reqres.in/api/login');
  req.setRequestHeader('Content-type', 'application/json');
  req.send(JSON.stringify(value));
  req.onreadystatechange = function() {
      if (req.readyState === 4 && req.status === 200) {
          localStorage.setItem('token', JSON.parse(req.responseText).token);
          isLogined();
      }
  }
}

function isLogined() {
  if (localStorage.getItem('token')) {
    location.replace('../home/index.html');
  }
}
