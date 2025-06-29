// Phonics content data for Ladder Lessons
// This would typically come from Firebase, but we'll use static data for now

export const phonicsGroups = {
  'group-1': {
    id: 'group-1',
    title: 'Group 1: s, a, t',
    description: 'Foundation sounds for beginning readers',
    letters: ['s', 'a', 't'],
    sounds: {
      's': {
        letter: 's',
        ipa: '/s/',
        audioUrl: '/audio/s.mp3',
        words: ['sun', 'sat', 'sip'],
        images: {
          'sun': '/images/sun.jpg',
          'sat': '/images/sat.jpg', 
          'sip': '/images/sip.jpg'
        }
      },
      'a': {
        letter: 'a',
        ipa: '/æ/',
        audioUrl: '/audio/a.mp3',
        words: ['apple', 'ant', 'at'],
        images: {
          'apple': '/images/apple.jpg',
          'ant': '/images/ant.jpg',
          'at': '/images/at.jpg'
        }
      },
      't': {
        letter: 't',
        ipa: '/t/',
        audioUrl: '/audio/t.mp3',
        words: ['tree', 'top', 'tap'],
        images: {
          'tree': '/images/tree.jpg',
          'top': '/images/top.jpg',
          'tap': '/images/tap.jpg'
        }
      }
    },
    songs: {
      's': {
        title: 'S Song',
        videoUrl: '/videos/s-song.mp4',
        lyrics: 'S says /s/, S says /s/, Sun and Sat and Sip!'
      },
      'a': {
        title: 'A Song', 
        videoUrl: '/videos/a-song.mp4',
        lyrics: 'A says /æ/, A says /æ/, Apple, Ant, and At!'
      },
      't': {
        title: 'T Song',
        videoUrl: '/videos/t-song.mp4', 
        lyrics: 'T says /t/, T says /t/, Tree and Top and Tap!'
      }
    },
    matchingPairs: [
      { letter: 's', word: 'sun', image: '/images/sun.jpg' },
      { letter: 'a', word: 'apple', image: '/images/apple.jpg' },
      { letter: 't', word: 'tree', image: '/images/tree.jpg' }
    ],
    spellingWords: [
      { word: 'sat', letters: ['s', 'a', 't'], image: '/images/cat.jpg', audio: '/audio/sat.mp3' },
      { word: 'at', letters: ['a', 't'], image: '/images/at.jpg', audio: '/audio/at.mp3' },
      { word: 'as', letters: ['a', 's'], image: '/images/as.jpg', audio: '/audio/as.mp3' }
    ]
  },
  'group-2': {
    id: 'group-2',
    title: 'Group 2: p, i, n',
    description: 'Building on basics',
    letters: ['p', 'i', 'n'],
    sounds: {
      'p': {
        letter: 'p',
        ipa: '/p/',
        audioUrl: '/audio/p.mp3',
        words: ['pig', 'pat', 'pin'],
        images: {
          'pig': '/images/pig.jpg',
          'pat': '/images/pat.jpg',
          'pin': '/images/pin.jpg'
        }
      },
      'i': {
        letter: 'i',
        ipa: '/ɪ/',
        audioUrl: '/audio/i.mp3',
        words: ['ink', 'it', 'in'],
        images: {
          'ink': '/images/ink.jpg',
          'it': '/images/it.jpg',
          'in': '/images/in.jpg'
        }
      },
      'n': {
        letter: 'n',
        ipa: '/n/',
        audioUrl: '/audio/n.mp3',
        words: ['net', 'nap', 'not'],
        images: {
          'net': '/images/net.jpg',
          'nap': '/images/nap.jpg',
          'not': '/images/not.jpg'
        }
      }
    },
    songs: {
      'p': {
        title: 'P Song',
        videoUrl: '/videos/p-song.mp4',
        lyrics: 'P says /p/, P says /p/, Pig and Pat and Pin!'
      },
      'i': {
        title: 'I Song',
        videoUrl: '/videos/i-song.mp4',
        lyrics: 'I says /ɪ/, I says /ɪ/, Ink and It and In!'
      },
      'n': {
        title: 'N Song',
        videoUrl: '/videos/n-song.mp4',
        lyrics: 'N says /n/, N says /n/, Net and Nap and Not!'
      }
    },
    matchingPairs: [
      { letter: 'p', word: 'pig', image: '/images/pig.jpg' },
      { letter: 'i', word: 'ink', image: '/images/ink.jpg' },
      { letter: 'n', word: 'net', image: '/images/net.jpg' }
    ],
    spellingWords: [
      { word: 'pin', letters: ['p', 'i', 'n'], image: '/images/pin.jpg', audio: '/audio/pin.mp3' },
      { word: 'pit', letters: ['p', 'i', 't'], image: '/images/pit.jpg', audio: '/audio/pit.mp3' },
      { word: 'nap', letters: ['n', 'a', 'p'], image: '/images/nap.jpg', audio: '/audio/nap.mp3' },
      { word: 'pan', letters: ['p', 'a', 'n'], image: '/images/pan.jpg', audio: '/audio/pan.mp3' },
      { word: 'tap', letters: ['t', 'a', 'p'], image: '/images/tap.jpg', audio: '/audio/tap.mp3' }
    ]
  },
  'group-3': {
    id: 'group-3',
    title: 'Group 3: m, d, g',
    description: 'Expanding vocabulary',
    letters: ['m', 'd', 'g'],
    sounds: {
      'm': {
        letter: 'm',
        ipa: '/m/',
        audioUrl: '/audio/m.mp3',
        words: ['mat', 'map', 'man'],
        images: {
          'mat': '/images/mat.jpg',
          'map': '/images/map.jpg',
          'man': '/images/man.jpg'
        }
      },
      'd': {
        letter: 'd',
        ipa: '/d/',
        audioUrl: '/audio/d.mp3',
        words: ['dog', 'dad', 'dig'],
        images: {
          'dog': '/images/dog.jpg',
          'dad': '/images/dad.jpg',
          'dig': '/images/dig.jpg'
        }
      },
      'g': {
        letter: 'g',
        ipa: '/g/',
        audioUrl: '/audio/g.mp3',
        words: ['gap', 'got', 'gas'],
        images: {
          'gap': '/images/gap.jpg',
          'got': '/images/got.jpg',
          'gas': '/images/gas.jpg'
        }
      }
    },
    songs: {
      'm': {
        title: 'M Song',
        videoUrl: '/videos/m-song.mp4',
        lyrics: 'M says /m/, M says /m/, Mat and Map and Man!'
      },
      'd': {
        title: 'D Song',
        videoUrl: '/videos/d-song.mp4',
        lyrics: 'D says /d/, D says /d/, Dog and Dad and Dig!'
      },
      'g': {
        title: 'G Song',
        videoUrl: '/videos/g-song.mp4',
        lyrics: 'G says /g/, G says /g/, Gap and Got and Gas!'
      }
    },
    matchingPairs: [
      { letter: 'm', word: 'mat', image: '/images/mat.jpg' },
      { letter: 'd', word: 'dog', image: '/images/dog.jpg' },
      { letter: 'g', word: 'gap', image: '/images/gap.jpg' }
    ],
    spellingWords: [
      { word: 'mad', letters: ['m', 'a', 'd'], image: '/images/mad.jpg', audio: '/audio/mad.mp3' },
      { word: 'dig', letters: ['d', 'i', 'g'], image: '/images/dig.jpg', audio: '/audio/dig.mp3' },
      { word: 'gap', letters: ['g', 'a', 'p'], image: '/images/gap.jpg', audio: '/audio/gap.mp3' },
      { word: 'tag', letters: ['t', 'a', 'g'], image: '/images/tag.jpg', audio: '/audio/tag.mp3' }
    ]
  }
}

// Helper functions
export const getGroupById = (groupId) => {
  return phonicsGroups[groupId] || null
}

export const getAllGroups = () => {
  return Object.values(phonicsGroups)
}

export const getAvailableLetters = (groupId) => {
  // For spelling games, include letters from current and previous groups
  const allLetters = []
  const groupIds = Object.keys(phonicsGroups)
  const currentIndex = groupIds.indexOf(groupId)
  
  for (let i = 0; i <= currentIndex; i++) {
    const group = phonicsGroups[groupIds[i]]
    if (group) {
      allLetters.push(...group.letters)
    }
  }
  
  return allLetters
}

// Mock audio playback function (would use Web Audio API in production)
export const playAudio = (audioUrl) => {
  console.log(`Playing audio: ${audioUrl}`)
  // In a real implementation, this would play the audio file
  // For now, we'll just log it since we don't have actual audio files
}

export default phonicsGroups

