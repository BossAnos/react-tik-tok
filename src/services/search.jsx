import baseAxios from '~/components/axios/axios';
import { API_ENDPOINT } from '~/utils/const';

const { SEARCH } = API_ENDPOINT;

export const SearchAllUsersApi = (searchField) => {
  return baseAxios.get(SEARCH.SEARCH_ALL_USERS, {
    params: {
      q: searchField,
      type: 'less',
    },
  });
};
