import Url from 'url';
import querystring from 'querystring';
import { EnumEndpoint } from '../config';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

function req<T>(endpoint: EnumEndpoint, query: querystring.ParsedUrlQueryInput): Promise<T> {
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query));
  return fetch(uri).then((res) => res.json());
}

export default req;
