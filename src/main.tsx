import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.tsx'
import GlobalStyles from '@styles/GlobalStyles.ts'
import { RecoilRoot } from 'recoil'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <GlobalStyles />
    <RouterProvider router={router} />
  </RecoilRoot>
)
