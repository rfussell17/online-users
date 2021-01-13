async function getUsers() {
  let response = await fetch("users.json")
  let users = await response.json()
  return users
}

function getUserDiv(user) {
  return `<div class="my-online-user">
      <div class="user-username">${user.username}</div>
      <div class="user-online"></div>
  </div>`
}

getUsers().then(users => {
  let sampleUser = users[0]
  
  document.body.innerHTML = `
  <div class="header"></div>
  <div class="my-online-users">
      ${users.map(user => getUserDiv(user)).join('')}
  </div>
  <div class="main-content">Chat App</div>
  <div class="footer"></div>
  `
})
