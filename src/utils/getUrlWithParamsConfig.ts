import querystring from 'querystring';
import config, { EnumEndpoint } from '../config';

function getUrlWithParamsConfig(endpointConfig: EnumEndpoint, query: querystring.ParsedUrlQueryInput) {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
    query: {},
  };

  const pathname = Object.keys(query).reduce((acc, val) => {
    if (acc.indexOf(`{${val}}`) !== -1) {
      const result = acc.replace(`{${val}}`, (query as any)[val]);
      // eslint-disable-next-line no-param-reassign
      delete query[val];
      return result;
    }

    return acc;
  }, url.pathname);

  url.pathname = pathname;
  url.query = {
    ...query,
  };

  return url;
}

export default getUrlWithParamsConfig;
