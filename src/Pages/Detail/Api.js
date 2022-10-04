import { BASE_URL } from '../../config.js';

export async function getDetail(themeId) {
  const res = await fetch(`${BASE_URL}/theme/${themeId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).catch(() => alert('통신에 실패하였습니다.'));

  return res.json();
}
