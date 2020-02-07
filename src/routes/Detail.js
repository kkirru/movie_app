import React from "react";
import '../components/Movie.css';

class Detail extends React.Component {

    render() {
        // location => Route 될 때 기본적으로 컴포넌트가 가지는 props
        const { location } = this.props;
        if (location.state) {
            return (
                <span>{location.state.title}</span>
            )
        } else {
            return null;
        }

    }

    // render 후에 일어나는 과정
    componentDidMount() {
        console.log(this.props);
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }


}

export default Detail;
