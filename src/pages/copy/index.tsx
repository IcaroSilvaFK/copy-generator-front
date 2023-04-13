import { CopyFormGenerator } from '../../components/templates/CopyFormGenerator'
import { CopyResponse } from '../../components/templates/CopyResponse'
import { Layout } from '../../layout'

export default function Page() {
  return (
    <Layout>
      <CopyFormGenerator />
      <CopyResponse />
    </Layout>
  )
}
