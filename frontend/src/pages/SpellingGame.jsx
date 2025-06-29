import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { 
  ArrowLeft, RotateCcw, Volume2, CheckCircle, XCircle, Star, 
  Settings, Play, Pause, SkipForward, Trophy, Target
} from 'lucide-react'
import { getGroupById, getAvailableLetters, playAudio } from '../data/phonicsData'

const SpellingGame = () => {
  const { groupId } = useParams()
  const group = getGroupById(groupId)
  const availableLetters = getAvailableLetters(groupId)
  
  // Game state
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [userWord, setUserWord] = useState([])
  const [score, setScore] = useState(0)
  const [attempts, setAttempts] = useState(0)
  const [wordsCompleted, setWordsCompleted] = useState(0)
  const [gameComplete, setGameComplete] = useState(false)
  const [feedback, setFeedback] = useState(null)
  const [showHint, setShowHint] = useState(false)
  
  // Teacher controls
  const [difficulty, setDifficulty] = useState('normal')
  const [playbackSpeed, setPlaybackSpeed] = useState([1])
  const [autoAdvance, setAutoAdvance] = useState(true)
  const [showTeacherControls, setShowTeacherControls] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  
  // Accessibility
  const [highContrast, setHighContrast] = useState(false)
  const [largeText, setLargeText] = useState(false)
  const [audioFeedback, setAudioFeedback] = useState(true)
  
  // Refs for keyboard navigation
  const letterButtonsRef = useRef([])
  const [focusedLetterIndex, setFocusedLetterIndex] = useState(0)

  useEffect(() => {
    if (wordsCompleted === group?.spellingWords.length) {
      setGameComplete(true)
    }
  }, [wordsCompleted, group])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isPaused) return
      
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault()
          setFocusedLetterIndex(prev => Math.max(0, prev - 1))
          break
        case 'ArrowRight':
          e.preventDefault()
          setFocusedLetterIndex(prev => Math.min(availableLetters.length - 1, prev + 1))
          break
        case 'Enter':
        case ' ':
          e.preventDefault()
          if (focusedLetterIndex < availableLetters.length) {
            addLetter(availableLetters[focusedLetterIndex])
          }
          break
        case 'Backspace':
          e.preventDefault()
          removeLetter()
          break
        case 'Escape':
          e.preventDefault()
          clearWord()
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [focusedLetterIndex, availableLetters, isPaused])

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

  const currentWord = group.spellingWords[currentWordIndex]
  const targetWord = currentWord?.word || ''
  const targetLetters = currentWord?.letters || []

  const addLetter = (letter) => {
    if (isPaused) return
    if (userWord.length < targetLetters.length) {
      setUserWord(prev => [...prev, letter])
      if (audioFeedback) {
        playAudio(`/audio/${letter}.mp3`)
      }
    }
  }

  const removeLetter = () => {
    if (isPaused) return
    setUserWord(prev => prev.slice(0, -1))
  }

  const clearWord = () => {
    if (isPaused) return
    setUserWord([])
    setShowHint(false)
  }

  const checkWord = () => {
    if (isPaused) return
    
    const isCorrect = userWord.join('').toLowerCase() === targetWord.toLowerCase()
    setAttempts(prev => prev + 1)
    
    if (isCorrect) {
      setScore(prev => prev + 1)
      setWordsCompleted(prev => prev + 1)
      setFeedback({ 
        type: 'success', 
        message: getRandomPositiveFeedback(),
        points: getDifficultyPoints()
      })
      
      if (audioFeedback) {
        playAudio(currentWord.audio)
      }
      
      // Auto advance to next word
      setTimeout(() => {
        if (autoAdvance && currentWordIndex < group.spellingWords.length - 1) {
          nextWord()
        }
        setFeedback(null)
      }, 2000)
    } else {
      setFeedback({ 
        type: 'error', 
        message: getRandomEncouragingFeedback(),
        hint: getHintForWord()
      })
      
      setTimeout(() => {
        setFeedback(null)
        if (difficulty === 'easy') {
          setShowHint(true)
        }
      }, 2000)
    }
  }

  const nextWord = () => {
    if (currentWordIndex < group.spellingWords.length - 1) {
      setCurrentWordIndex(prev => prev + 1)
      setUserWord([])
      setShowHint(false)
    }
  }

  const previousWord = () => {
    if (currentWordIndex > 0) {
      setCurrentWordIndex(prev => prev - 1)
      setUserWord([])
      setShowHint(false)
    }
  }

  const resetGame = () => {
    setCurrentWordIndex(0)
    setUserWord([])
    setScore(0)
    setAttempts(0)
    setWordsCompleted(0)
    setGameComplete(false)
    setFeedback(null)
    setShowHint(false)
    setIsPaused(false)
  }

  const getDifficultyPoints = () => {
    const basePoints = 10
    const difficultyMultiplier = {
      'easy': 1,
      'normal': 1.5,
      'hard': 2
    }
    return Math.round(basePoints * difficultyMultiplier[difficulty])
  }

  const getRandomPositiveFeedback = () => {
    const messages = [
      'Excellent work!', 'Perfect spelling!', 'Outstanding!', 
      'You\'re a spelling star!', 'Fantastic job!', 'Well done!',
      'Amazing spelling!', 'You nailed it!', 'Superb!'
    ]
    return messages[Math.floor(Math.random() * messages.length)]
  }

  const getRandomEncouragingFeedback = () => {
    const messages = [
      'Almost there! Try again!', 'Good effort! Keep going!', 
      'You\'re getting closer!', 'Nice try! One more time!',
      'Don\'t give up! You can do it!', 'Great attempt! Try once more!'
    ]
    return messages[Math.floor(Math.random() * messages.length)]
  }

  const getHintForWord = () => {
    if (userWord.length === 0) return `This word starts with "${targetLetters[0].toUpperCase()}"`
    if (userWord.length < targetLetters.length) {
      return `Next letter is "${targetLetters[userWord.length].toUpperCase()}"`
    }
    return 'Check your spelling and try again!'
  }

  const getScorePercentage = () => {
    return attempts > 0 ? Math.round((score / attempts) * 100) : 0
  }

  const getContrastClass = () => {
    return highContrast ? 'contrast-125 saturate-150' : ''
  }

  const getTextSizeClass = () => {
    return largeText ? 'text-lg' : 'text-base'
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-8 ${getContrastClass()}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link to={`/group/${groupId}`} className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Group
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Spelling Practice</h1>
              <p className="text-xl text-gray-600">{group.title}: Build words with letter tiles</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                onClick={() => setShowTeacherControls(!showTeacherControls)} 
                variant="outline"
                className="flex items-center"
              >
                <Settings className="h-4 w-4 mr-2" />
                Controls
              </Button>
              <Button onClick={resetGame} variant="outline" className="flex items-center">
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset
              </Button>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">
                  Words: {wordsCompleted}/{group.spellingWords.length}
                </div>
                <div className="text-sm text-gray-500">Accuracy: {getScorePercentage()}%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Teacher Controls Panel */}
        {showTeacherControls && (
          <Card className="shadow-lg mb-8 bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-purple-800">Teacher Controls</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Game Settings */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-purple-800">Game Settings</h4>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="difficulty">Difficulty Level</Label>
                      <Select value={difficulty} onValueChange={setDifficulty}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="easy">Easy (with hints)</SelectItem>
                          <SelectItem value="normal">Normal</SelectItem>
                          <SelectItem value="hard">Hard (no hints)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Playback Speed: {playbackSpeed[0]}x</Label>
                      <Slider
                        value={playbackSpeed}
                        onValueChange={setPlaybackSpeed}
                        min={0.5}
                        max={2}
                        step={0.25}
                        className="mt-2"
                      />
                    </div>
                  </div>
                </div>

                {/* Controls */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-purple-800">Controls</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Switch 
                        id="auto-advance" 
                        checked={autoAdvance}
                        onCheckedChange={setAutoAdvance}
                      />
                      <Label htmlFor="auto-advance">Auto advance</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch 
                        id="audio-feedback" 
                        checked={audioFeedback}
                        onCheckedChange={setAudioFeedback}
                      />
                      <Label htmlFor="audio-feedback">Audio feedback</Label>
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        onClick={() => setIsPaused(!isPaused)}
                        variant={isPaused ? "default" : "outline"}
                        size="sm"
                      >
                        {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
                      </Button>
                      <Button onClick={nextWord} variant="outline" size="sm">
                        <SkipForward className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Accessibility */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-purple-800">Accessibility</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Switch 
                        id="high-contrast" 
                        checked={highContrast}
                        onCheckedChange={setHighContrast}
                      />
                      <Label htmlFor="high-contrast">High contrast</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch 
                        id="large-text" 
                        checked={largeText}
                        onCheckedChange={setLargeText}
                      />
                      <Label htmlFor="large-text">Large text</Label>
                    </div>
                    <div className="text-xs text-purple-600">
                      Keyboard: ←→ navigate, Enter/Space select, Backspace remove, Esc clear
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Game Complete Modal */}
        {gameComplete && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <Card className="w-96 shadow-2xl">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Trophy className="h-16 w-16 text-yellow-500" />
                </div>
                <CardTitle className="text-2xl text-green-600">Spelling Master!</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-lg">You completed all spelling words!</p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{score}/{group.spellingWords.length}</div>
                  <div className="text-sm text-green-700">Words Spelled Correctly</div>
                  <div className="text-lg font-semibold text-green-600">{getScorePercentage()}% Accuracy</div>
                  <div className="text-sm text-green-700">Total Points: {score * getDifficultyPoints()}</div>
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
            feedback.type === 'success' ? 'bg-green-500 text-white' : 'bg-orange-500 text-white'
          }`}>
            <div className="flex items-center">
              {feedback.type === 'success' ? 
                <CheckCircle className="h-5 w-5 mr-2" /> : 
                <Target className="h-5 w-5 mr-2" />
              }
              <div>
                <div className="font-semibold">{feedback.message}</div>
                {feedback.points && <div className="text-sm">+{feedback.points} points!</div>}
                {feedback.hint && <div className="text-sm mt-1">{feedback.hint}</div>}
              </div>
            </div>
          </div>
        )}

        {/* Current Word Display */}
        <Card className="shadow-lg mb-8">
          <CardHeader className="text-center">
            <CardTitle className={`${getTextSizeClass()}`}>
              Spell this word: 
              <span className="ml-2 text-3xl font-bold text-blue-600">{targetWord.toUpperCase()}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gray-200 w-32 h-32 rounded-lg flex items-center justify-center mr-6">
                <span className="text-4xl">📷</span>
              </div>
              <div>
                <Button 
                  onClick={() => playAudio(currentWord.audio)}
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
                >
                  <Volume2 className="h-4 w-4 mr-2" />
                  Hear Word
                </Button>
                {showHint && (
                  <div className="mt-4 p-3 bg-yellow-100 rounded-lg">
                    <div className="text-sm text-yellow-800">💡 Hint: {getHintForWord()}</div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Word Builder */}
        <Card className="shadow-lg mb-8">
          <CardHeader>
            <CardTitle className={getTextSizeClass()}>Your Word</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center mb-6">
              <div className="flex space-x-2">
                {Array.from({ length: targetLetters.length }).map((_, index) => (
                  <div
                    key={index}
                    className={`w-16 h-16 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center ${
                      userWord[index] ? 'bg-orange-100 border-orange-400' : 'bg-gray-50'
                    }`}
                  >
                    {userWord[index] && (
                      <span className="text-2xl font-bold text-orange-600">
                        {userWord[index].toUpperCase()}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center space-x-2">
              <Button onClick={clearWord} variant="outline" disabled={isPaused}>
                <XCircle className="h-4 w-4 mr-2" />
                Clear
              </Button>
              <Button 
                onClick={checkWord} 
                disabled={userWord.length !== targetLetters.length || isPaused}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
              >
                <CheckCircle className="h-4 w-4 mr-2" />
                Check Word
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Available Letters */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className={getTextSizeClass()}>Available Letters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
              {availableLetters.map((letter, index) => (
                <Button
                  key={`${letter}-${index}`}
                  ref={el => letterButtonsRef.current[index] = el}
                  onClick={() => addLetter(letter)}
                  disabled={isPaused}
                  className={`h-16 text-xl font-bold rounded-xl transition-all duration-200 ${
                    focusedLetterIndex === index
                      ? 'ring-4 ring-blue-400 bg-blue-500 text-white'
                      : 'bg-white text-gray-800 border-2 border-gray-300 hover:border-blue-400 hover:scale-105'
                  } ${getTextSizeClass()}`}
                >
                  {letter.toUpperCase()}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button 
            onClick={previousWord} 
            disabled={currentWordIndex === 0 || isPaused}
            variant="outline"
          >
            Previous Word
          </Button>
          <div className="text-center">
            <div className="text-sm text-gray-500">
              Word {currentWordIndex + 1} of {group.spellingWords.length}
            </div>
          </div>
          <Button 
            onClick={nextWord} 
            disabled={currentWordIndex === group.spellingWords.length - 1 || isPaused}
            variant="outline"
          >
            Next Word
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SpellingGame

