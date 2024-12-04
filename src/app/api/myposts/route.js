// export const GET = async () => {
//     // Sample data to return as a response
//     const response = await fetch('http://localhost:3000/api/users')
//     const data = response.json()
//     // Return a JSON response with status 200
//     return new Response(JSON.stringify({ data }));
//   };


import payload from 'payload';

export const GET = async () => {
  try {
    console.log("Fetching users...");
    const users = await payload.find({
      collection: 'users', // Ensure the collection name is correct
      limit: 10,
    });
    console.log("Fetched users:", users);

    if (!users || !users.docs) {
      throw new Error("No users found.");
    }

    // Return a proper JSON response
    return new Response(JSON.stringify({ users: users.docs }), { status: 200 });
  } catch (error) {
    console.error('Error fetching users:', error);
    
    // Return the error message as JSON
    return new Response(
      JSON.stringify({ error: error.message || 'An unknown error occurred' }),
      { status: 500 }
    );
  }
};
