// Can be accessed with localStorage.getItem("superSecretCredentials")
export const initiate = () => localStorage.setItem("superSecretCredentials", JSON.stringify('admin/admin'));

export const dummyPictures = [
  { title: 'Test', description: 'This is the description of the image', imageSrc: 'https://i.imgur.com/5kPQEMY.jpeg' }
]
