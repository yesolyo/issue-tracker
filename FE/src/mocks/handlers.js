import { rest } from 'msw';

import issueData from './mockIssueData.json';

export const handlers = [
  rest.get('/issueList', (req, res, ctx) => {
    const status = req.url.searchParams.get('status');
    return res(ctx.status(200), ctx.json(issueData));
  }),

  rest.get('/issueList', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(issueData));
  })
];
