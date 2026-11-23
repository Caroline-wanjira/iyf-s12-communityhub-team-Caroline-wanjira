# CommunityHub (IYF Week 9: React Advanced)

Team repository: `iyf-s12-communityhub-team-Caroline-wanjira`

## Overview

CommunityHub is a multi-page React app where members read and write community posts.
Posts are loaded from the [JSONPlaceholder](https://jsonplaceholder.typicode.com) practice API.
Posts you write are stored in your browser (localStorage) and show up next to the fetched ones.

## Features

- Home page with a welcome section, short introduction and recent posts
- Posts page with search, loading and error states, and your own posts shown with the fetched ones
- Post detail page with comments, a back link, and handling for invalid post IDs
- Create post form with validation (saved in localStorage)
- About page with the mission and objectives
- Likes on posts (stretch goal)
- Responsive layout with a mobile menu, header, sidebar and footer
- Five daily challenges (see below)

## Technologies

React 18, Vite, React Router v6, CSS Modules. No other runtime dependencies.

## Installation and running

```bash
npm install
npm run dev        # development server, usually http://localhost:5173
npm run build      # production build into dist/
npm run preview    # preview the production build
```

## Project structure

```
src/
├── components/
│   ├── Layout/        Layout, Header, Sidebar, Footer
│   ├── Post/          PostCard, PostList, CreatePostForm
│   ├── shared/        Button, Input, Card, Modal, Avatar, Tabs,
│   │                  LoadingSpinner, ErrorMessage, index.js
│   └── ProtectedRoute.jsx
├── context/           AuthContext (fake login), PostsContext (API + local posts)
├── hooks/             useFetch, useLocalStorage, useToggle, useForm, useDebounce, usePageTitle
├── pages/             Home, Posts, PostDetail, CreatePost, About, Login, NotFound
│   └── challenges/    Challenges, TimerChallenge, ApiSearch, TabsChallenge, UserProfile
├── App.jsx            route table
└── main.jsx           BrowserRouter + providers
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/posts` | Posts list with search |
| `/posts/:postId` | Post detail |
| `/create-post` | Create post |
| `/about` | About |
| `/login` | Fake login |
| `/challenges` | Daily challenges menu |
| `/challenges/timer`, `/challenges/search`, `/challenges/tabs` | Challenges 1, 2, 3 |
| `/challenges/profile/:userId` | Challenge 4 + 5 (protected: log in first) |
| `*` | 404 Not Found |

## Custom hooks

- `useFetch(url)`: fetches JSON, returns `{ data, loading, error, refetch }`, ignores late responses after unmount, and skips the request when `url` is `null`.
- `useLocalStorage(key, initial)`: like `useState`, but saved in localStorage.
- `useToggle(initial)`: true/false state with `toggle`, `setTrue`, `setFalse` (used by the mobile menu).
- `useForm(initialValues, validate)`: values, errors, touched fields, `validateAll`, `reset`.
- `useDebounce(value, delay)`: used by the user search.
- `usePageTitle(title)`: sets the browser tab title on each page.

## Reusable components (`src/components/shared/`)

Button (variants, sizes, loading state, can act as a router link), Input (label, error text, textarea mode),
Card, Modal (focus handling, Escape to close), Avatar, Tabs (arrow-key support), LoadingSpinner, ErrorMessage.
All are exported from `src/components/shared/index.js`.

## API integration

All data comes from `https://jsonplaceholder.typicode.com`:
`/posts?_limit=30`, `/posts/:id`, `/posts/:id/comments`, `/users`, `/users/:id`, `/users/:id/posts`, `/users/:id/todos`.
JSONPlaceholder does not save new data, which is why created posts live in localStorage.

## Daily challenges

1. **Timer**: start, stop and reset using `useEffect` + `setInterval` with cleanup.
2. **API search**: loads users and filters them after you pause typing (debounced), with loading and error states.
3. **Tabs**: reusable `Tabs` component with a fade-in and arrow-key navigation.
4. **Protected routes**: fake login (any username), username shown in the header, log out, and a members-only route that redirects to `/login` and back.
5. **User profile**: fetches a user, then shows Info, Posts and Todos in separate tabs.

## Testing

Manual checklist (run `npm run dev`):

- [ ] Every route in the table above opens, and an unknown address shows the 404 page
- [ ] Posts load, the search filters them, and turning off the network shows the error message with "Try again"
- [ ] `/posts/99999` shows an error, and `/posts/local-abc` shows "could not be found"
- [ ] Creating a post with empty fields shows validation errors; a valid post appears on `/posts` and survives a refresh
- [ ] The five challenges open from `/challenges`; the profile asks for a login first
- [ ] `npm run build` completes without errors

No automated tests or lint rules are included in this project.

## Accessibility checklist

Built in: semantic landmarks (header, nav, main, aside, footer), skip link, labelled form fields with linked error text,
visible focus outline, descriptive link and button text, `aria-pressed` on like buttons, `aria-expanded` on the mobile menu,
`role="status"` / `role="alert"` for loading, search results and errors, keyboard-friendly Modal and Tabs, no images
(initials avatars are hidden from screen readers because the name is shown beside them), reduced-motion support.

### Running a Lighthouse audit

1. Run `npm run build`, then `npm run preview` and open the link in Chrome.
2. Open DevTools (F12), go to the **Lighthouse** tab, tick **Accessibility**, and click **Analyze page load**.
3. Write down the score and the issues it lists, fix them, and run it again.

| | Score |
| --- | --- |
| Before fixes | _not measured yet_ |
| After fixes | _not measured yet_ |

## Team contributions

_Add each team member's name and what they built here. This file did not contain any existing team information when it was generated._
