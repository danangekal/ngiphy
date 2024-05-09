const baseUrl = process.env.GIPHY_API_URL || '';
const apiKey = process.env.GIPHY_API_KEY || '';

export async function getTrendingData() {
  try {
    const response = await fetch(
      `${baseUrl}/gifs/trending/?api_key=${apiKey}&limit=6&rating=g`,
      { next: { revalidate: 500 } },
    );

    if (!response.ok) {
      throw new Error('Failed to fetch data trending gif');
    }

    return response.json();
  } catch (e) {
    throw new Error('on Catch -> Failed to fetch data trending gif');
  }
}

export async function getTrendingSearchData() {
  try {
    const response = await fetch(
      `${baseUrl}/trending/searches?api_key=${apiKey}`,
      { next: { revalidate: 500 } },
    );

    if (!response.ok) {
      throw new Error('Failed to fetch data trending search');
    }

    return response.json();
  } catch (e) {
    throw new Error('on Catch -> Failed to fetch data trending search');
  }
}

export async function getCategoriesData() {
  try {
    const response = await fetch(
      `${baseUrl}/gifs/categories?api_key=${apiKey}`,
      { next: { revalidate: 500 } },
    );

    if (!response.ok) {
      throw new Error('Failed to fetch data categories gif');
    }

    return response.json();
  } catch (e) {
    throw new Error('on Catch -> Failed to fetch data categories gif');
  }
}

export async function getSearchData(
  page?: number,
  key?: string,
  rating?: string,
) {
  try {
    const pageSize = 10;
    const pageValue = page || 1;
    const offset = pageValue * pageSize - pageSize;
    const keyValue = key || '';
    const ratingValue = rating || '';
    const params = `api_key=${apiKey}&offset=${offset}&limit=${pageSize}&rating=${ratingValue}&q=${keyValue}`;
    const response = await fetch(`${baseUrl}/gifs/search/?${params}`, {
      next: { revalidate: 500 },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch search data gif');
    }

    return response.json();
  } catch (e) {
    throw new Error('on Catch -> Failed to fetch search data gif');
  }
}
