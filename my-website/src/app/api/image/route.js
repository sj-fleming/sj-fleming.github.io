import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get('name');

  if (!name) {
    return new NextResponse('Image name is required', { status: 400 });
  }

  // Prevent path traversal
  if (name.includes('..') || name.includes('/')) {
    return new NextResponse('Invalid image name', { status: 400 });
  }

  const imagePath = path.resolve(`assets/images/${name}`);

  try {
    const imageBuffer = await fs.readFile(imagePath);
    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'no-store',
      },
    });
  } catch (err) {
    return new NextResponse('Image not found', { status: 404 });
  }
}
