import { connectToDatabase } from "@/lib/connectMongo";

export async function GET(req, { params }) {
  const { page } = params; // Get the page parameter from the URL

  try {
    // Connect to the MongoDB database
    const { db } = await connectToDatabase();

    // Fetch metadata for the specific page from the MongoDB collection
    const metadata = await db.collection('metadata').findOne({ page });

    if (!metadata) {
      return new Response(JSON.stringify({ message: 'Metadata not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Send metadata as JSON response
    return new Response(JSON.stringify(metadata), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching metadata:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
