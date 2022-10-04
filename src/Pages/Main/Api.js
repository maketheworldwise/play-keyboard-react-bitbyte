import { BASE_URL } from '../../config.js';

export async function getCategories() {
  const res = await fetch(`${BASE_URL}/theme/category`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).catch(() => alert('통신에 실패하였습니다.'));

  return res.json();
}

export async function getThemes(categoryName) {
  const res = await fetch(`${BASE_URL}/theme?category=${categoryName}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).catch(() => alert('통신에 실패하였습니다.'));

  return res.json();
}
