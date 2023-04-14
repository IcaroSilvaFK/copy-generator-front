import { CopyResponse } from '../../components/templates/CopyResponse'
import { HistoryChats } from '../../components/templates/HistoryChats'
import { Layout } from '../../layout'

export default function Page() {
  return (
    <Layout>
      <HistoryChats />
      <CopyResponse />
    </Layout>
  )
}
