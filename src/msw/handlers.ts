import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/teste', () => {
    return HttpResponse.json({ teste: 'funcionou' });
  }),
];
