# Alexa skill development done right: Basic setup

This repo is used as template for a alexa skill development setup.

The details and motivations are explained in a medium post: [https://medium.com/@feedm3](https://medium.com/@feedm3)

## Prerequesites

- Node & NPM
- ASK CLI

## Deploy

Typically you create a new skill with `ask new` command but as this will create a slightly different folder structure
that is used in this template here you should create the skill once in the developer console. You just have to create
the skill there, add a name and invocation and then grab the skill id. All other stuff will be configured in the config 
files from this template.

So, after you have created the skill in the developer console do the following:

1. Setup the [ask cli](https://developer.amazon.com/de/docs/smapi/quick-start-alexa-skills-kit-command-line-interface.html) 
and [aws credentials](https://serverless.com/framework/docs/providers/aws/guide/credentials/)
2. Rename the [config.example](./.ask/config.example) to `config` and replace `YOUR_SKILL_ID` with the skill id you copied
3. Run `npm install`
4. Deploy the skills function with `npm run deploy:init`. 
5. Display the functions arn with `npm run deploy:info`. Copy the arn, but without the trailing number (should be ':1')
5. Do another replacement in the config file. Replace _YOUR_LAMBDA_ARN_ with the arn you copied.
6. Deploy your skills information with `npm run deploy-skill`

## Development

There are 5 predefined npm scripts that will make skill development easier for you:

- `npm run deploy`: Execute this command to only upload the skills code.

- `npm run deploy:init`: This command will setup all AWS components and upload your skills code. It is only necessary 
when you initialize the project or update the serverless.yml file

- `npm run deploy:info`: Helper command to display all lambda infos, like the arn.

- `npm run deploy-skill`: Deploy the skills information to the developer console.

- `npm run logs:tail`: Get a stream of the lambda functions logs into your console. Very helpful for "console debugging".

When you have initialized everything you will most of the time only need the first and last command.
