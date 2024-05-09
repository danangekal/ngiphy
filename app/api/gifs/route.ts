import { NextRequest, NextResponse } from 'next/server';

import { getSearchData } from '@/app/action';

export async function GET(request: NextRequest): Promise<any> {
  const { searchParams } = new URL(request.url);
  const qsPage = searchParams.get('page') || '';
  const qsKeyword = searchParams.get('keyword') || '';
  const qsRating = searchParams.get('rating') || '';
  const gifs = await getSearchData(
    Number(qsPage),
    String(qsKeyword),
    String(qsRating),
  );

  if (gifs) {
    return NextResponse.json(gifs);
  } else {
    return null;
  }
}
