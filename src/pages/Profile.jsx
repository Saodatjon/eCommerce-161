import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from '../components'
import { setUserAC } from '../redux/reducers/userReducer'
import $host from '../utilis/https'

function Profile() {
    const { userState } = useSelector((state) => state)
    const dispatch = useDispatch()
    useEffect(() => {
        if (localStorage.getItem('accessToken'))
            $host
                .get('/user/profile',
                    {
                        headers: {
                            Authorization:
                                'Bearer ' + localStorage.getItem('accessToken'),
                        },
                    }
                )
                .then(function (response) {
                    if (response.data.user) {
                        dispatch(setUserAC(response.data.user))
                        console.log(response)
                    }
                })
                .catch(function (error) {
                    console.log(error)
                })
    },  )

    return (
        <Container>
            <div>{userState.user.email}</div>
        </Container>
    )
}

export default Profile