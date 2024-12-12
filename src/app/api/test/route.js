export const GET = async (req) => {
  try {
    const token = req.headers.get('Authorization');
    const response = await fetch('http://localhost:3000/api/documents', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      },
    })
    const data = await response.json()
    return new Response(JSON.stringify(data))
  } catch (err) {
    console.log(err)
  }
}
