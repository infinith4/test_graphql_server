import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const id = params.slug
  return NextResponse.json(id)
}
