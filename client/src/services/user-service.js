export async function getUsers(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      resolve(data);
    })
  })
}