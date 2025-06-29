// Comprehensive phonics content for Ladder Lessons
// This includes multiple groups with progressive difficulty

export const phonicsGroups = {
  'group-1': {
    id: 'group-1',
    name: 'Group 1',
    title: 's, a, t',
    description: 'First sounds - the foundation of reading',
    difficulty: 1,
    letters: [
      { letter: 's', ipa: '/s/', sound: 'sss', examples: ['sun', 'snake', 'sock'] },
      { letter: 'a', ipa: '/æ/', sound: 'ah', examples: ['apple', 'ant', 'axe'] },
      { letter: 't', ipa: '/t/', sound: 'tuh', examples: ['tree', 'top', 'tent'] }
    ],
    songs: [
      { id: 's-song', title: 'S Song', letter: 's', duration: '1:30', audioUrl: '/audio/s-song.mp3' },
      { id: 'a-song', title: 'A Song', letter: 'a', duration: '1:25', audioUrl: '/audio/a-song.mp3' },
      { id: 't-song', title: 'T Song', letter: 't', duration: '1:35', audioUrl: '/audio/t-song.mp3' }
    ],
    matchingPairs: [
      { letter: 's', image: '🌞', word: 'sun', audioUrl: '/audio/sun.mp3' },
      { letter: 'a', image: '🍎', word: 'apple', audioUrl: '/audio/apple.mp3' },
      { letter: 't', image: '🌳', word: 'tree', audioUrl: '/audio/tree.mp3' }
    ],
    spellingWords: [
      { word: 'sat', image: '🐱', letters: ['s', 'a', 't'], audioUrl: '/audio/sat.mp3' },
      { word: 'at', image: '👉', letters: ['a', 't'], audioUrl: '/audio/at.mp3' },
      { word: 'as', image: '➡️', letters: ['a', 's'], audioUrl: '/audio/as.mp3' }
    ],
    unlocked: true,
    requiredPlan: 'free'
  },
  
  'group-2': {
    id: 'group-2',
    name: 'Group 2',
    title: 'i, p, n',
    description: 'Building on the basics with new sounds',
    difficulty: 2,
    letters: [
      { letter: 'i', ipa: '/ɪ/', sound: 'ih', examples: ['igloo', 'ink', 'insect'] },
      { letter: 'p', ipa: '/p/', sound: 'puh', examples: ['pig', 'pen', 'pot'] },
      { letter: 'n', ipa: '/n/', sound: 'nuh', examples: ['net', 'nose', 'nut'] }
    ],
    songs: [
      { id: 'i-song', title: 'I Song', letter: 'i', duration: '1:28', audioUrl: '/audio/i-song.mp3' },
      { id: 'p-song', title: 'P Song', letter: 'p', duration: '1:32', audioUrl: '/audio/p-song.mp3' },
      { id: 'n-song', title: 'N Song', letter: 'n', duration: '1:27', audioUrl: '/audio/n-song.mp3' }
    ],
    matchingPairs: [
      { letter: 'i', image: '🧊', word: 'ice', audioUrl: '/audio/ice.mp3' },
      { letter: 'p', image: '🐷', word: 'pig', audioUrl: '/audio/pig.mp3' },
      { letter: 'n', image: '🥜', word: 'nut', audioUrl: '/audio/nut.mp3' }
    ],
    spellingWords: [
      { word: 'pin', image: '📌', letters: ['p', 'i', 'n'], audioUrl: '/audio/pin.mp3' },
      { word: 'pit', image: '🕳️', letters: ['p', 'i', 't'], audioUrl: '/audio/pit.mp3' },
      { word: 'nap', image: '😴', letters: ['n', 'a', 'p'], audioUrl: '/audio/nap.mp3' },
      { word: 'pan', image: '🍳', letters: ['p', 'a', 'n'], audioUrl: '/audio/pan.mp3' }
    ],
    unlocked: false,
    requiredPlan: 'basic'
  },

  'group-3': {
    id: 'group-3',
    name: 'Group 3',
    title: 'm, d, g',
    description: 'Expanding vocabulary with more consonants',
    difficulty: 3,
    letters: [
      { letter: 'm', ipa: '/m/', sound: 'mmm', examples: ['mouse', 'moon', 'map'] },
      { letter: 'd', ipa: '/d/', sound: 'duh', examples: ['dog', 'door', 'duck'] },
      { letter: 'g', ipa: '/g/', sound: 'guh', examples: ['goat', 'gate', 'gift'] }
    ],
    songs: [
      { id: 'm-song', title: 'M Song', letter: 'm', duration: '1:31', audioUrl: '/audio/m-song.mp3' },
      { id: 'd-song', title: 'D Song', letter: 'd', duration: '1:29', audioUrl: '/audio/d-song.mp3' },
      { id: 'g-song', title: 'G Song', letter: 'g', duration: '1:33', audioUrl: '/audio/g-song.mp3' }
    ],
    matchingPairs: [
      { letter: 'm', image: '🐭', word: 'mouse', audioUrl: '/audio/mouse.mp3' },
      { letter: 'd', image: '🐕', word: 'dog', audioUrl: '/audio/dog.mp3' },
      { letter: 'g', image: '🐐', word: 'goat', audioUrl: '/audio/goat.mp3' }
    ],
    spellingWords: [
      { word: 'mad', image: '😠', letters: ['m', 'a', 'd'], audioUrl: '/audio/mad.mp3' },
      { word: 'dig', image: '⛏️', letters: ['d', 'i', 'g'], audioUrl: '/audio/dig.mp3' },
      { word: 'gap', image: '🕳️', letters: ['g', 'a', 'p'], audioUrl: '/audio/gap.mp3' },
      { word: 'map', image: '🗺️', letters: ['m', 'a', 'p'], audioUrl: '/audio/map.mp3' }
    ],
    unlocked: false,
    requiredPlan: 'basic'
  },

  'group-4': {
    id: 'group-4',
    name: 'Group 4',
    title: 'o, c, k',
    description: 'New vowel and consonant combinations',
    difficulty: 4,
    letters: [
      { letter: 'o', ipa: '/ɒ/', sound: 'oh', examples: ['octopus', 'orange', 'ox'] },
      { letter: 'c', ipa: '/k/', sound: 'kuh', examples: ['cat', 'cup', 'car'] },
      { letter: 'k', ipa: '/k/', sound: 'kuh', examples: ['kite', 'key', 'king'] }
    ],
    songs: [
      { id: 'o-song', title: 'O Song', letter: 'o', duration: '1:26', audioUrl: '/audio/o-song.mp3' },
      { id: 'c-song', title: 'C Song', letter: 'c', duration: '1:34', audioUrl: '/audio/c-song.mp3' },
      { id: 'k-song', title: 'K Song', letter: 'k', duration: '1:30', audioUrl: '/audio/k-song.mp3' }
    ],
    matchingPairs: [
      { letter: 'o', image: '🐙', word: 'octopus', audioUrl: '/audio/octopus.mp3' },
      { letter: 'c', image: '🐱', word: 'cat', audioUrl: '/audio/cat.mp3' },
      { letter: 'k', image: '🪁', word: 'kite', audioUrl: '/audio/kite.mp3' }
    ],
    spellingWords: [
      { word: 'cot', image: '🛏️', letters: ['c', 'o', 't'], audioUrl: '/audio/cot.mp3' },
      { word: 'dock', image: '⚓', letters: ['d', 'o', 'c', 'k'], audioUrl: '/audio/dock.mp3' },
      { word: 'pick', image: '⛏️', letters: ['p', 'i', 'c', 'k'], audioUrl: '/audio/pick.mp3' },
      { word: 'sock', image: '🧦', letters: ['s', 'o', 'c', 'k'], audioUrl: '/audio/sock.mp3' }
    ],
    unlocked: false,
    requiredPlan: 'basic'
  },

  'group-5': {
    id: 'group-5',
    name: 'Group 5',
    title: 'e, u, r',
    description: 'Completing the vowels and adding R',
    difficulty: 5,
    letters: [
      { letter: 'e', ipa: '/e/', sound: 'eh', examples: ['elephant', 'egg', 'end'] },
      { letter: 'u', ipa: '/ʌ/', sound: 'uh', examples: ['umbrella', 'up', 'under'] },
      { letter: 'r', ipa: '/r/', sound: 'rrr', examples: ['rabbit', 'red', 'run'] }
    ],
    songs: [
      { id: 'e-song', title: 'E Song', letter: 'e', duration: '1:28', audioUrl: '/audio/e-song.mp3' },
      { id: 'u-song', title: 'U Song', letter: 'u', duration: '1:31', audioUrl: '/audio/u-song.mp3' },
      { id: 'r-song', title: 'R Song', letter: 'r', duration: '1:29', audioUrl: '/audio/r-song.mp3' }
    ],
    matchingPairs: [
      { letter: 'e', image: '🐘', word: 'elephant', audioUrl: '/audio/elephant.mp3' },
      { letter: 'u', image: '☂️', word: 'umbrella', audioUrl: '/audio/umbrella.mp3' },
      { letter: 'r', image: '🐰', word: 'rabbit', audioUrl: '/audio/rabbit.mp3' }
    ],
    spellingWords: [
      { word: 'red', image: '🔴', letters: ['r', 'e', 'd'], audioUrl: '/audio/red.mp3' },
      { word: 'run', image: '🏃', letters: ['r', 'u', 'n'], audioUrl: '/audio/run.mp3' },
      { word: 'pet', image: '🐕', letters: ['p', 'e', 't'], audioUrl: '/audio/pet.mp3' },
      { word: 'cup', image: '☕', letters: ['c', 'u', 'p'], audioUrl: '/audio/cup.mp3' }
    ],
    unlocked: false,
    requiredPlan: 'premium'
  }
}

