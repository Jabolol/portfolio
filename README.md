![Open Graph preview](https://javirios.com/api/og)

## Getting started

Install deno if you haven't already:

```sh
curl -fsSL https://deno.land/x/install/install.sh | sh
```

Clone the repo:

```sh
git clone git@github.com:Jabolol/portfolio.git .
```

Set up environment variables:

```sh
cp .env.example .env
```

Edit `.env` and add your GitHub username and other variables:

```env
GITHUB_USERNAME=your_github_username
SITE_URL=https://yourdomain.com
```

Run the development server:

```sh
deno task start
```
