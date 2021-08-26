import { defaultLoadPostsVariables, loadPosts } from './load-posts';
import request from 'graphql-request';
import config from '../config';

jest.mock('graphql-request');

jest.mock('../graphql/queries', () => {
  return {
    GRAPQL_QUERY: 'A_QUERY',
  };
});

describe('load-posts', () => {
  it('should call request with default variables', async () => {
    await loadPosts();
    expect(request).toHaveBeenCalledWith(
      config.graphqlURL,
      'A_QUERY',
      defaultLoadPostsVariables,
    );
  });
  it('should call request with custom variables', async () => {
    await loadPosts({
      authorSlug: 'OK',
      tagSlug: 'TAG',
      categorySlug: 'CAT',
      limit: 100,
      postSlug: 'SLUG',
      start: 1,
    });
    expect(request).toHaveBeenCalledWith(config.graphqlURL, 'A_QUERY', {
      defaultLoadPostsVariables,
      authorSlug: 'OK',
      tagSlug: 'TAG',
      categorySlug: 'CAT',
      limit: 100,
      postSlug: 'SLUG',
      start: 1,
    });
  });
});
