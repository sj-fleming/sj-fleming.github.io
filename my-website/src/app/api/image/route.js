import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';
import mime from 'mime-types'; // make sure to install this via `npm install mime-types`

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get('name');

  if (!name) {
    return new NextResponse('Image name is required', { status: 400 });
  }

  //Normalize and sanitize the path to prevent directory traversal
  const safePath = path.normalize(name).replace(/^(\.\.[/\\])+/, '');

  //Construct absolute path to the image inside assets/images/
  const imagePath = path.join(process.cwd(), 'assets', 'images', safePath);

  try {
    const imageBuffer = await fs.readFile(imagePath);
    const contentType = mime.lookup(imagePath) || 'application/octet-stream';

    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'no-store',
      },
    });
  } catch (err) {
    return new NextResponse('Image not found', { status: 404 });
  }
}
