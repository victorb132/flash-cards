import * as prismic from '@prismicio/client'

export const repositoryName = 'flash-cards'

export const client = prismic.createClient(repositoryName, {
  accessToken: '',
})