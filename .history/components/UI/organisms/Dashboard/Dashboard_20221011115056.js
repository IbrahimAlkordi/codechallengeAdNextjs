import React, { useEffect, useState } from 'react';
import blog from '../../../../assets/images/blog.jpg';
import { AppBar, Toolbar, InputBase, styled, alpha, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Translate from '../../molecules/Translate/Translate';
import {
  getArticles,
  searchForArticles,
} from '../../../../redux/actions/articlesActions';

import classes from './Dashboard.module.scss';
import Article from '../../molecules/ArticleItem/ArticleItem';

import { logout } from '../../../../redux/actions/loginActions';
import { useTranslation } from 'react-i18next';
import Footer from '../../atoms/Footer/Footer';
import LoadingSpinner from '../../atoms/LoadingSpinner/LoadingSpinner';
import { useRouter } from 'next/router';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(7),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
const Dashboard = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const [page, setPage] = useState(0);
const router = useRouter();
  const { articles, filteredArticles, searchInput } = useSelector(
    (state) => state.article,
  );
  const { accessToken } = useSelector((state) => state.auth);
  const [t, i18n] = useTranslation();

  const searchHandler = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    dispatch(searchForArticles(searchQuery));
    // setSearch(lowerCase);
  };
  const SubmitSearch = (e) => {
    e.preventDefault();
  };
  const logoutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => {
    dispatch(getArticles(accessToken, page));
  }, [accessToken, dispatch, page]);

  const scrollToEnd = () => {
    setPage(page + 1);
    dispatch(getArticles(accessToken, page));
    console.log(page);
  };

  const articlesToDispaly = searchInput ? filteredArticles : articles;

  useEffect(() => {
  window.onscroll = function () {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      // console.log(page);
      scrollToEnd();
    }
  };
}, [scrollToEnd]);

  // if (accessToken === '') {
  //   return router.push("/");
  // }

  // if (accessToken === '') {
  //   return <Redirect to="/" />;
  // }

  return (
    <>
      <AppBar position="sticky">
        <Toolbar
          dir={i18n.language === 'en' ? 'ltr' : 'ar'}
          className={classes.toolbar}
        >
          <ul className={classes.translate}>
            <Translate></Translate>
          </ul>

          <Search>
            <SearchIconWrapper>
              <SearchIcon className={classes.searchInput} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder={t('Search…')}
              inputProps={{ 'aria-label': 'search' }}
              onChange={searchHandler}
              onSubmit={SubmitSearch}
              className={classes.searchInput}
            />
          </Search>
          <Box>
            <button
              className={classes.btnLogouts}
              onClick={logoutHandler}
              // variant="contained"
            >
              {t('LOGOUT')}
            </button>
          </Box>
        </Toolbar>
      </AppBar>

      {loading ? (
        <p className={classes.loadingSpinner}>
          <LoadingSpinner></LoadingSpinner>
        </p>
      ) : (
        <div className={classes.container}>
          {articlesToDispaly.map((article, index) => {
            return (
              <Article
                key={index}
                abstract={article?.abstract}
                lead_paragraph={article?.lead_paragraph}
                keywords={article?.keywords}
                person={article?.byline?.person}
                image={
                  article.multimedia[0] === undefined
                    ? blog
                    : 'https://static01.nyt.com/'.concat(
                        article.multimedia[0].url,
                      )
                }
              />
            );
          })}
        </div>
      )}

      <Footer></Footer>
    </>
  );
};
export default Dashboard;
