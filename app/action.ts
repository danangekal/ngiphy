const baseUrl = process.env.NEXT_PUBLIC_GIPHY_API_URL || '';
const apiKey = process.env.NEXT_PUBLIC_GIPHY_API_KEY || '';

export async function getTrendingData() {
  try {
    const response = await fetch(
      `${baseUrl}/gifs/trending/?api_key=${apiKey}&limit=6&rating=g`,
    );

    if (!response.ok) {
      throw new Error('Failed to fetch data trending gif');
    }

    return response.json();
  } catch (e) {
    throw new Error('Failed to fetch data trending gif');
  }
}

export async function getTrendingSearchData() {
  try {
    const response = await fetch(
      `${baseUrl}/trending/searches?api_key=${apiKey}`,
    );

    if (!response.ok) {
      throw new Error('Failed to fetch data trending search');
    }

    return response.json();
  } catch (e) {
    throw new Error('Failed to fetch data trending search');
  }
}

export async function getCategoriesData() {
  try {
    const response = await fetch(
      `${baseUrl}/gifs/categories?api_key=${apiKey}`,
    );

    if (!response.ok) {
      throw new Error('Failed to fetch data categories gif');
    }

    return response.json();
  } catch (e) {
    throw new Error('Failed to fetch data categories gif');
  }
}
