import Link from 'next/link'
import fetch from 'node-fetch'
import { useRouter } from 'next/router'
import Header from '../../components/header'
import Heading from '../../components/heading'
import components from '../../components/dynamic'
import ReactJSXParser from '@zeit/react-jsx-parser'
import blogStyles from '../../styles/blog.module.css'

import React, { CSSProperties, useEffect } from 'react'
import { getBlogLink, getDateStr } from '../../lib/blog-helpers'
import { getDoc } from '../../lib/drive/getPages'
import { docs_v1 } from 'googleapis'

// Get the data for each blog post
export async function getStaticProps({ params: { id, name }, preview }) {
  // load the postsTable so that we can get the page's ID
  const post = await getDoc(id); 

  
  return {
    props: {
      post,
      preview: preview || false,
    },
    revalidate: 10,
  }
}

// Return our list of blog posts to prerender
export async function getStaticPaths() {
  // we fallback for any unpublished posts to save build time
  // for actually published ones
  return {
    paths: [],
    fallback: true,
  }
}

const listTypes = new Set(['bulleted_list', 'numbered_list'])

const RenderPost = ({ post, redirect, preview }: { post: docs_v1.Schema$Document; redirect: string; preview: boolean;}) => {
  const router = useRouter()

  let listTagName: string | null = null
  let listLastId: string | null = null
  let listMap: {
    [id: string]: {
      key: string
      isNested?: boolean
      nested: string[]
      children: React.ReactFragment
    }
  } = {}

  useEffect(() => {
    if (redirect && !post) {
      router.replace(redirect)
    }
  }, [redirect, post])

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  // if you don't have a post at this point, and are not
  // loading one from fallback then  redirect back to the index
  if (!post) {
    return (
      <div className={blogStyles.post}>
        <p>
          Woops! didn't find that post, redirecting you back to the blog index
        </p>
      </div>
    )
  }

  return (
    <>
      <Header titlePre={post.title} />
      {preview && (
        <div className={blogStyles.previewAlertContainer}>
          <div className={blogStyles.previewAlert}>
            <b>Note:</b>
            {` `}Viewing in preview mode{' '}
            <Link href={`/api/clear-preview?slug=${post.title}`}>
              <button className={blogStyles.escapePreview}>Exit Preview</button>
            </Link>
          </div>
        </div>
      )}
      <div className={blogStyles.post}>
        <h1>{post.title}</h1>


        <hr />

        {(!post.body) && (
          <p>This post has no content</p>
        )}

          
      </div>
    </>
  )
}

export default RenderPost
