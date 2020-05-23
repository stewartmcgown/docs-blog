import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <h1>Google Docs Blog</h1>
      <h2>
        Blazing Fast Google Docs Blog with Next.js'{' '}
        <ExtLink
          href="https://github.com/zeit/next.js/issues/9524"
          className="dotted"
          style={{ color: 'inherit' }}
        >
          SSG
        </ExtLink>
      </h2>

      <Features />

      <div className="explanation">
        <p>
          This is a statically generated{' '}
          <ExtLink href="https://nextjs.org">Next.js</ExtLink> site with a{' '}
          <ExtLink href="https://docs.google.com">Google Docs</ExtLink> backend.
        </p>

    
      </div>
    </div>
  </>
)
