/*
No procolo HTTP vc sempre precisa especificar um método.
Onde a mais comum é a GET (pegar uma informação).
*/

// primeiro teste de integração do projeto
test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
});
