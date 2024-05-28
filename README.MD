# CoolHook

CoolHook is a service for call a coolify webhook of your web aplication using urlparams.

This is more insecure than default method but if the only way we have to call the webhook callback
is using a url like Netlify this tool is what you need.

[Official Coolify webhook documentation](https://coolify.io/docs/api-reference/deploy-webhook)

## Install

1. Add a new project to your coolify server for coolhook.
2. Add a new resource to the project (Git public repository)
3. Set this repository as URL `https://github.com/GomezWare/coolhook`

   - Select Branch master
   - Select Nixpacks as build pack
   - Remeber running this on 80 port

4. Configure the project

   - Set a url with your domain for this service (https://coolhook.example.com)
   - Set `npm i` as install command
   - Set `npm run build` as build command
   - Set `node ./dist/server/entry.mjs` as start command

5. Add eviroment variables (Example)

   - COOLIFY_DOMAIN=coolify.example.com
   - COOLIFY_API_TOKEN=0|gEneTatetHistOkeNInKeYs&TokenS/Api

6. Deploy the app

## Use

Now the callback will be:
`https://coolhook.example.com?uuid=yourappuuid`

You can check your app uuid on webhooks panel.
