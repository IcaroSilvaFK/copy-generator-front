import { GetServerSideProps } from 'next'
import { HistoryChats } from '../../components/templates/HistoryChats'
import { Layout } from '../../layout'
import { prismaClient } from '../../../infra/services/prisma'
import { RequestCopy } from '@prisma/client'
import { HistoryChatCopy } from '../../components/templates/HistoryChatsMessages'

export default function Page(props: { copys: RequestCopy[] }) {
  const { copys } = props

  return (
    <Layout>
      <HistoryChats copys={copys} />
      <HistoryChatCopy />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await prismaClient.requestCopy.findMany()

    const serializingResponse = JSON.parse(JSON.stringify(response))

    return {
      props: {
        copys: serializingResponse,
      },
    }
  } catch {
    return {
      props: {},
      redirect: '/',
    }
  }
}
