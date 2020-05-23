# Docs Blog

This is an example Next.js project that shows Next.js' upcoming SSG (static-site generation) support using Docs's **private** API for a backend.

**Note**: This example uses the experimental SSG hooks only available in the Next.js canary branch! The APIs used within this example will change over time. Since it is using a private API and experimental features, use at your own risk as these things could change at any moment.

**Live Example hosted on ZEIT**: https://Docs-blog.now.sh/

## Getting Started

To view the steps to setup Docs to work with this example view the post at https://Docs-blog.now.sh/blog/my-first-post or follow the steps below.

## Create a Service Account

 1. In the Google Developer Console, create a new project
 2. Enable the Google Drive API along with the Google Docs API.
 3. Then, create a Service Account and download the credentials for it. You'll need the Private Key and email.


## Prepare a folder

Create a folder in your Drive and share it with the email of your service account.

## Deployment on Vercel

Set the following Vercel secrets using the CLI:

```
@google-email
@google-pk
@google-root
```

## Running Locally

1. Install dependencies `yarn`
2. Create a `.env` file and fill it with the properties
3. `yarn dev`

## Credits

- Inspired by [Notion Blog by @ijjk](https://github.com/ijjk/notion-blog)
