import {
  TrendingTitleStyled,
  MoviesListStyled,
  MovieListItemWrapper,
  MovieName,
  LinkStyled,
} from './MoviesList.styled';

export default function MoviesList({ movies, add }) {
  return (
    <>
      <TrendingTitleStyled>Trending today</TrendingTitleStyled>
      <MoviesListStyled>
        {movies?.map(movie => (
          <MovieListItemWrapper key={movie.id}>
            <LinkStyled to={`${add}${movie.id}`}>
              <MovieName>{movie.title}</MovieName>
            </LinkStyled>
          </MovieListItemWrapper>
        ))}
      </MoviesListStyled>
    </>
  );
}