import * as Responses from './responses.ts';

export function performPullInRepository(path: string) {
  const command = new Deno.Command('git', { args: ['pull'], cwd: path, stderr: 'inherit', stdout: 'inherit' })
  return command.output();
}

export async function runDeploymentScriptWithArgument(argument: string) {
  const command = new Deno.Command('sh', { args: ['./deploy.sh', argument], stderr: 'inherit', stdout: 'inherit' })
  const result = await command.output()
  const code = result.code
  if (code != 0) return Responses.deploymentScriptFailedResponse
  return Responses.successfulResponse
}
