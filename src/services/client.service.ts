import clientRepository from '@/repositories/client.repository'

export const login = async (email: string) => {
  if (!email) {
    throw new Error('Email is not valid')
  }

  const clientExists = await clientRepository.findOne({
    where: {
      email
    }
  })

  if (clientExists) {
    clientExists.update({
      last_activity: new Date()
    })
    return clientExists
  }

  return await clientRepository.create({
    email,
    last_activity: new Date()
  })
}

export const getAll = async () => {
  const clients = await clientRepository.findAll({
    order: [
      ['client_id', 'ASC']
    ],
    raw: true
  })

  return clients
}
