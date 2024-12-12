export const getTest = async() => {
    try {
        const req = await fetch('http://localhost:3000/api/documents')
        const data = await req.json()
      } catch (err) {
        console.log(err)
      }
}