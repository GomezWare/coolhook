# CoolHook

CoolHook is a service for call a coolify webhook of your web aplication using urlparams.

This is more insecure than default method but if the only way we have to call the webhook callback
is using a url like Netlify this tool is what you need.

[Official Coolify webhook documentation](https://coolify.io/docs/api-reference/deploy-webhook)

## Install

1. Add a new project to your coolify server for coolhook.
2. Add a new resource to the project (Git public repository)
3. Set this repository URL ```https://github.com/GomezWare/coolhook```