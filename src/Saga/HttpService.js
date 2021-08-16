export default async ({ url, method, body, headers }) => {
  const result = await fetch(url, {
    method,
    body,
    headers,
  });
  return await result.json();
};
