import "https://deno.land/x/dotenv@v3.2.2/load.ts"

export const PORT = +(Deno.env.get('PORT') || 8080)

export const MODULES_FRONTEND_REPOSITORY_ID = Deno.env.get('MODULES_FRONTEND_REPOSITORY_ID') || '0'

export const MODULES_BACKEND_REPOSITORY_ID = Deno.env.get('MODULES_BACKEND_REPOSITORY_ID') || '0'