// Helper functions
export const getGroupById = (groupId) => {
  return phonicsGroups[groupId] || null
}

export const getAllGroups = () => {
  return Object.values(phonicsGroups)
}

export const getGroupsByPlan = (planId) => {
  const groups = getAllGroups()
  
  switch (planId) {
    case 'free':
      return groups.filter(group => group.requiredPlan === 'free')
    case 'basic':
      return groups.filter(group => ['free', 'basic'].includes(group.requiredPlan))
    case 'premium':
    case 'annual':
      return groups // All groups
    default:
      return groups.filter(group => group.requiredPlan === 'free')
  }
}

export const canAccessGroup = (groupId, userPlan) => {
  const group = getGroupById(groupId)
  if (!group) return false
  
  const accessibleGroups = getGroupsByPlan(userPlan)
  return accessibleGroups.some(g => g.id === groupId)
}

export const getProgressData = (userPlan) => {
  const accessibleGroups = getGroupsByPlan(userPlan)
  const totalGroups = getAllGroups().length
  
  return {
    accessibleCount: accessibleGroups.length,
    totalCount: totalGroups,
    percentage: Math.round((accessibleGroups.length / totalGroups) * 100),
    nextGroup: getAllGroups().find(group => !accessibleGroups.includes(group))
  }
}

