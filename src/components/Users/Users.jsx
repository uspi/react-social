import React from "react";
import style from "./Users.module.css"

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: "https://www.film.ru/sites/default/files/people/1466544-1448629.jpg",
                followed: false,
                fullName: "Oksana",
                status: "I love ballet",
                location: {
                    country: "Usa",
                    city: "Los Angeles",
                },
            },
            {
                id: 2,
                photoUrl: "https://www.film.ru/sites/default/files/people/1466544-1448629.jpg",
                followed: true,
                fullName: "Oleg",
                status: "I love football",
                location: {
                    country: "Kharkiv",
                    city: "Ukraine",
                },
            },
            {
                id: 3,
                photoUrl: "https://www.film.ru/sites/default/files/people/1466544-1448629.jpg",
                followed: false,
                fullName: "Alexander",
                status: "I'm businessmen",
                location: {
                    country: "Russia",
                    city: "Khabarovsk",
                },
            },
            {
                id: 4,
                photoUrl: "https://www.film.ru/sites/default/files/people/1466544-1448629.jpg",
                followed: false,
                fullName: "Anna",
                status: "Say Hello",
                location: {
                    country: "London",
                    city: "United Kingdom",
                },
            },
        ]);
    }

    return (
        <div className={style.usersContainer}>
            {
                props.users.map(u => (
                    <div key={u.id} className={style.item}>
                        <div className={style.userPhoto}>
                            <img src={u.photoUrl} alt="user avatar" />
                        </div>
                        <div className={style.userDescription}>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>

                        </div>
                        <div className={style.userLocation}>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </div>
                        <div className={style.buttonContainer}>
                            {u.followed ?
                                <button className={style.button}
                                    onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                : <button className={style.button}
                                    onClick={() => { props.follow(u.id) }}>Follow</button>
                            }
                        </div>
                    </div>
                ))
            }
        </div >
    );
}

export default Users;