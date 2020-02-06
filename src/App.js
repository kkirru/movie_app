import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

// // children component
// function Food({ name, picture, rating }) {
//   return <div>
//     <h2> I love {name}</h2>
//     <h4> ratings : {rating}/5.0</h4>
//     <img src={picture} />
//   </div>
// }

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number // number 혹은 unidentified
// }

// // function component
// // 무언가 리턴함
// function App() {
//   return (
//     // html
//     <div className="App"> <h1>
//       {/* dish : object */} 
//       {/* map : array item  돌며 실행, return array 만듬 */}
//       {foodILike.map(dish => <Food key={dish.id}
//         name={dish.name}
//         picture={dish.image}
//         rating={dish.rating} />)}

//     </h1>
//     </div>
//   );
// }

// // class Component > state 사용하기 위함.
// class App extends React.Component {
//   // state 는 object, 변하는 data를 담음
//   state = {
//     count: 0
//   }

//   add = () => {
//     // no! render function을 refresh하지 않음. > setstate 사용
//     // this.state.count ++;

//     // *** setstate => state refresh 하고 render 호출 ***
//     // this.setState({count: this.state.count + 1}); // 좋은 방법 X (성능문제)
//     this.setState(current => ({count : current.count + 1}));
//   }

//   minus = () => {
//     this.setState(current => ({count : current.count - 1}));

//   }

//   // render 메서드는 자동 실행
//   render() {
//     return (
//       <div>
//         <h1> the number is :  {this.state.count}</h1>
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.minus}>Minus</button>
//       </div>
//     )
//   }
// }

class App extends React.Component {
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

export default App;