// Mock audio playback function
export const playAudio = (audioUrl) => {
  console.log(`Playing audio: ${audioUrl}`)
  // In a real implementation, this would use the Web Audio API or HTML5 audio
  // For demo purposes, we'll just log the action
  
  // Simulate audio feedback
  if (window.speechSynthesis) {
    const utterance = new SpeechSynthesisUtterance('Audio playing')
    utterance.rate = 0.8
    utterance.pitch = 1.2
    window.speechSynthesis.speak(utterance)
  }
}

// Text-to-speech for phoneme pronunciation
export const speakPhoneme = (letter, ipa) => {
  if (window.speechSynthesis) {
    const utterance = new SpeechSynthesisUtterance(letter)
    utterance.rate = 0.6
    utterance.pitch = 1.1
    window.speechSynthesis.speak(utterance)
  }
  console.log(`Speaking phoneme: ${letter} (${ipa})`)
}

// Generate random usage statistics
export const generateUsageStats = (userPlan) => {
  const accessibleGroups = getGroupsByPlan(userPlan)
  const maxGroups = accessibleGroups.length
  
  return {
    groupsAccessed: Math.min(Math.floor(Math.random() * maxGroups) + 1, maxGroups),
    maxGroups: userPlan === 'premium' || userPlan === 'annual' ? -1 : maxGroups,
    gamesPlayed: Math.floor(Math.random() * 100) + 20,
    studentsTaught: Math.floor(Math.random() * 50) + 10,
    hoursUsed: Math.floor(Math.random() * 40) + 5,
    favoriteGame: Math.random() > 0.5 ? 'Matching' : 'Spelling'
  }
}

export default phonicsGroups

