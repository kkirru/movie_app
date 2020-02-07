import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
    // state는 해당 페이지 빠져나가면 초기화됨
    // redux를 이용해서 페이지 바깥에 state 저장할 수 있음
    // > 매번 로딩할 필요 없도록.
    state = {
        isLoading: true,
        movies: []
    }

    render() {
        const { isLoading, movies } = this.state;
        return (<section className="container"> {
            isLoading ? (<div className="loader">
                {/* JSX에서는 class 대신 className 써야 함 */}
                <span className="loader__text"> Loading... </span>
            </div>) : <div className="movies">
                    {movies.map(movie => {
                        return <Movie key={movie.id}
                            id={movie.id}
                            year={movie.year}
                            title={movie.title}
                            summary={movie.summary}
                            poster={movie.medium_cover_image}
                            genres={movie.genres}
                        />
                    })}
                </div>
        } </section>
        )
    }

    // async => 이 함수는 비동기니까 기다려야해
    // await => 여기서 기다려
    getmoives = async () => {
        const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"); // es6
        this.setState({ isLoading: false });
        this.setState({ movies }); // this.setState({movies : movies});
    }

    async componentDidMount() {
        this.getmoives();
    }


}

export default Home;
