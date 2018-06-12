import React, { Component } from 'react';


const profiles = [
    {
      id: 1,
      userID: '1',
      favoriteMovieID: '1',
    },
    {
      id: 2,
      userID: '2',
      favoriteMovieID: '1',
    },
    {
      id: 3,
      userID: '4',
      favoriteMovieID: '5',
    },
    {
      id: 4,
      userID: '5',
      favoriteMovieID: '2',
    },
    {
      id: 5,
      userID: '3',
      favoriteMovieID: '5',
    },
    {
      id: 6,
      userID: '6',
      favoriteMovieID: '4',
    },
  ];
  
  const users = {
    1: {
      id: 1,
      name: 'Jane Jones',
      userName: 'coder',
    },
    2: {
      id: 2,
      name: 'Matthew Johnson',
      userName: 'mpage',
    },
    3: {
      id: 3,
      name: 'Autumn Green',
      userName: 'user123',
    },
    4: {
      id: 3,
      name: 'John Doe',
      userName: 'user123',
    },
    5: {
      id: 5,
      name: 'Lauren Carlson',
      userName: 'user123',
    },
    6: {
      id: 6,
      name: 'Nicholas Lain',
      userName: 'user123',
    },
  };
  
class MovieStats extends Component {
    render() {
        const id = this.props.movie.id,
            name = this.props.movie.name;

        const fansProfiles = profiles.filter(profile => profile.favoriteMovieID == id);

        let likedOrNot;

        if (fansProfiles.length) {
            likedOrNot = (
                <div>
                    <p>Liked By:</p>
                    <ul>
                        {fansProfiles.map(profile => (
                                <li key={users[profile.userID].id}>{users[profile.userID].name}</li>
                        ))}
                    </ul>
                </div>
            );
        } else {
            likedOrNot = <p>None of the current users liked this movie</p>;
        }

        return (
            <div>
                <h2>{name}</h2>
                {likedOrNot}
            </div>
        );
    }
}

export default MovieStats;