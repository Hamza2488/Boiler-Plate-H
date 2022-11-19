import { Button, CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import { setUserId } from 'firebase/analytics'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate, useParams, useRouteLoaderData } from 'react-router-dom'
import { checkUser, getData, sendData } from '../firebase/firebasemethod'



const Home = () => {

    const [quizData, setQuizData] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const [showQuiz, setShowQuiz] = useState(true)
    const [isLoading, setLoading] = useState(true)
    const [startQuiz, setStartQuiz] = useState('')
    const navigate = useNavigate()
    const params = useParams()


     useEffect  (() => {
        getData('quizData').then((res) => {
            let resolve = Object.values(res)
            console.log(res)
            const a = resolve.length > 0 && resolve.map((e, i) => {
                const obj = {
                    question: e.Quetion,
                    options: [e.Option1, e.Option2, e.Option3, e.Option4],
                    correct: e.correctOption
                }

                return obj
            })
            setQuizData(a)

            setLoading(false)

        }).catch((err) => {
            alert(err)
            setLoading(false)
        })
    },[])  


    const checkQuestion = (a, b) => {
        if (a == b) {
            setScore(score + 1);
        }
        if (currentQuestion + 1 == quizData.length) {
            setShowScore(true);
        } else {
            setCurrentQuestion(currentQuestion + 1)
        }
    }

    const perc = (score / quizData.length) * 100
    console.log(quizData)
        let resultText = "";

    if (perc <= 100 && perc >= 80) {
        resultText = 'Congratulations 🎉, you have passed keep up the good work'
    } else if (perc <= 79 && perc >= 60) {
        resultText = 'You have just passed, you need to work harder'
    } else if (perc <= 59 && perc >= 40) {
        resultText = 'You need a lot of hard work'
    } else {
        resultText = 'Failed 😭'
    }

    const sendDetails = () => {
        if (!startQuiz) {
            alert('Please Enter Your Name')
        } else {
            sendData({ startQuiz, perc }, 'quizDetails').then((res) => {
                console.log(res)
                setShowQuiz(false)
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    


    return (
        <>
            <Box>
                {
                    showScore ?
                        <Box sx={{ display: 'flex', justifyContent: 'center', padding: 5 }}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Quiz Result</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{perc.toFixed(2)}%</Card.Subtitle>
                                    <Card.Text>
                                        {resultText}
                                    </Card.Text>
                                    <Card.Link onClick={() => navigate('/')}>Back to Registration</Card.Link>
                                </Card.Body>
                            </Card>
                        </Box>
                        :
                        <div>
                            <Box>
                                <Box sx={{ textAlign: 'center', backgroundColor: 'skyblue', p: 1 }}><h2>HTML Quiz</h2></Box>
                            </Box>

                            <Box>
                                {
                                    isLoading ?
                                        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                                            <CircularProgress />
                                        </Box>
                                        :
                                        <Box>
                                            <h5>Question No {currentQuestion + 1}:</h5>
                                            <h2>{quizData[currentQuestion].question}</h2>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                                                {quizData[currentQuestion].options.map((e, i) => {
                                                  return  <Box key={i}>
                                                        <Button onClick={()=>checkQuestion(e, quizData[currentQuestion].correct)} variant="outline-light text-dark">
                                                            {e}
                                                        </Button>
                                                    </Box>
                                                })}
                                            </Box>
                                            <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 6 }}>
                                                <Button variant='outline-dark' onClick={() => checkQuestion(quizData[currentQuestion])}>Next Question</Button>
                                            </Box>
                                        </Box>
                                }
                            </Box>

                        </div>
                }
            </Box>
        </>
    )
}

export default Home