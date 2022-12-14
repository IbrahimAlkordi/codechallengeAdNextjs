import actions from "../constants/action-type";
import { ART } from "../../middlewares/url";

export const getArticles = (token, page) => ({
  type: actions.ARTICLES,
  payload: {
    request: {
      url: ART,
      method: "GET",
      params: {
        page: page,
      },
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    },
  },
});

export const searchForArticles = (searchInput) => ({
  type: actions.SEARCH_ARTICLES,
  payload: {
    search: searchInput,
  },
});
