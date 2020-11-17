import querystring from 'querystring';
import config, { EnumEndpoint } from '../config';

function getUrlWithParamsConfig(endpointConfig: EnumEndpoint, query: querystring.ParsedUrlQueryInput) {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
    query,
  };

  return url;
}

export default getUrlWithParamsConfig;
