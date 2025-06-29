import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, RotateCcw, CheckCircle, XCircle, Star } from 'lucide-react'
import { getGroupById, playAudio } from '../data/phonicsData'

const MatchingGame = () => {
  const { groupId } = useParams()
  const group = getGroupById(groupId)
  
  const [selectedLetter, setSelectedLetter] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const [matches, setMatches] = useState([])
  const [score, setScore] = useState(0)
  const [attempts, setAttempts] = useState(0)
  const [gameComplete, setGameComplete] = useState(false)
  const [feedback, setFeedback] = useState(null)

  useEffect(() => {
    if (selectedLetter && selectedImage) {
      checkMatch()
    }
  }, [selectedLetter, selectedImage])

  useEffect(() => {
    if (matches.length === group?.matchingPairs.length) {
      setGameComplete(true)
    }
  }, [matches, group])

  if (!group) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Group Not Found</h1>
          <Link to="/dashboard">
            <Button>Return to Dashboard</Button>
          </Link>
        </div>
      </div>
    )
  }

  const checkMatch = () => {
    const isCorrect = group.matchingPairs.some(pair => 
      pair.letter === selectedLetter && pair.word === selectedImage
    )
    
    setAttempts(prev => prev + 1)
    
    if (isCorrect) {
      setMatches(prev => [...prev, { letter: selectedLetter, image: selectedImage }])
      setScore(prev => prev + 1)
      setFeedback({ type: 'success', message: 'Perfect match!' })
      playAudio(`/audio/${selectedLetter}.mp3`)
    } else {
      setFeedback({ type: 'error', message: 'Try again!' })
    }
    
    // Clear selections after a short delay
    setTimeout(() => {
      setSelectedLetter(null)
      setSelectedImage(null)
      setFeedback(null)
    }, 1500)
  }

  const resetGame = () => {
    setSelectedLetter(null)
    setSelectedImage(null)
    setMatches([])
    setScore(0)
    setAttempts(0)
    setGameComplete(false)
    setFeedback(null)
  }

  const isLetterMatched = (letter) => {
    return matches.some(match => match.letter === letter)
  }

  const isImageMatched = (word) => {
    return matches.some(match => match.image === word)
  }

  const getScorePercentage = () => {
    return attempts > 0 ? Math.round((score / attempts) * 100) : 0
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link to={`/group/${groupId}`} className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Group
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Matching Game</h1>
              <p className="text-xl text-gray-600">{group.title}: Connect letters with images</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button onClick={resetGame} variant="outline" className="flex items-center">
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset
              </Button>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">Score: {score}/{group.matchingPairs.length}</div>
                <div className="text-sm text-gray-500">Accuracy: {getScorePercentage()}%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Game Complete Modal */}
        {gameComplete && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <Card className="w-96 shadow-2xl">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Star className="h-16 w-16 text-yellow-500" />
                </div>
                <CardTitle className="text-2xl text-green-600">Congratulations!</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-lg">You completed the matching game!</p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{score}/{group.matchingPairs.length}</div>
                  <div className="text-sm text-green-700">Perfect Matches</div>
                  <div className="text-lg font-semibold text-green-600">{getScorePercentage()}% Accuracy</div>
                </div>
                <div className="flex space-x-2">
                  <Button onClick={resetGame} className="flex-1">
                    Play Again
                  </Button>
                  <Link to={`/group/${groupId}`} className="flex-1">
                    <Button variant="outline" className="w-full">
                      Back to Group
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Feedback */}
        {feedback && (
          <div className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-40 p-4 rounded-lg shadow-lg ${
            feedback.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
          }`}>
            <div className="flex items-center">
              {feedback.type === 'success' ? 
                <CheckCircle className="h-5 w-5 mr-2" /> : 
                <XCircle className="h-5 w-5 mr-2" />
              }
              {feedback.message}
            </div>
          </div>
        )}

        {/* Game Board */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Letters */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Letters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                {group.matchingPairs.map((pair, index) => (
                  <Button
                    key={pair.letter}
                    onClick={() => !isLetterMatched(pair.letter) && setSelectedLetter(pair.letter)}
                    disabled={isLetterMatched(pair.letter)}
                    className={`h-24 text-3xl font-bold rounded-xl transition-all duration-200 ${
                      isLetterMatched(pair.letter)
                        ? 'bg-green-500 text-white cursor-not-allowed'
                        : selectedLetter === pair.letter
                        ? 'bg-blue-500 text-white scale-105 shadow-lg'
                        : 'bg-white text-gray-800 border-2 border-gray-300 hover:border-blue-400 hover:scale-105'
                    }`}
                  >
                    {pair.letter.toUpperCase()}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Images */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Images</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                {group.matchingPairs.map((pair, index) => (
                  <Button
                    key={pair.word}
                    onClick={() => !isImageMatched(pair.word) && setSelectedImage(pair.word)}
                    disabled={isImageMatched(pair.word)}
                    className={`h-24 flex flex-col items-center justify-center rounded-xl transition-all duration-200 ${
                      isImageMatched(pair.word)
                        ? 'bg-green-500 text-white cursor-not-allowed'
                        : selectedImage === pair.word
                        ? 'bg-orange-500 text-white scale-105 shadow-lg'
                        : 'bg-white text-gray-800 border-2 border-gray-300 hover:border-orange-400 hover:scale-105'
                    }`}
                  >
                    <div className="text-2xl mb-1">📷</div>
                    <div className="text-sm font-semibold capitalize">{pair.word}</div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Instructions */}
        <Card className="shadow-lg mt-8 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
          <CardHeader>
            <CardTitle className="text-purple-800">How to Play</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-purple-700 mb-4">
              Click a letter, then click the matching image. Perfect for teacher-led instruction during Zoom classes!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
                <span className="text-purple-700">Selected letter</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-orange-500 rounded mr-2"></div>
                <span className="text-purple-700">Selected image</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                <span className="text-purple-700">Matched pair</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default MatchingGame

