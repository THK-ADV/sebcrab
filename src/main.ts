import {
  PORT,
  MODULES_BACKEND_REPOSITORY_ID,
  MODULES_FRONTEND_REPOSITORY_ID,
} from './environmentVariables.ts'

import {
  performPullInRepository,
  runDeplymentScriptWithArgument,
} from "./utils.ts"

import * as Responses from './responses.ts'

const handler: Deno.ServeHandler = async (request: Request): Promise<Response> => {
  if (!request.body) return Responses.missingBodyResponse

  const data = await request.json()
  const repositoryId = String(data.repository.id)

  switch (repositoryId) {
    case MODULES_FRONTEND_REPOSITORY_ID: {
      await performPullInRepository('/service/modules_frontend')
      return runDeplymentScriptWithArgument('frontend')
    }
    case MODULES_BACKEND_REPOSITORY_ID: {
      await performPullInRepository('/service/modules_backend')
      return runDeplymentScriptWithArgument('backend')
    }
    default:
      return Responses.unknownRepoResponse
  }
}

Deno.serve({ port: PORT }, handler)