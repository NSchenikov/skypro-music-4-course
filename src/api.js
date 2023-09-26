export async function getTracks() {
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/catalog/track/all/',
  )

  if (!response.ok) {
    throw new Error('ошибка сервера')
  }

  const data = await response.json()
  return data
}

export const registerUser = (email, password) => {
  fetch('https://skypro-music-api.skyeng.tech/user/signup/', {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
      username: email,
    }),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .then(() => console.log('Юзер зареган'))
}
