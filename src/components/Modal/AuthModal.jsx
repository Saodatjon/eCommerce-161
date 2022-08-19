import React, { useState } from 'react'
import { setAuthModalAC } from '../../redux/reducers/modalReducer'
import { AuthModalPanelStyle, ModalStyle } from './ModalStyle'
import { useSelector, useDispatch } from 'react-redux'
import { CloseIcon } from '../icons'
import { Box } from '../Box'
import { H3, Span } from '../Typography'
import { Input, Label } from '../Form/Form'
import { Button } from '../Button'
import $host from '../../utilis/https'
import { useNavigate } from 'react-router-dom'

function AuthModal() {
    const { modal } = useSelector((state) => state)
    const { authModal } = modal
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [postData, setPostData] = useState({ email: '', code: '' })
    const [isActiveCode, setIsActiveCode] = useState(false)

    function modalHandler() {
        dispatch(setAuthModalAC(false))
    }

    function inputHandler(e) {
        setPostData({ ...postData, [e.target.name]: e.target.value })
    }

    function loginHandler() {
        if (postData.email !== '') {
            $host
                .post('/auth/login', {
                    email: postData.email,
                })
                .then(function (response) {
                    console.log(response)
                    if (response.data.isOk) {
                        setIsActiveCode(true)
                    } else {
                        alert(response.data.message)
                        setIsActiveCode(true)
                    }
                })
                .catch(function (error) {
                    console.log(error)
                })
        }
    }

    function verifyHandler() {
        if (postData.code !== '') {
            $host
                .post('/auth/verify', {
                    email: postData.email,
                    code: postData.code,
                })
                .then(function (response) {
                    if (response.data.isOk) {
                        localStorage.setItem(
                            'accessToken',
                            response.data.accessToken
                        )
                        localStorage.setItem(
                            'refreshToken',
                            response.data.refreshToken
                        )
                        localStorage.setItem('isLogin', true)
                        modalHandler()
                        navigate('/profile')
                    }
                })
                .catch(function (error) {
                    console.log(error)
                })
        }
    }

    return (
        <ModalStyle open={authModal}>
            <AuthModalPanelStyle>
                <Button
                    onClick={() => modalHandler()}
                    style={{
                        position: 'absolute',
                        right: '15px',
                        top: '15px',
                        padding: '3px',
                    }}
                >
                    <CloseIcon />
                </Button>

                <Box mb='20px'>
                    <H3 style={{ textAlign: 'center' }}>Регистрация</H3>
                </Box>

                {isActiveCode ? (
                    <Box mb='20px'>
                        <Label htmlFor='code'>
                            <Span>Code</Span>
                        </Label>
                        <Input
                            id='code'
                            type='text'
                            name='code'
                            placeholder='Code'
                            value={postData.code}
                            onChange={(e) => inputHandler(e)}
                        />
                    </Box>
                ) : (
                    <Box mb='20px'>
                        <Label htmlFor='email'>
                            <Span>Email</Span>
                        </Label>
                        <Input
                            id='email'
                            type='email'
                            name='email'
                            placeholder='Email'
                            value={postData.email}
                            onChange={(e) => inputHandler(e)}
                        />
                    </Box>
                )}

                <Box mb='20px'>
                    <Button
                        backgroundColor='#0093A2'
                        borderRadius='5px'
                        py='13px'
                        display='inline-block'
                        width='100%'
                        onClick={() =>
                            isActiveCode ? verifyHandler() : loginHandler()
                        }
                    >
                        <Span color='#fff'>
                            {isActiveCode
                                ? 'Зарегистрироваться'
                                : 'Получить код'}
                        </Span>
                    </Button>
                </Box>
            </AuthModalPanelStyle>
        </ModalStyle>
    )
}

export default AuthModal
