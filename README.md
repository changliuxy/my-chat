# my-chat

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 文件目录结构
```
- frontend
  - public
    - index.html
    - favicon.ico
  - src
    - assets
      - images
      - styles
    - components
      - Chat
        - Chat.vue
        - Message.vue
      - FriendList
        - FriendList.vue
        - Friend.vue
      - GroupList
        - GroupList.vue
        - Group.vue
      - Profile
        - Profile.vue
        - Avatar.vue
      - Account
        - Login.vue
        - Register.vue
      - Admin
        - Admin.vue
      - VoiceCall
        - VoiceCall.vue
      - VideoCall
        - VideoCall.vue
    - router
      - index.js
    - store
      - index.js
      - modules
        - user.js
        - friends.js
        - groups.js
    - App.vue
    - main.js
  - package.json
  - README.md
- backend
  - main.go
  - api
    - v1
      - user.go
      - friend.go
      - group.go
      - message.go
      - file.go
      - voicecall.go
      - videocall.go
  - config
    - config.go
  - middleware
    - middleware.go
  - model
    - user.go
    - friend.go
    - group.go
    - message.go
    - file.go
    - voicecall.go
    - videocall.go
  - pkg
    - utils
      - utils.go
  - storage
    - files
    - images
  - go.mod
  - README.md
```