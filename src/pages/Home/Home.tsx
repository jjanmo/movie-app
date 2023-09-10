import Layout from '@components/Layout'
import SearchBar from '@components/SearchBar'

export default function Home() {
  return (
    <Layout>
      <SearchBar onSubmit={() => {}} />
      <section></section>
      This is Home
    </Layout>
  )
}
