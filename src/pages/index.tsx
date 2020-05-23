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
      <img
        src="/zeit-and-Docs.png"
        height="85"
        width="250"
        alt="Vercel + Docs"
      />
      <h1>My Docs Blog</h1>
      <h2>
        Blazing Fast Docs Blog with Next.js'{' '}
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
          <ExtLink href="https://Docs.so">Docs</ExtLink> powered blog that
          is deployed with <ExtLink href="https://vercel.com">Vercel</ExtLink>. It
          leverages some upcoming features in Next.js like{' '}
          <ExtLink href="https://github.com/zeit/next.js/issues/9524">
            SSG support
          </ExtLink>{' '}
          and{' '}
          <ExtLink href="https://github.com/zeit/next.js/issues/8626">
            built-in CSS support
          </ExtLink>{' '}
          which allow us to achieve all of the benefits listed above including
          blazing fast speeds, great local editing experience, and always being
          available!
        </p>

        <p>
          Get started by creating a new page in Docs and clicking the deploy
          button below. After you supply your token and the blog index id (the
          page's id in Docs) we will automatically create the table for you!
          See{' '}
          <ExtLink href="https://github.com/ijjk/Docs-blog#getting-blog-index-and-token">
            here in the readme
          </ExtLink>{' '}
          for finding the new page's id. To get your token from Docs, login
          and look for a cookie under www.Docs.so with the name `token_v2`.
          After finding your token and your blog's page id you should be good to
          go!
        </p>
      </div>
    </div>
  </>
)