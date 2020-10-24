This video was helpful
https://www.youtube.com/watch?v=BhArBPtW6Ms

### You need to install vercel CLI
`npm install -g vercel`

### To run in development
`vercel dev`

### To preview deploy
`vercel`

### To production deploy
`vercel --prod`

### What the api exports

You to `POST` to `/api/contact` with something like
```json
{
    "name": "Joshua Wootonn",
    "email": "joshuawootonn@gmail.com",
    "subject": "Getting involved - Freshman Church",
    "message": "Hi Mikey,  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus posuere augue pulvinar diam neque, pretium. Sit sagittis enim placerat sit. Feugiat cursus orci, consequat risus. Tempor suscipit eget phasellus molestie urna viverra.  Thanks, Josh",
    "to": "joshuawootonn@gmail.com"
}
```