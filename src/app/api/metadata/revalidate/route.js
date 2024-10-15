import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get('secret');

  let path;
  if (secret === "home") {
    path = '/';
  } else if (secret === "about") {
    path = '/about';
  } else if (secret == "products") {
    path = '/products';
  } else if (secret == "contact") {
    path = '/pages/contact';
  } else {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }
  try {
    await revalidatePath(path);
    return NextResponse.json({ revalidated: true });
  } catch (err) {
    console.error("Error revalidating:", err);
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}
