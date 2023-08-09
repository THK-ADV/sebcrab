export const successfulResponse = new Response('Backend deployment triggered.',   { status: 200 });
export const scriptFailedResponse = new Response('Deployment script failed.',       { status: 500 });
export const missingBodyResponse =  new Response('Body expected but no body sent',  { status: 400 });
export const unknownRepoResponse =  new Response('Unknown sender repository.',      { status: 401 });
export const deploymentScriptFailedResponse = new Response('Deployment script failed.', { status: 500 });