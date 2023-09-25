import { logError } from '@/utils/helpers'

const challengesURL = 'https://eoyge3duj7xtdqd.m.pipedream.net/'

const fetchChallenges = async () => {
  try {
    const response = await fetch(challengesURL)
    return response.json()
  } catch (error) {
    logError(error)
  }
}

export { fetchChallenges }
