exports.handler = async function (event, context) {
  const rawNetlifyContext = context.clientContext.custom.netlify;
  const netlifyContext = Buffer.from(rawNetlifyContext, 'base64').toString('utf-8');
  const { identity, user } = JSON.parse(netlifyContext);
  // Do stuff and return a response...
};
