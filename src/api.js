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

export const registerUser = async (email, password) => {
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/user/signup/',
    {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
        username: email,
      }),
      headers: {
        'content-type': 'application/json',
      },
    },
  )

  const data = await response.json()

  if (!response.ok) {
    console.log(data)
    const error = data.email?.[0] ?? data.username?.[0] ?? data.password?.[0]
    console.log(error)
    throw new Error(error)
  } else {
    console.log(data)
    return data
  }
}

export const loginUser = async (email, password) => {
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/user/login/',
    {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        'content-type': 'application/json',
      },
    },
  )

  const data = await response.json()

  if (!response.ok) {
    console.log(data)
    const error = data.detail ?? data.email ?? data.password
    console.log(error)
    throw new Error(error)
  } else {
    console.log(data)
    return data
  }
}

export const getToken = async (email, password) => {
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/user/token/',
    {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        'content-type': 'application/json',
      },
    },
  )

  const data = await response.json()

  if (!response.ok) {
    console.log(data)
    const error = data.detail ?? data.email ?? data.password
    console.log(error)
    throw new Error(error)
  } else {
    // console.log(data)
    return data
  }
}

export const refreshToken = async (refreshKey) => {
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/user/token/refresh/',
    {
      method: 'POST',
      body: JSON.stringify({
        refresh: refreshKey,
      }),
      headers: {
        'content-type': 'application/json',
      },
    },
  )

  const data = await response.json()

  if (!response.ok) {
    console.log(data)
    const error = data.detail ?? data.email ?? data.password
    console.log(error)
    throw new Error(error)
  } else {
    // console.log(data)
    return data
  }
}

export const getMyTracks = async (accessToken) => {
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'content-type': 'application/json',
      },
    },
  )

  const data = await response.json()

  if (!response.ok) {
    console.log(data)
    const error = data.detail ?? data.email ?? data.password
    console.log(error)
    throw new Error(error)
  } else {
    // console.log(data)
    return data
  }
}

export const sendLike = async (accessToken, id) => {
  const response = await fetch(
    `https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'content-type': 'application/json',
      },
    },
  )

  const data = await response.json()

  if (!response.ok) {
    console.log(data)
    const error = data.detail ?? data.email ?? data.password
    console.log(error)
    throw new Error(error)
  } else {
    // console.log(data)
    return data
  }
}

export const disLike = async (accessToken, id) => {
  const response = await fetch(
    `https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'content-type': 'application/json',
      },
    },
  )

  const data = await response.json()

  if (!response.ok) {
    console.log(data)
    const error = data.detail ?? data.email ?? data.password
    console.log(error)
    throw new Error(error)
  } else {
    // console.log(data)
    return data
  }
}
